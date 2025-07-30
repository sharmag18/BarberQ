package com.barberq;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories(basePackages = "com.barberq.repository")
public class BarberqApplication {
    public static void main(String[] args) {
        SpringApplication.run(BarberqApplication.class, args);
    }
}
