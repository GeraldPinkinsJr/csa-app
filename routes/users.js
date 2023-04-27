var express = require('express');
var router = express.Router();
const { authenticate } = require("../middlewares/auth");

const { User } = require("../models");

// Create a new user
router.post("/", async (req, res) => {
  try {
    const user = await user.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
});

// Get all users, including associated items
router.get("/", async (req, res) => {
  try {
    const users = await user.findAll(); // how can we include the ITEMS associated with the users in this response?
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users", error });
  }
});

// Get a specific user by ID, including associated items
router.get("/:id", async (req, res) => {
  try {
    const user = await user.findByPk(req.params.id); // how can we include the ITEMS associated with the users in this response?

    if (!user) {
      res.status(404).json({ message: "user not found" });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving user", error });
  }
});

// Update a user by ID
router.put("/:id", async (req, res) => {
  const { name, price } = req.body;

  try {
    const newuser = {};
    if (name !== undefined) {
      newuser.name = name;
    }
    if (price !== undefined) {
      newuser.price = price;
    }
    const [updated] = await user.update(newuser, {
      where: { id: req.params.id },
    });

    if (updated) {
      const updateduser = await user.findByPk(req.params.id);
      res.json(updateduser);
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
});

// Delete a user by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await user.destroy({
      where: { id: req.params.id },
    });

    if (deleted) {
      res.status(204).json({ message: "user deleted" });
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
});

module.exports = router;
