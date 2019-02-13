import { Router } from 'express';
import trackModel from './trackModel';
import track from './trackModel';

const trackRouter = Router();

trackRouter.get('/', async (req, res) => {
    const tracks = await track.find( {} ).populate('album').lean().exec();
    res.send(tracks);
});

trackRouter.get('/album/:id', async (req, res) => {
    const tracks = await track.find({ album: req.params.id}).populate('album').lean().exec();
    res.send(tracks);
});

trackRouter.get('/artist/:artistID', async (req, res) => {
    const tracks = await trackModel.find({ artist: req.params.artistID }).populate('album').lean().exec();
    res.send(tracks);
});

export default trackRouter;