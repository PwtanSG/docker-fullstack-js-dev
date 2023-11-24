const express = require('express');
const app = express()
const cors = require('cors');
const PORT = 3001;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/test', (req, res)=>{
    res.status(200).send("backend-api okay");
});

app.listen(PORT, ()=>{
    console.log(`Server started at @ Port ${PORT}`)
})