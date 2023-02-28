const express = require('express');
const app = express();
const PORT = process.env.PORT || 3050;

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});