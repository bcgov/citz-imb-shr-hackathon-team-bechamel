import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import config from './config';
import errorHandler from './middleware/errorHandler';
import fourOhFour from './middleware/fourOhFour';
import root from './routes/root';
import controller from './controllers/controller';

const app = express()

// Apply most middleware first
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: config.clientOrigins[config.nodeEnv]
}))
// app.use(helmet())
app.use(morgan('tiny'))

// Apply routes before error handling
app.use('/', root)

//Routes
app.get('/api/data', controller.getData)
app.post('/api/data', controller.postData)
app.get('/api/data/filter', controller.getFilteredData)
app.get('/api/data/filter/:positionTitle/:bandNumber', controller.getFilteredData)
app.get('/api/data/:searchCategory/:searchFilter', controller.filterDataByParam)

// Apply error handling last
app.use(fourOhFour)
app.use(errorHandler)

export default app