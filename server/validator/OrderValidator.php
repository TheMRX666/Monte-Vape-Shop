<?php

require_once('IValidator.php');

class OrderValidator implements IValidator {

    public function validate(array $data): array {
        $result = ['isValid' => false, 'errorType' => ''];

        $requiredFields = ['product_name', 'first_name', 'last_name', 'phone_number', 'delivery_type', 'payment_method', 'delivery_address'];
        foreach ($requiredFields as $field) {
            if (!isset($data[$field])) {
                $result['errorType'] = 'Missing required field: ' . $field;
                return $result;
            }
        }

        $result['isValid'] = true;
        return $result;
    }
}