package com.barberq.dto;

public class AuthResponse {
    private String token;
    private String username;
    private String role;
    private String userId;

    public AuthResponse() {}
    public AuthResponse(String token, String username, String role, String userId) {
        this.token = token;
        this.username = username;
        this.role = role;
        this.userId = userId;
    }
    public String getToken() { return token; }
    public void setToken(String token) { this.token = token; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }
    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }
} 