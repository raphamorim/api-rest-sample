const express = require('express')

const app = express();
const port = process.env['API_PORT'] || 3000;

app.post('/book', (req, res) => {
   
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));