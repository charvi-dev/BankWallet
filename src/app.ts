import express from 'express';
import connect from './db/Connection';
import {router as userRouter} from './route/user.route';

const app = express();

connect(); 

app.use(express.json());
app.use('/api/v1/users',userRouter)
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

