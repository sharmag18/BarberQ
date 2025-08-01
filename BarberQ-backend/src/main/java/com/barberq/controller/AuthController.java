package com.barberq.controller;

import com.barberq.dto.AuthResponse;
import com.barberq.dto.LoginRequest;
import com.barberq.dto.RegisterRequest;
import com.barberq.dto.BarberRegisterRequest;
import com.barberq.dto.BarberLoginRequest;
import com.barberq.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(userService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        return ResponseEntity.ok(userService.authenticate(request));
    }

    @PostMapping("/barber-register")
    public ResponseEntity<AuthResponse> barberRegister(@RequestBody BarberRegisterRequest request) {
        // Call your service to register the barber
        return ResponseEntity.ok(userService.registerBarber(request));
    }

    @PostMapping("/barber-login")
    public ResponseEntity<AuthResponse> barberLogin(@RequestBody BarberLoginRequest request) {
        // Call your service to authenticate the barber
        return ResponseEntity.ok(userService.authenticateBarber(request));
    }
} 