const app = require('./app');

app.listen(process.env.EXPRESS_PORT, () => {
  if (process.env.DEPLOYMENT === 'development') {
    console.log(`Server is now listening @ http://localhost:${process.env.EXPRESS_PORT}`);
  }
});
