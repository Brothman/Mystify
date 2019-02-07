import { Router } from 'express';
import trackModel from './trackModel';
import track from './trackModel';

const trackRouter = Router();

trackRouter.get('/album/:id', async (req, res) => {
    const tracks = await track.find({ album: req.params.id}).lean().exec();
    res.send(tracks);
});

trackRouter.get('/artist/:artistID', async (req, res) => {
    const tracks = await trackModel.find({ artist: req.params.artistID }).lean().exec();
    res.send(tracks);
});

export default trackRouter;