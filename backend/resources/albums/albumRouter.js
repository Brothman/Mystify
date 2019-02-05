import { Router } from 'express';
import albumModel from './albumModel';

const albumRouter = Router();

// /api/albums/:id
albumRouter.get('/:id', async (req, res) => {
    const album = await albumModel.findById(req.params.id).populate('artist').lean().exec();
    res.send(album);
});

export default albumRouter;