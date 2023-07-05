package com.example.hostbuddyassignment.model;

import com.example.hostbuddyassignment.enums.Category;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "item")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private int price;

    @Enumerated(value=EnumType.STRING)
    private Category category;

    private String description;
}
