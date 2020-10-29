//package com.practicing.dev.employee_manager_backend.monitoring;
//
//import org.springframework.boot.actuate.health.Health;
//import org.springframework.boot.actuate.health.HealthIndicator;
//import org.springframework.stereotype.Component;
//
//@Component
//public class LoggerService implements HealthIndicator {
//    private final String LOGGER_SERVICE = "LoggerService";
//
//    @Override
//    public Health health() {
//        if (isLoggerHealthy()){
//            return Health.up().withDetail(LOGGER_SERVICE,"Service is Running").build();
//        }
//        return Health.down().withDetail(LOGGER_SERVICE,"Service is not available").build();
//    }
//
//    private boolean isLoggerHealthy(){
//
//        return false;
//    }
//}
