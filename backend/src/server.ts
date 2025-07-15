import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import authRouter from './routers/authRouter';
import categoryRouter from './routers/categoryRouter';
import coursersRouter from './routers/courserRouter';
import "./types/requestType"
import moduleRouter from './routers/moduleRouter';
import videoRouter from './routers/videoRouter';
import userRouter from './routers/usersRouter';
import enrollmentRouter from './routers/enrollmentRouter';
import webHookRouter from './routers/webHookRouter';
import ratingRouter from './routers/ratingRouter';
import path from 'path';

const server = express();
const port = process.env.PORT || 4000;

// ✅ Habilita CORS para o Live Server (sem duplicar)
server.use(cors())

server.use('/webhook', webHookRouter)
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(helmet());

// ✅ Middleware para liberar CORS nas imagens
server.use('/uploads', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); // ou localhost
    res.header('Access-Control-Allow-Methods', 'GET');
    next();
});

// ✅ Serve imagens
server.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// Serve arquivos públicos se precisar
server.use(express.static('public'));

// Rotas
server.use('/auth', authRouter);
server.use('/categories', categoryRouter);
server.use('/courses', coursersRouter);
server.use('/modules', moduleRouter);
server.use('/videos', videoRouter);
server.use('/users', userRouter);
server.use('/enrollments', enrollmentRouter);
server.use('/ratings', ratingRouter);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});