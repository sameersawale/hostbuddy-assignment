package com.example.hostbuddyassignment.Repository;

import com.example.hostbuddyassignment.enums.Category;
import com.example.hostbuddyassignment.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Integer> {

    public Item findByName(String name);

}
