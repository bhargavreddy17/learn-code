const express = require('express');
const app = express();
const router = require("./routes/routes");
const port = 3000;


app.use(express.json());
app.use('/api',router);


app.listen(port, () => {console.log(`The app is listening on...${port}`)});