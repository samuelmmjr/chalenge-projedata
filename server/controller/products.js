const { Product } = require('../models')

const {
    StatusCodes: { OK, INTERNAL_SERVER_ERROR },
} = require('http-status-codes');


const getAll = async (_req, res, next) => {
    try {
        const products = await Product.findAll();
        res.status(OK).json(products);
    } catch (e) {
        next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        res.status(OK).json(product);
    } catch (e) {
        next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
    }
};

const create = async (req, res, next) => {
    try {
        const { name, price } = req.body;

        const product = await Product.create({ name, price })
        res.status(OK).json({ id, name, price })
    } catch (e) {
        next({ statusCode: INTERNAL_SERVER_ERROR, message: e.message });
    }
}

const update = async (req, res, next) => {
    try {
        const { name, price } = req.body;
        const { id } = req.params;

        const product = await Product.update(
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
        const product = await Product.destroy(
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