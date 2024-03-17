<?php

require_once('../includes/db_connection.php');
require_once('../models/UserModel.php');
require_once('../validator/EmailValidator.php');
require_once('../validator/PasswordValidator.php');
require_once('../vendor/autoload.php');

use \Firebase\JWT\JWT;

$secretKey = '29c0ade0f9bb4c9a305e56255c949d666177e58b0cb0926fc82d4d014cefe5ed';

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
        handleAutentication(new UserModel($conn), new EmailValidator(), new PasswordValidator(), $secretKey);
        break;
    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method Not Allowed']);
        break;
}

function handleAutentication(UserModel $userModel, EmailValidator $emailValidator, PasswordValidator $passwordValidator, $secretKey) {
    $data = json_decode(file_get_contents('php://input'), true);

    $username = $data['username'];
    $password = $data['password'];

    $emailValidatorResult = $emailValidator->validate(['email' => $username]);
    if(!$emailValidatorResult['isValid']) {
        echo json_encode(['error' => $emailValidatorResult['errorType']]);
        return;
    }

    $passwordValidatorResult = $passwordValidator->validate(['password' => $password]);
    if(!$passwordValidatorResult['isValid']) {
        http_response_code(422);
        echo json_encode(['error' => $passwordValidatorResult['errorType']]);
        return;
    }

    $authResult = $userModel->authUser($username, $password);

    if ($authResult) {
        $userid = $authResult['id'];

        $issuedAt = time();
        $expire = $issuedAt + 3600;

        $payload = [
            'iat' => $issuedAt,
            'exp' => $expire, 
            'data' => [
                'username' => $username,
                 'userid' => $userid,
            ]
        ];

        $jwt = JWT::encode($payload, $secretKey, 'HS256');
        echo json_encode(['token' => $jwt]);


    } else {
        echo json_encode(['error' => 'Invalid username or password']);
        http_response_code(401);
    }

}