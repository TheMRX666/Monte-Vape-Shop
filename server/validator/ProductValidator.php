<?php 

require_once('IValidator.php');

class ProductValidator implements IValidator {
    public function validate(array $data): array {
        $result = ['isValid' => false, 'errorType' => ''];

        $requiredFields = ['name', 'description', 'img', 'price', 'stock_quantity', 'prodtype', 'category'];
        foreach($requiredFields as $field) {
            if(!isset($data[$field])){
                $result['errorType'] = 'Missing required field: ' . $field;
                return $result;
            }
        } 

        $result['isValid'] = true;
        return $result;
    }
}