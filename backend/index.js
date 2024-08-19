const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config();

const app = express();
app.use(cors());
 
app.use(express.json());


mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const cardSchema = new mongoose.Schema({

   title: { type: String, required: true, unique: true },
   description: { type: String, required: true },
   

}, { versionKey: false });


const Card = mongoose.model('Card', cardSchema);

app.post('/cards', async (req, res) => {
    try {
        const {title, description} = req.body;
        const newCard = new Card({ title, description });
        await newCard.save();
        res.status(201).json(newCard);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.get('/cards', async(req,res)=>{
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (err) {
        res.status(500).json({ message: err.message });
    } 
});

app.get('/cards/:title', async (req, res) => {
    try {
        const card = await Card.findOne({ title: req.params.title });
        if (card) {
            res.json(card);
        } else {
            res.status(404).json({ message: 'Card not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
