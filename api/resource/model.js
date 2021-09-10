// DO NOT MAKE CHANGES TO THIS FILE
const db = require("../../data/dbConfig.js");
const _ = require('lodash');

module.exports = {
    get,
    insert
};

async function get(id) {
    let query = db("resources as r");

    if (id) {
        return await query.where("r.resource_id", id).first();
    } else {
        return await query;
    }
}

async function insert(resource) {
    const result = await db("resources").insert(resource).returning("resource_id");
    return !_.isEmpty(result) ? get(result[0]) : null;
}

