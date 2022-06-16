package com.example.MoDB_SpB.GroceryController;

import com.example.MoDB_SpB.Services.InfoSenders;
import com.example.MoDB_SpB.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/groceries")
public class Controller {

    @Autowired
    private InfoSenders infoSenders;

    /* Add an item to the database */
    @PostMapping ("/addItems")
    public void addItems(@RequestParam String id, String name, int quantity, String category) {
        infoSenders.createGroceryItem (id, name, quantity, category);
    }

    /* Show all items in the database*/
    @GetMapping ("/showAllItems")
    public void showAllItems (){
        infoSenders.showAllGroceryItems();
    }

    /* Get all items with a certain name */
    @GetMapping ("/getByName")
    public void getByName (@RequestParam String name){
        infoSenders.getItemsByName(name);
    }

    /* Get all items in a certain category */
    @GetMapping ("/getByCategory")
    public void getByCateory (@RequestParam String category) {
        infoSenders.getItemsByCategory(category);
    }

    /* Update item quantity */
    @PutMapping ("/updateItemQuantity")
    public void updateItemQuantity (@RequestParam String name, int quantity) {
        infoSenders.updateItemQuantity(name, quantity);
    }

    /* Delete an Item */
    @DeleteMapping ("/deleteItem")
    public void deleteItem (@RequestParam String id) {
        infoSenders.deleteGroceryItem(id);
    }

    /* Find total number of grocery items */
    @GetMapping ("/findTotal")
    public void findTotal () {
        infoSenders.findNumberGroceryItems();
    }

}
