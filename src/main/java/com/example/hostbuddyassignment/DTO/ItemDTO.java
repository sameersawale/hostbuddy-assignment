package com.example.hostbuddyassignment.DTO;

import com.example.hostbuddyassignment.enums.Category;
import lombok.Data;

@Data
public class ItemDTO {

    private String name;

    private int price;

    private Category category;

    private String description;
}
