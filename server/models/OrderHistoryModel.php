<?php

class OrderHistoryModel{
    private $conn;

    public function __construct($conn) {
        $this->conn = $conn;
    }

    public function getOrederHistory($userId){
        $stmt = $this->conn->prepare("SELECT * FROM order_history WHERE userId = ?");
        $stmt->bind_param('i', $userId);
        $stmt->execute();
        $result = $stmt->get_result();
    
        if ($result && $result->num_rows > 0) {
            return $result->fetch_all(MYSQLI_ASSOC);
        } else {
            return false;
        }
    }
}