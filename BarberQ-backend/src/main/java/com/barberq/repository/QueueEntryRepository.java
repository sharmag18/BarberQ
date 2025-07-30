package com.barberq.repository;

import com.barberq.model.QueueEntry;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface QueueEntryRepository extends MongoRepository<QueueEntry, String> {
    List<QueueEntry> findByBarberIdOrderByJoinedAtAsc(String barberId);
} 