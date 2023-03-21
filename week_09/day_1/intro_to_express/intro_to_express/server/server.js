const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.get('/', function(req, res) {
    res.json({ text: 'Good Morning!' });
});

app.listen(8081, function () {
    console.log('Express Server running on port 8081...');
});
