package com.barberq.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Email;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.index.Indexed;

@Document(collection = "users")
public class User {
    @Id
    private String id;
    
    private String name;
    private String phone;
    private Role role;
    private String password; // for barbers
    private String shopName; // for barbers
    
    // Constructors
    public User() {}
    
    public User(String id, String name, String phone, String password, String shopName, Role role) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.password = password;
        this.shopName = shopName;
        this.role = role;
    }
    
    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    
    public Role getRole() { return role; }
    public void setRole(Role role) { this.role = role; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getShopName() { return shopName; }
    public void setShopName(String shopName) { this.shopName = shopName; }

    public static Builder builder() { return new Builder(); }
    public static class Builder {
        private String id;
        private String name;
        private String phone;
        private String password;
        private String shopName;
        private Role role;
        public Builder id(String id) { this.id = id; return this; }
        public Builder name(String name) { this.name = name; return this; }
        public Builder phone(String phone) { this.phone = phone; return this; }
        public Builder password(String password) { this.password = password; return this; }
        public Builder shopName(String shopName) { this.shopName = shopName; return this; }
        public Builder role(Role role) { this.role = role; return this; }
        public User build() { return new User(id, name, phone, password, shopName, role); }
    }
}
