import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import authRouter from './routers/authRouter';
import categoryRouter from './routers/categoryRouter';
import coursersRouter from './routers/courserRouter';
import "../src/types/requestType"
import moduleRouter from './routers/moduleRouter';
import videoRouter from './routers/videoRouter';
import userRouter from './routers/usersRouter';
import enrollmentRouter from './routers/enrollmentRouter';
import webHookRouter from './routers/webHookRouter';
import ratingRouter from './routers/ratingRouter';


const server = express();

server.use('/webhook', webHookRouter)
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(helmet());
server.use(express.static('public'));

const port = process.env.PORT || 4000

server.use('/auth', authRouter)
server.use('/categories', categoryRouter)
server.use('/courses', coursersRouter)
server.use('/modules', moduleRouter)
server.use('/videos', videoRouter)
server.use('/users', userRouter)
server.use('/enrollments', enrollmentRouter)
server.use('/ratings', ratingRouter)

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})