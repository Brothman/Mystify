//This is a generic controller creator for basic CRUD actions
//.lean() returns a plain Javascript Object instead of a Mongoose Document
//.exec() returns a regular Promise object

export const getOne = (model) => async (req, res) => {
    try {
        const doc = await model.find({ createdBy: req.user._id, _id: req.params.id })
                               .lean()
                               .exec()

        if (!doc) {
            //we did not find anything
            return res.status(400).end();
        }

        res.send({ data: doc });
    }
    catch (e) {
        console.error(e);
        res.status(400).end();
    }
}

export const getMany = (model) => async (req, res) => {
    try {
        const docs = await model.find({ createdBy: req.user._id })
                                .lean()
                                .exec();

        res.send({ data: docs });
    }
    catch (e) {
        console.error(e);
        res.status(400).end();
    }
}

export const createOne = (model) => async (req, res) => {
    const createdBy = req.user._id;
    try {
        //shallow merge of the req.body object, add on the createdBy key/value pair
        const doc = await model.create({ ...req.body, createdBy });
        res.status(201).json({ data: doc });
    }
    catch (e) {
        console.error(e);
        res.status(400).end();
    }
}

export const updateOne = (model) => async (req, res) => {
    //first argument locates the object
    //second argument is the new values to update
    //third argument tells mongoose to return the newly updated object
    try {
        const updatedDoc = await model.findOneAndUpdate(
            {
              createdBy: req.user._id,
              _id: req.params.id
            },
            req.body,
            { new: true }
            )
            .lean()
            .exec();

        if (!updatedDoc) {
            return res.status(400).end();
        }

        res.send({ data: updatedDoc });
    }
    catch (e) {
        console.error(e);
        res.status(400).end();
    }
}

export const removeOne = model => async (req, res) => {
    try {
        const removed = await model.findOneAndRemove({
            createdBy: req.user_id,
            _id: req.params.id
        });

        if (!removed) {
            return res.status(400).end();
        }

        return res.send({ data: removed });
    }
    catch(e) {
        console.error(e);
        res.status(400).end();
    }
}

//This method is a BEAST
//Magic factory method to create CRUD controllers for any model
export const crudControllers = (model) => ({
    removeOne: removeOne(model),
    updateOne: updateOne(model),
    getMany: getMany(model),
    getOne: getOne(model),
    createOne: createOne(model)
});