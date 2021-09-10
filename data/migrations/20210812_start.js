exports.up = function(knex) {
     return knex.schema.createTable("projects", function(projects) {
        projects.increments("project_id");

        projects.string("project_name").notNullable();
        projects.text("project_description").nullable();
        projects.boolean("project_completed").defaultTo(false);

    }).createTable("resources", function(resources) {
        resources.increments("resource_id");

        resources.string("resource_name").notNullable().unique();
        resources.text("resource_description").nullable();
    }).createTable("tasks", function(tasks) {
        tasks.increments("task_id");

        tasks.text("task_description").notNullable();
        tasks.text("task_notes").nullable();
        tasks.boolean("task_completed").defaultTo(false);
        tasks.integer("project_id").references("projects.project_id");
    }).createTable("project_resources", function(tasks) {
        tasks.increments("project_resource_id");

        tasks.integer("project_id").references("projects.project_id");
        tasks.integer("resource_id").references("resources.resource_id");
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("project_resources")
        .dropTableIfExists("tasks")
        .dropTableIfExists("resources")
        .dropTableIfExists("projects");
};
