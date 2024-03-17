<?php 

require_once('../includes/db_connection.php');
require_once('../models/ProductModel.php');
require_once('../validator/ProductValidator.php');

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
        handlePostRequest(new ProductModel($conn), new ProductValidator());
        break;
    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method Not Allowed']);
        break;
}

function handlePostRequest(ProductModel $productModel, ProductValidator $productValidator) {
    global $conn;

    $data = json_decode(file_get_contents('php://input'), true);
    if (!$data) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid JSON data']);
        return;
    }

    $productName = $data['name'];
    $description = $data['description'];
    $productImg = $data['productImg'];
    $price = $data['price'];
    $stockQuantity = $data['stock_quantity'];
    $productType = $data['product_type'];
    $productCategory = $data['product_category'];

    $productValidatorResult = $productValidator->validate($data);
    if(!$productValidatorResult['isValid']) {
        http_response_code(422);
        echo json_encode(['error' => $productValidatorResult['errorType']]);
        return;
    }
    
    try {
        $addProductResult = $productModel->addProduct($productName, $description, $productImg, $price, $stockQuantity, $productType, $productCategory);

        if ($addProductResult) {
            echo json_encode(['message' => 'Product added successfully']);
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'Error adding product']);
        }
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Internal Server Error:'. $e->getMessage()]);
    }
}