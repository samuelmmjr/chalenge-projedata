const { Feedstock } = require('../models')

const {
    StatusCodes: { OK, INTERNAL_SERVER_ERROR },
} = require('http-status-codes');


const getAll = async (_req, res, next) => {
    try {
        const products = await Feedstock.findAll();
        res.status(OK).json(products);
    } catch (e) {
        next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Feedstock.findByPk(id);
        res.status(OK).json(product);
    } catch (e) {
        next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
    }
};

const create = async (req, res, next) => {
    try {
        const { name, price } = req.body;

        const product = await Feedstock.create({ name, price })
        res.status(OK).json({ id, name, price })
    } catch (e) {
        next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
    }
}

const update = async (req, res, next) => {
    try {
        const { name, price } = req.body;
        const { id } = req.params;

        const product = await Feedstock.update(
            { name, price },
            { where: { id } },
        );
        res.status(OK).json(product)
    } catch (e) {
        next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
    }
}

const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Feedstock.destroy(
            { where: { id } },
        );
        res.status(OK).json(product)
    } catch (e) {
        next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
    }
}


module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};