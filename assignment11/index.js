import express from 'express';
import fileUpload from 'express-fileupload'
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

app.use(fileUpload({
    limits : {fileSize : 1024 * 1024},
    abortOnLimit : true
}));

app.get('/',(req,res) => {
    res.render('index');
});

app.post('/upload',(req,res) => {
    if(!req.files){
       return res.status(400).send('No Files were Uploaded')
    }

    const file = req.files.myFile;
    const path = `images/${file.name}`;

    file.mv(path,(err) => {
        if(err){
           return res.status(500).send(err);
        }
        return res.send({status : 'success',path : path})
    })
})

app.listen(PORT,() => console.log(`Server is running on ${PORT}`));