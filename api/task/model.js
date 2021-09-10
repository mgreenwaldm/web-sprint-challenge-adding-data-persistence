// DO NOT MAKE CHANGES TO THIS FILE
const db = require("../../data/dbConfig.js");
const _ = require('lodash');

module.exports = {
    get,
    insert
};

async function get(id) {
    let query = db("tasks as t").join('projects', 'projects.project_id', '=', 't.project_id')
        .select("t.*",  "projects.project_description", "projects.project_name");

    if (id) {
        const tasks = await query.where("t.task_id", id).first();
        return {
            ...tasks,
            task_completed: tasks.task_completed === 1
        }

    } else {
        const tasks = await query;
        return tasks.map(task => {
            return {
                ...task,
                task_completed: task.task_completed === 1
            }
        });
    }
}

async function insert(resource) {
    const result = await db("tasks").insert(resource).returning("task_id");
    return !_.isEmpty(result) ? get(result[0]) : null;
}

