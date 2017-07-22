const express = require("express");
const path = require("path");


const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/test", function(req, res) {
	res.send("test.html");
});

app.listen(3000, function() {
	console.log("App listening on PORT 3000");
});