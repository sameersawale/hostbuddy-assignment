package com.example.hostbuddyassignment.Controller;

import com.example.hostbuddyassignment.DTO.ItemDTO;
import com.example.hostbuddyassignment.Service.ItemService;
import com.example.hostbuddyassignment.enums.Category;
import com.example.hostbuddyassignment.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {

    @Autowired
    ItemService itemService;

    @PostMapping("/add")
    public Item addItem(@RequestBody ItemDTO itemDTO) throws Exception {
        return itemService.addItem(itemDTO);
    }


    @GetMapping("/itemList")
    public List<Item> getAllItems() throws Exception {
        return itemService.getAllItems();
    }

    @GetMapping("/search/{name}")
    public Item getByName(@PathVariable("name") String name) throws Exception {
        return itemService.getByName(name);
    }






}
