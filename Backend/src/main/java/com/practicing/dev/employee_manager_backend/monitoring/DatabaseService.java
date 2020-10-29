//package com.practicing.dev.employee_manager_backend.monitoring;
//
//import org.springframework.boot.actuate.health.Health;
//import org.springframework.boot.actuate.health.HealthIndicator;
//import org.springframework.stereotype.Component;
//
//@Component
//public class DatabaseService implements HealthIndicator {
//    private final String DB_SERVICE = "DatabaseService";
//
//    @Override
//    public Health health() {
//        if (isDatabaseHealthy()){
//            return Health.up().withDetail(DB_SERVICE,"Service is Running").build();
//        }
//        return Health.down().withDetail(DB_SERVICE,"Service is not available").build();
//    }
//
//    private boolean isDatabaseHealthy(){
//
//        return true;
//    }
//}
