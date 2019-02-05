import { Router } from 'express';
import albumModel from './albumModel';

const albumRouter = Router();

// /api/albums/:id
albumRouter.get('/:id', async (req, res) => {
    const album = albumModel.findById(req.params.id).lean().exec();
    res.send({hi: "hellllllo"});
});

export default albumRouter;