<?php

require_once('../includes/db_connection.php');
require_once('../models/UserModel.php');
require_once('../validator/EmailValidator.php');
require_once('../validator/PasswordValidator.php');

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
        handleRegistration(new UserModel($conn), new EmailValidator(), new PasswordValidator());
        break;
    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method Not Allowed']);
        break;
}

function handleRegistration(UserModel $userModel, EmailValidator $emailValidator, PasswordValidator $passwordValidator) {
    $data = json_decode(file_get_contents('php://input'), true);

    $username = $data['username'];
    $password = $data['password'];

    $emailValidatorResult = $emailValidator->validate(['email' => $username]);

    if(!$emailValidatorResult['isValid']) {
        http_response_code(422);
        echo json_encode(['error' => $emailValidatorResult['errorType']]);
        return;
    }

    $passwordValidatorResult = $passwordValidator->validate(['password' => $password]);
    
    if(!$passwordValidatorResult['isValid']) {
        http_response_code(422);
        echo json_encode(['error' => $passwordValidatorResult['errorType']]);
        return;
    }

    $registrationResult = $userModel->registerUser($username, $password);

    if ($registrationResult) {
        echo json_encode(['message' => 'User registered successfully']);
    } else {
        http_response_code(401);
        echo json_encode(['error' => 'Invalid username or password']);
    }
}
