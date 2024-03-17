<?php

require_once('IValidator.php');

class EmailValidator implements IValidator {
    
    public function validate(array $data): array {
        $result = ['isValid' => false, 'errorType' => ''];

        if(!isset($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            $result['errorType'] = 'InvalidEmailFormat';
            return $result;
        }

        $result['isValid'] = true;
        return $result;
    }
}