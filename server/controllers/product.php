<?php

require_once('../includes/db_connection.php');
require_once('../models/ProductModel.php');

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        handleGetRequest();
        break;
    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method Not Allowed']);
        break;
}

function handleGetRequest() {
    global $conn;

    if (isset($_GET['id'])) {
        $productId = $conn->real_escape_string($_GET['id']);
        getProductFromId(new ProductModel($conn), $productId);
    } else if (isset($_GET['type'])) {
        $productType = $conn->real_escape_string($_GET['type']);
        getProductFromType(new ProductModel($conn), $productType);
    } else if (isset($_GET['category'])) {
        $productCategory = $conn->real_escape_string($_GET['category']);
        getProductFromCategory(new ProductModel($conn), $productCategory);
    } else if (isset($_GET['name'])) {
        $productName = $conn->real_escape_string($_GET['name']);
        getProductFromName(new ProductModel($conn), $productName);
    } else {
        getAllProducts(new ProductModel($conn));
    }
}

function getAllProducts(ProductModel $productModel) {

    $products = $productModel->getAllProducts();

    if ($products !== false) {
        echo json_encode(['data' => $products]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Error retrieving products']);
    }
}

function getProductFromType(ProductModel $productModel, $productType) {
    $product = $productModel->getProductsByType($productType);

    if ($product !== false) {
        echo json_encode(['data' => $product]);
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Product not found']);
    }
}


function getProductFromName(ProductModel $productModel, $productName) {
    $product = $productModel->getProductByName($productName);

    if ($product !== false) {
        echo json_encode(['data' => $product]);
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Product not found']);
    }
}

function getProductFromCategory(ProductModel $productModel, $productCategory) {
    $product = $productModel->getProductsByCategory($productCategory);

    if ($product !== false) {
        echo json_encode(['data' => $product]);
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Product not found']);
    }
}

function getProductFromId(ProductModel $productModel, int $productId) {
    $product = $productModel->getProductById($productId);

    if ($product !== false) {
        echo json_encode(['data' => $product]);
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Product not found']);
    }
}
