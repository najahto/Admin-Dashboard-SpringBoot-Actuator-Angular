package com.practicing.dev.employee_manager_backend.exceptions;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(String msg) {
        super(msg);
    }
}
