import { Router } from 'express';
import artistModel from './artistModel';


const artistRouter = Router();
// /api/artists
artistRouter.get('/', async (req, res) => {
    const artists = await artistModel.find({}).lean().exec();
    res.send(artists);
});

export default artistRouter;