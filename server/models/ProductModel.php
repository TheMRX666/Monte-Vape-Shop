<?php

class ProductModel {
    private $conn;

    public function __construct($conn) {
        $this->conn = $conn;
    }

    public function getAllProducts() {
        $sql = "SELECT * FROM products";
        $result = $this->conn->query($sql);

        if ($result) {
            return $result->fetch_all(MYSQLI_ASSOC);
        } else {
            return false;
        }
    }

    public function getProductsByType($productType) {
        $sql = "SELECT * FROM products WHERE prodtype = '$productType'";
        $result = $this->conn->query($sql);
    
        if ($result && $result->num_rows > 0) {
            return $result->fetch_all(MYSQLI_ASSOC);
        } else {
            return false;
        }
    }

    public function getProductsByCategory($productCategory) {
        $sql = "SELECT * FROM products WHERE category = '$productCategory'";
        $result = $this->conn->query($sql);
    
        if ($result && $result->num_rows > 0) {
            return $result->fetch_all(MYSQLI_ASSOC);
        } else {
            return false;
        }
    }

    public function getProductByName($productName) {
        $stmt = $this->conn->prepare("SELECT * FROM products WHERE name = ?");
        $stmt->bind_param('s', $productName);
        $stmt->execute();
        $result = $stmt->get_result();
    
        if ($result && $result->num_rows > 0) {
            return $result->fetch_assoc();
        } else {
            return false;
        }
    }

    public function getProductById($productId) {
        $stmt = $this->conn->prepare("SELECT * FROM products WHERE id = ?");
        $stmt->bind_param('i', $productId);
        $stmt->execute();
        $result = $stmt->get_result();
    
        if ($result && $result->num_rows > 0) {
            return $result->fetch_assoc();
        } else {
            return false;
        }
    }

    public function addProduct($productName, $description, $productImg, $price, $stockQuantity, $productType, $productCategory) {
        $productName = $this->conn->real_escape_string($productName);
        $description = $this->conn->real_escape_string($description);
        $productImg = $this->conn->real_escape_string($productImg);
        $price = $this->conn->real_escape_string($price);
        $stockQuantity = $this->conn->real_escape_string($stockQuantity);
        $productType = $this->conn->real_escape_string($productType);
        $productCategory = $this->conn->real_escape_string($productCategory);

        $stmt = $this->conn->prepare("INSERT INTO products (name, description, img, price, stock_quantity, prodtype, category) 
                VALUES (?, ?, ?, ?, ?, ?, ?)");

        if($stmt == false) {
            return false;
        }

        $stmt->bind_param('sssssss', $productName, $description, $productImg, $price, $stockQuantity, $productType, $productCategory);
        return $stmt->execute();
    }
}

