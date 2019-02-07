import { Router } from 'express';
import artistModel from './artistModel';


const artistRouter = Router();
// /api/artists
artistRouter.get('/', async (req, res) => {
    const artists = await artistModel.find({}).lean().exec();
    res.send(artists);
});

// /api/artists/:id
artistRouter.get('/:id', async (req, res) => {
    const artist = await artistModel.findById(req.params.id).lean().exec();
    res.send(artist);
});

export default artistRouter;