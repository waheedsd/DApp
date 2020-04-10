const express = require('express');
const app = express();
const connectString = '560289';

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});