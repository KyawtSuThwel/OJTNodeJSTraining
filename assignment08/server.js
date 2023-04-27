import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

MongoClient.connect(process.env.DATABASE || "", { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('CRUD-Testing')
    var quotesCollection = db.collection('quotes')

    app.set('view engine', 'ejs')
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.use(express.static('public'))

    app.get('/', (req, res) => {
      db.collection('quotes')
        .find()
        .toArray()
        .then(results => {
          res.render('index.ejs', { quotes: results })
        })
        .catch(error => console.error(error))
    })

    app.post('/quotes', (req, res) => {
      quotesCollection
        .insertOne(req.body)
        .then(result => {
          console.log(result);
          res.redirect('/')
        })
        .catch(error => console.error(error))
    })

    app.put('/quotes', (req, res) => {
      quotesCollection.findOneAndUpdate(
        { name: 'Yoda' },
        {
          $set: {
            name: req.body.name,
            quote: req.body.quote
          }
        },
        {
          upsert: true
        }
      )
        .then(result => console.log('Success'))
        .catch(error => console.error(error))
    })

    app.delete('/quotes', (req, res) => {
      quotesCollection
        .deleteOne({ name: req.body.name })
        .then(result => {
          if (result.deletedCount === 0) {
            return res.json('No quote to delete')
          }
          res.json(`Deleted Darth Vader's quote`)
        })
        .catch(error => console.error(error))
    })

    app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))
  })
  .catch(error => console.error(error))

