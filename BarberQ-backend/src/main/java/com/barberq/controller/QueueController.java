package com.barberq.controller;

import com.barberq.model.User;
import com.barberq.model.QueueEntry;
import com.barberq.repository.UserRepository;
import com.barberq.repository.QueueEntryRepository;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class QueueController {
    private final UserRepository userRepository;
    private final QueueEntryRepository queueEntryRepository;

    public QueueController(UserRepository userRepository, QueueEntryRepository queueEntryRepository) {
        this.userRepository = userRepository;
        this.queueEntryRepository = queueEntryRepository;
    }

    // Get all barbers
    @GetMapping("/barbers")
    public List<User> getBarbers() {
        return userRepository.findAll().stream()
            .filter(user -> user.getRole() != null && user.getRole().name().equals("BARBER"))
            .toList();
    }

    // Join a queue
    @PostMapping("/queue/join")
    public ResponseEntity<?> joinQueue(@RequestBody QueueJoinRequest request) {
        Optional<User> barber = userRepository.findById(request.getBarberId());
        if (barber.isEmpty() || barber.get().getRole() == null || !barber.get().getRole().name().equals("BARBER")) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Barber not found");
        }
        QueueEntry entry = new QueueEntry();
        entry.setBarberId(request.getBarberId());
        entry.setCustomerName(request.getCustomerName());
        entry.setCustomerPhone(request.getCustomerPhone());
        entry.setService(request.getService());
        entry.setJoinedAt(LocalDateTime.now());
        queueEntryRepository.save(entry);
        return ResponseEntity.ok("Joined queue");
    }

    // Get queue for a barber
    @GetMapping("/queue/{barberId}")
    public List<QueueEntry> getQueue(@PathVariable String barberId) {
        return queueEntryRepository.findByBarberIdOrderByJoinedAtAsc(barberId);
    }

    // DTO for join queue
    public static class QueueJoinRequest {
        private String barberId;
        private String customerName;
        private String customerPhone;
        private String service;
        public String getBarberId() { return barberId; }
        public void setBarberId(String barberId) { this.barberId = barberId; }
        public String getCustomerName() { return customerName; }
        public void setCustomerName(String customerName) { this.customerName = customerName; }
        public String getCustomerPhone() { return customerPhone; }
        public void setCustomerPhone(String customerPhone) { this.customerPhone = customerPhone; }
        public String getService() { return service; }
        public void setService(String service) { this.service = service; }
    }
} 