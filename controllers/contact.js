const Contact = require('../models/Contact');

const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    const contact = new Contact({ name, email, message });
    await contact.save();
    
    console.log('Contact message saved:', contact);
    res.json({ message: 'Contact message sent successfully', contact });
  } catch (error) {
    console.error('Contact creation error:', error);
    res.status(500).json({ message: error.message });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('Contact fetch error:', error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createContact, getAllContacts };