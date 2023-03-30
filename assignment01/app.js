const express = require('express');

const bodyparser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({ extended: true }));

app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.render('index');
})

app.post('/getAge', (req, res) => {

  const birthDate = req.body.date;
  const birthMonth = req.body.month;
  const birthYear = req.body.year;

  const today = new Date();
  let currDate = today.getDate();
  let currMonth = 1 + today.getMonth();
  let currYear = today.getFullYear();

  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (birthDate > currDate) {
    currDate = currDate + month[currMonth - 1];
    currMonth = currMonth - 1;
  }

  if (birthMonth > currMonth) {
    currMonth = currMonth + 12;
    currYear = currYear - 1;
  }

  const ageDate = currDate - birthDate;
  const ageMonth = currMonth - birthMonth;
  const ageYear = currYear - birthYear;

  let ageString;
  switch (true) {
    case ageMonth === 0 && ageDate === 0:
      ageString = `You are ${ageYear} years old.`;
      break;
    case ageDate === 0 :
      ageString = `You are ${ageYear} years and ${ageMonth} months old.`;
      break;
    case ageMonth === 0:
      ageString = `You are ${ageYear} years and ${ageDate} days old.`;
      break;
    case ageYear === 0 && ageDate === 0:
        ageString = `You are ${ageMonth} months old.`;
        break;
    case ageYear === 0:
      ageString = `You are ${ageMonth} months and ${ageDate} days old.`;
      break;
      case ageYear === 0 && ageMonth === 0:
        ageString = `You are ${ageDate} days old.`;
        break;
    default:
      ageString = `You are ${ageYear} years, ${ageMonth} months, and ${ageDate} days old.`;
      break;
  }

  const data = { ageString }

  res.render('index', {data: data});
})

app.listen(3001, () => {
  console.log("App is listening on port 3001.");
})

