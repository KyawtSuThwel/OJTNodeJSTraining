import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import bodyParser from 'body-parser';
import routes from './routes/route.js';
import secureRoute from './routes/secure-route.js';
import dotenv from 'dotenv';
import './config/passport.js';

import UserModel from './models/userModel.js';

mongoose.connect(process.env.DATABASE || "", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log("Database connected");
});
mongoose.set("useCreateIndex", true);
mongoose.connection.on('error', error => console.log(error) );
mongoose.Promise = global.Promise;

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.use('/user', passport.authenticate('jwt', { session: false }), secureRoute);

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`)
});