const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const apiRoutes = require("./routes/api");
app.use(apiRoutes);
const htmlRoutes = require("./routes/html");
app.use(htmlRoutes);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));