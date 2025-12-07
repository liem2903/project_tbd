import express from 'express';
import auth from './routes/auth.js';

const app = express();
app.use(express.json());
app.use('/api/auth', auth);

app.listen(4000, () => console.log("Server started on port 4000"))
export default app;
