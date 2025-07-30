package com.barberq.dto;

public class BarberRegisterRequest {
    private String name;
    private String phone;
    private String password;
    private String shopName;

    public BarberRegisterRequest() {}
    public BarberRegisterRequest(String name, String phone, String password, String shopName) {
        this.name = name;
        this.phone = phone;
        this.password = password;
        this.shopName = shopName;
    }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getShopName() { return shopName; }
    public void setShopName(String shopName) { this.shopName = shopName; }
} 