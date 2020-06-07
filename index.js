const express = require('express');
const path = require('path');
const app = express();
const getJSON = require('./routes/sheet.json');
const testAPIRouter = require("./routes/testAPI");

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use("/testAPI", testAPIRouter);

app.get('/api', (req, res) => {
    res.send(getJSON);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
