import { Router } from 'express';
import albumModel from './albumModel';

const albumRouter = Router();

// /api/albums/:id
albumRouter.get('/:id', async (req, res) => {
    const album = await albumModel.findById(req.params.id).populate('artist').lean().exec();
    res.send(album);
});

// /api/albums/artist/:artistID
albumRouter.get('/artist/:artistID', async (req, res) => {
    const albums = await albumModel.find({ artist: req.params.artistID} ).lean().exec();
    res.send(albums);
});

export default albumRouter;