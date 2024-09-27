import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/", (req,res) => {
    res.render("index.ejs", {
        message: "Welcome to my node js app"
    });
});

app.post("/register", (req, res) => {
    res.sendStatus(201)
})



app.listen(port, () => {
    console.log("Serever running at port 3000");
})