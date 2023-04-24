import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import Movie from './models/movieModel.js';

dotenv.config();

const app = express();
const upload = multer();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.array());

app.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({con: true, msg: 'All Movies', data: movies});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

app.get('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    res.status(200).json(movie);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
})

app.post('/movies', async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(200).json(movie);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
})

app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByIdAndUpdate(id, req.body);
    if (!movie) {
      return res.status(404).json({message: `Cannot find any movie with ${id}`})
    }
    else {
      const updatedMovie = await Movie.findById(id);
      res.status(200).json(updatedMovie);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByIdAndDelete(id, req.body);
    if (!movie) {
      return res.status(404).json({message: `Cannot find any movie with ${id}`})
    }
    else {
      res.status(200).json(movie);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

mongoose.connect(process.env.DB || '')
  .then(() => console.log('Database is connected ...'))

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));


