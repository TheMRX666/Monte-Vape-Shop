<?php

class CartModel {
    private $conn;

    function __construct($conn) {
        $this->$conn = $conn;
    }

    public function addItem($userName, $productName, $productPrice, $productImg) {
        $userName = $this->conn->real_escape_string($userName);
        $productName = $this->conn->real_escape_string($productName);
        $productPrice = $this->conn->real_escape_string($productPrice);
        $productImg = $this->conn->real_escape_string($productImg);

        $stmt = $this->conn->prepare("INSERT INTO cart (userName, productname, productprice, productimg) VALUES (?,?,?,?)");
        $stmt->bind_param("ssss", $userName, $productName, $productPrice, $productImg);
        $stmt->execute();
    }
}