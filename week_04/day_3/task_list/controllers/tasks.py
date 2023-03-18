from flask import Flask, render_template
from repositories import task_repository # NEW

# AS BEFORE

@tasks_blueprint.route("/tasks")
def tasks():
    tasks = task_repository.select_all() # NEW
    return render_template("tasks/index.html", all_tasks = tasks) # NEW