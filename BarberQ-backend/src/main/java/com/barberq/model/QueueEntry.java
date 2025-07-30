package com.barberq.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Document(collection = "queue_entries")
public class QueueEntry {
    @Id
    private String id;
    private String barberId;
    private String customerName;
    private String customerPhone;
    private String service;
    private LocalDateTime joinedAt;

    public QueueEntry() {}
    public QueueEntry(String id, String barberId, String customerName, String customerPhone, String service, LocalDateTime joinedAt) {
        this.id = id;
        this.barberId = barberId;
        this.customerName = customerName;
        this.customerPhone = customerPhone;
        this.service = service;
        this.joinedAt = joinedAt;
    }
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getBarberId() { return barberId; }
    public void setBarberId(String barberId) { this.barberId = barberId; }
    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }
    public String getCustomerPhone() { return customerPhone; }
    public void setCustomerPhone(String customerPhone) { this.customerPhone = customerPhone; }
    public String getService() { return service; }
    public void setService(String service) { this.service = service; }
    public LocalDateTime getJoinedAt() { return joinedAt; }
    public void setJoinedAt(LocalDateTime joinedAt) { this.joinedAt = joinedAt; }
}
