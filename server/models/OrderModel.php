<?php

class OrderModel {
    private $conn;

    public function __construct($conn) {
        $this->conn = $conn;
    }


    public function addOrder($userId, $productName, $firstName, $lastName, $phoneNumber, $deliveryType, $paymentMethod, $deliveryAddress) {
        $productName = $this->conn->real_escape_string($productName);
        $firstName = $this->conn->real_escape_string($firstName);
        $lastName = $this->conn->real_escape_string($lastName);
        $phoneNumber = $this->conn->real_escape_string($phoneNumber);
        $deliveryType = $this->conn->real_escape_string($deliveryType);
        $paymentMethod = $this->conn->real_escape_string($paymentMethod);
        $deliveryAddress = $this->conn->real_escape_string($deliveryAddress);
        $orderStatus = "active";
    
	$stmt = $this->conn->prepare("INSERT INTO offers (user_id, product_name, first_name, last_name, phone_number, delivery_type, payment_method, delivery_address, statusOffer) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");

	if ($stmt === false) {
		return false;
	}

	$stmt->bind_param('issssssss', $userId, $productName, $firstName, $lastName, $phoneNumber, $deliveryType, $paymentMethod, $deliveryAddress, $orderStatus);
	$result = $stmt->execute();
    
	if ($userId !== null && $result) {
		$stmtHistory = $this->conn->prepare("INSERT INTO order_history (userId, product_name) VALUES (?, ?)");
		$stmtHistory->bind_param('is', $userId, $productName);
		$stmtHistory->execute();
		$stmtHistory->close();
	}

	$stmt->close();

	return $result;
    }

    public function updateOrderStatus($orderId, $orderStatus) {
        $orderId = $this->conn->real_escape_string($orderId);
        $orderStatus = $this->conn->real_escape_string($orderStatus);

        $stmt = $this->conn->prepare("UPDATE offers SET statusOffer = ? WHERE id = ?");
        if($stmt === false) {
            return false;
        }

        $stmt->bind_param('ss', $orderStatus, $orderId);
        $result = $stmt->execute();
        $stmt->close();

        return $result;
    }
    
}