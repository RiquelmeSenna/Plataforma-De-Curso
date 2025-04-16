import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { authRouter } from './routers/authRouter';
import { categoryRouter } from './routers/categoryRouter';

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(helmet());
server.use(express.static('public'));

const port = process.env.PORT || 4000

server.use('/auth', authRouter)
server.use('/categories', categoryRouter)

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})