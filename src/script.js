const express = require("express");
const app = express();
const port = 4000;

app.set("view engine", "hbs")

app.get("/", (req, res) => {
    res.render("home")
});
app.get("/contact", (req, res) => {
    res.render("contact")
});
app.get("/success", (req, res) => {
    res.render("success")
});
app.post("/contact",(req,res)=>{
    res.redirect("/success")
});
app.get("/prod1",(req,res)=>{
    res.render("/prod1detail")
})
app.get("/prod2",(req,res)=>{
    res.render("/prod2detail")
})

app.get('*', (req, res) => {
    res.render("404")
});


app.listen(port, () => {
    console.log(`Server is Woring on port: ${port}`);
});