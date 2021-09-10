// DO NOT MAKE CHANGES TO THIS FILE
const db = require("../../data/dbConfig.js");
const _ = require('lodash');

module.exports = {
    get,
    insert
};

async function get(id) {
    let query = db("projects as p");

    if (id) {
        const project = await query.where("p.project_id", id).first();
        return {
            ...project,
            project_completed: project.project_completed === 1
        }
    } else {
        const projects = await query;
        return projects.map(project => {
            return {
                ...project,
                project_completed: project.project_completed === 1
            }
        });
    }
}

async function insert(project) {
    const result = await db("projects").insert(project).returning("project_id");
    return !_.isEmpty(result) ? get(result[0]) : null;
}

