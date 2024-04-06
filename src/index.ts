import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola Mundo con Express y TypeScript!!');
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
