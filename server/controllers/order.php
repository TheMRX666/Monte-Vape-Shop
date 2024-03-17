<?php

require_once('../includes/db_connection.php');
require_once('../models/OrderModel.php');
require_once('../validator/OrderValidator.php');

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Endcoding");
    header("Access-Control-Allow-Credentials: true");
    header("Content-Length: 0");
    http_response_code(200);
    exit();
}

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Endcoding");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

switch ($method) {
    case 'POST':
        newOrder(new OrderModel($conn), new OrderValidator());
        break;
    case 'PUT':
        updateOrderStatus(new OrderModel($conn));
        break;
    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method Not Allowed']);
        break;
}

function newOrder(OrderModel $orderModel, OrderValidator $orderValidator) {
    global $conn;

    $data = json_decode(file_get_contents('php://input'), true);

    if (!$data) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid JSON data']);
        return;
    }

    $userId = $data['userId'];
    $productName = $data['product_name'];
    $firstName = $data['first_name'];
    $lastName = $data['last_name'];
    $phoneNumber = $data['phone_number'];
    $deliveryType = $data['delivery_type'];
    $paymentMethod = $data['payment_method'];
    $deliveryAddress = $data['delivery_address'];

    $orderValidatorResult = $orderValidator->validate($data);
    if(!$orderValidatorResult['isValid']){
        http_response_code(422);
        echo json_encode(['error' => $orderValidatorResult['errorType']]);
        return;
    }

    $resultOrder = $orderModel->addOrder($userId, $productName, $firstName, $lastName, $phoneNumber, $deliveryType, $paymentMethod, $deliveryAddress);

    if ($resultOrder) {
        echo json_encode(['message' => 'Order added successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Error adding Order']);
    }
}

function updateOrderStatus(OrderModel $orderModel) {
    global $conn;
    $data = json_decode(file_get_contents('php://input'), true);

    $orderId = $conn->real_escape_string($data['orderId']);
    if(!$orderId){
        http_response_code(400);
        echo json_encode(['error' => 'Order Id is required']);
        return;
    }

    $orderId = $conn->real_escape_string($orderId);
    $orderStatus = 'unactive';
    $updateResult = $orderModel->updateOrderStatus($orderId, $orderStatus);

    if ($updateResult) {
        echo json_encode(['message' => 'Order status updated successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Error updating order status']);
    }
}
