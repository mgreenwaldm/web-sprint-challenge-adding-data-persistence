const _ = require('lodash');

const validateBody = function (req, res, next) {

    if (_.isNil(req.body.resource_name)) {
        return res.sendStatus(400);
    }

    next()
}

module.exports.validateBody = validateBody;
