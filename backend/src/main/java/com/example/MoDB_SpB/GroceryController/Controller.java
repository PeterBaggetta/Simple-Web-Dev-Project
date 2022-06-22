package com.example.MoDB_SpB.GroceryController;

import com.example.MoDB_SpB.Services.InfoSenders;
import com.example.MoDB_SpB.model.GroceryItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/groceries")
public class Controller {

    @Autowired
    private InfoSenders infoSenders;

    /* Add an item to the database */
    @PostMapping ("/addItems")
    public GroceryItem addItems(@RequestParam String id, String name, int quantity, String category) {
        return (infoSenders.createGroceryItem (id, name, quantity, category));
    }

    /* Show all items in the database*/
    @GetMapping ("/showAllItems")
    public List<GroceryItem> showAllItems (){
        return infoSenders.showAllGroceryItems();
    }

    /* Get all items with a certain name */
    @GetMapping ("/getByName")
    public GroceryItem getByName (@RequestParam String name){
        return infoSenders.getItemsByName(name);
    }

    /* Get all items in a certain category */
    @GetMapping ("/getByCategory")
    public List<GroceryItem> getByCateory (@RequestParam String category) {
        return infoSenders.getItemsByCategory(category);
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
    public long findTotal () {
        return infoSenders.findNumberGroceryItems();
    }

}
