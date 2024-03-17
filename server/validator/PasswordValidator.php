<?php 

require_once('IValidator.php');

class PasswordValidator implements IValidator {

    public function validate(array $data): array
    {
        $result = ['isValid' => false, 'errorType' => ''];

        if (!isset($data['password']) || strlen($data['password']) < 8) {
            $result['errorType'] = 'PasswordTooShort';
            return $result;
        }

        $result['isValid'] = true;
        return $result;
    }
}