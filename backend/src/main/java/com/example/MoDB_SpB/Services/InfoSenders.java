package com.example.MoDB_SpB.Services;

import com.example.MoDB_SpB.model.GroceryItem;
import com.example.MoDB_SpB.repository.CustomItemRepository;
import com.example.MoDB_SpB.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class InfoSenders {

    @Autowired
    ItemRepository groceryItemRepo;

    @Autowired
    CustomItemRepository customRepo;

    List<GroceryItem> itemList = new ArrayList<GroceryItem>();

    public GroceryItem createGroceryItem(String id, String name, int q, String cat) {
        GroceryItem item = new GroceryItem(id, name, q, cat);
        groceryItemRepo.save(item);
        return item;
    }

    public List<GroceryItem> showAllGroceryItems() {
        itemList = groceryItemRepo.findAll();
        return itemList;
//        itemList.forEach(item -> return(getItemDetails(item)));
    }

    public GroceryItem getItemsByName(String name) {
//        System.out.println(("Getting item by name: " + name));
        GroceryItem item = groceryItemRepo.findItemByName(name);
//        System.out.println(getItemDetails(item));
        return item;
    }

    public List<GroceryItem> getItemsByCategory(String category) {
//        System.out.println("Getting items for the category " + category);
        List<GroceryItem> list = groceryItemRepo.findAll(category);
        return list;
//        list.forEach((item -> System.out.println("Name: " + item.getName() + " Quantity: " + item.getQuantity())));
    }

    public void updateItemQuantity(String name, float newQuantity) {
        System.out.println("Updating " + name + "'s quantity");
        customRepo.updateItemQuantity(name, newQuantity);
    }

    public void deleteGroceryItem(String id) {
        groceryItemRepo.deleteById(id);
//        System.out.println("Item with id " + id + " has been deleted");
    }

    public long findNumberGroceryItems() {
        long count = groceryItemRepo.count();
        return count;
//        System.out.println("Number of items in grocery store is " + count);
    }

    public String getItemDetails (GroceryItem item) {
        System.out.println(
                "Item Name: " + item.getName() +
                        "\nItem Quantity: " + item.getQuantity() +
                        "\nItem Category: "	+ item.getCategory()
        );
        return "";
    }
}
