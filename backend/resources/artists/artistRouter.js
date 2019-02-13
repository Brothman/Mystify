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
    try {
        const artist = await artistModel.findById(req.params.id).lean().exec();
        res.send(artist);
    }
    catch(e) {
        console.log(e);
    }  
});

export default artistRouter;

