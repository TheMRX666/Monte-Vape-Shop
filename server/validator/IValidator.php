<?php

interface IValidator {
    public function validate(array $data) : array;
}