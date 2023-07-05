package com.example.hostbuddyassignment.Service;

import com.example.hostbuddyassignment.DTO.ItemDTO;
import com.example.hostbuddyassignment.Repository.ItemRepository;
import com.example.hostbuddyassignment.enums.Category;
import com.example.hostbuddyassignment.model.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    @Autowired
    ItemRepository itemRepository;

    public Item addItem(ItemDTO itemDTO) throws Exception{
       Item item=new Item();
       item.setName(itemDTO.getName());
       item.setPrice(itemDTO.getPrice());
       item.setCategory(itemDTO.getCategory());
       item.setDescription(itemDTO.getDescription());

       return itemRepository.save(item);
    }

    public List<Item> getAllItems() throws Exception{

        return itemRepository.findAll();
    }

    public Item getByName(String name) throws Exception{
        return itemRepository.findByName(name);
    }


}
