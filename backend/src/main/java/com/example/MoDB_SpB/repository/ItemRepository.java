package com.example.MoDB_SpB.repository;

import com.example.MoDB_SpB.model.GroceryItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends MongoRepository<GroceryItem, String> {

    // Filters the specific item
    @Query("{name:'?0'}")
    GroceryItem findItemByName(String name);

    // Filters item within a specific category
    @Query(value="{category:'?0'}", fields="{'name' : 1, 'quantity' : 1}")
    List<GroceryItem> findAll(String category);

    public long count();
}
