package com.barberq.service;

import com.barberq.dto.AuthResponse;
import com.barberq.dto.LoginRequest;
import com.barberq.dto.RegisterRequest;
import com.barberq.dto.BarberRegisterRequest;
import com.barberq.dto.BarberLoginRequest;
import com.barberq.model.User;
import com.barberq.model.Role;
import com.barberq.repository.UserRepository;
import com.barberq.util.JwtUtil;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public UserService(UserRepository userRepository, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
    }

    public AuthResponse register(RegisterRequest request) {
        if (userRepository.findByPhone(request.getPhone()).isPresent()) {
            throw new RuntimeException("Phone number already exists");
        }
        User user = User.builder()
                .name(request.getName())
                .phone(request.getPhone())
                .role(Role.CUSTOMER)
                .build();
        userRepository.save(user);
        String token = jwtUtil.generateToken(user);
        return new AuthResponse(token, user.getName(), user.getRole().name(), user.getId());
    }

    public AuthResponse authenticate(LoginRequest request) {
        User user = userRepository.findByPhone(request.getPhone())
                .orElseThrow(() -> new RuntimeException("Invalid phone number"));
        String token = jwtUtil.generateToken(user);
        return new AuthResponse(token, user.getName(), user.getRole().name(), user.getId());
    }

    public AuthResponse registerBarber(BarberRegisterRequest request) {
        if (userRepository.findByPhone(request.getPhone()).isPresent()) {
            throw new RuntimeException("Phone number already exists");
        }
        User user = User.builder()
                .name(request.getName())
                .phone(request.getPhone())
                .password(passwordEncoder.encode(request.getPassword()))
                .shopName(request.getShopName())
                .role(Role.BARBER)
                .build();
        userRepository.save(user);
        String token = jwtUtil.generateToken(user);
        return new AuthResponse(token, user.getName(), user.getRole().name(), user.getId());
    }

    public AuthResponse authenticateBarber(BarberLoginRequest request) {
        User user = userRepository.findByPhone(request.getPhone())
                .orElseThrow(() -> new RuntimeException("Invalid phone number or password"));
        if (user.getRole() != Role.BARBER) {
            throw new RuntimeException("Not a barber account");
        }
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid phone number or password");
        }
        String token = jwtUtil.generateToken(user);
        return new AuthResponse(token, user.getName(), user.getRole().name(), user.getId());
    }
} 