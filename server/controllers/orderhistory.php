<?php

require_once('../includes/db_connection.php');
require_once('../models/OrderHistoryModel.php');

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

switch($method){
    case 'GET':
        $userId = $conn->real_escape_string($_GET['id']);
        handleGetHistory(new OrderHistoryModel($conn), $userId);
        break;
    default:
        break;
}

function handleGetHistory(OrderHistoryModel $orderHistoryModel, $userId){
    
    $history = $orderHistoryModel->getOrederHistory($userId);

    if($history){
        echo json_encode(['data' => $history]);
    } else{
        http_response_code(500);
    }
}