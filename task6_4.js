const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Для отримання відповіді введіть Ваш логін у Moodle у запиті');
  });

app.get('/is-11fiot-31-131', (req, res) => {
  const response = { surname: "Шило", name: "Михайло", course: 2, group: "ІС-11" };
  res.json(response);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});