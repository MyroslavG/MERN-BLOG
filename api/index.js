const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://myro:m5Bw8HpcFcaRgqLy@cluster0.x7udsgm.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp');

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    const userDoc = await User.create({username, password});
    res.json(userDoc);
})

app.listen(4000);
//mongodb+srv://myro:m5Bw8HpcFcaRgqLy@cluster0.x7udsgm.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp
//m5Bw8HpcFcaRgqLy