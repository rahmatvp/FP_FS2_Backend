const express = require("express")
const app = express();
const port = 4000;

app.get("/", (req, res) =>{
    res.send("hello World, BackEnd Tugas Akhir")
})

app.listen(port, () => {
    console.log(`port yg berjalan ${port}`);
})