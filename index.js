const express = require('express');
const path = require('path');
const app = express();
const getJSON = require('./routes/sheet.json');
const testAPIRouter = require("./routes/testAPI");

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use("/testAPI", testAPIRouter);

// Put all API endpoints under '/api'
app.get('/api', (req, res) => {
    res.send(getJSON);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
