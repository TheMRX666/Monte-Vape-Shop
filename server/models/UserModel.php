<?php

class UserModel {
    private $conn;

    public function __construct($conn) {
        $this->conn = $conn;
    }

    public function registerUser($username, $password) {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $username = $this->conn->real_escape_string($username);
        $sql = "SELECT * FROM users WHERE username = ?";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $stmt->store_result();

        if($stmt->num_rows == 0){
            $sql = "INSERT INTO users (username, password) VALUES (?, ?)";
            $stmt = $this->conn->prepare($sql);
            $stmt->bind_param("ss", $username, $hashedPassword);
    
            return $stmt->execute();
        }
        return false;
    }

    public function authUser($username, $password) {
        $username = $this->conn->real_escape_string($username);

        $sql = "SELECT id, password FROM users WHERE username = ?";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows == 1) {
            $user = $result->fetch_assoc();

            if (password_verify($password, $user['password'])) {
                return $user;
            }
        }
        return false;
    }
}

