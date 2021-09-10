const _ = require('lodash');

const validateBody = function (req, res, next) {

    if (_.isNil(req.body.task_description) || _.isNil(req.body.project_id)) {
        return res.sendStatus(400);
    }

    next()
}

module.exports.validateBody = validateBody;
