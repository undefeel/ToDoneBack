import express from 'express';
import mongoose  from 'mongoose';
import 'dotenv/config';


const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;

try {
  mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  app.listen(PORT, 'MainServer');
  console.log(`Server succes listen ${PORT} port`);
} catch (error) {
  console.log(error);
}




