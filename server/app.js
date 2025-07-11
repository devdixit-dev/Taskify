import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res) => {
  res.end('Home or / page');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});