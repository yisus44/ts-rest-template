import { app } from './app';

const PORT: number = Number(process.env.PORT) || 3000;

app.listen(3000, function () {
  console.log('Server up and running on port', PORT);
});
