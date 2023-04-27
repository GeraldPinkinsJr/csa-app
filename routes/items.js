const express = require("express");
const router = express.Router();
const { authenticate } = require("../middlewares/auth");

const { Item } = require("../models");

// Create a new Item
router.post("/", async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: "Error creating Item", error });
  }
});

// Get all items, including associated items
router.get("/", async (req, res) => {
  try {
    const items = await Item.findAll(); // how can we include the ITEMS associated with the items in this response?
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving item", error });
  }
});

// Get a specific item by ID, including associated items
router.get("/:id", async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id); // how can we include the ITEMS associated with the items in this response?

    if (!item) {
      res.status(404).json({ message: "Item not found" });
    } else {
      res.json(item);
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving item", error });
  }
});


// Update a item by ID
router.put("/:id", async (req, res) => {
  const { name, price } = req.body;

  try {
    const newitem = {};
    if (name !== undefined) {
      newitem.name = name;
    }
    if (price !== undefined) {
      newitem.price = price;
    }
    const [updated] = await item.update(newitem, {
      where: { id: req.params.id },
    });

    if (updated) {
      const updateditem = await item.findByPk(req.params.id);
      res.json(updateditem);
    } else {
      res.status(404).json({ message: "item not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating item", error });
  }
});

// Delete a item by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await item.destroy({
      where: { id: req.params.id },
    });

    if (deleted) {
      res.status(204).json({ message: "item deleted" });
    } else {
      res.status(404).json({ message: "item not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting item", error });
  }
});






module.exports = router;
