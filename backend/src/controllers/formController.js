// src/controllers/formController.js
import { FormEntry } from "../db";

const submitForm = async (req, res) => {
  try {
    const formEntry = await FormEntry.create(req.body);
    res.status(201).json(formEntry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { submitForm };
