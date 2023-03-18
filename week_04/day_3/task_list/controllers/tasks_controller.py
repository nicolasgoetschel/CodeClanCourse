# controllers/tasks_controller.py

# Import Flask and render_template
from flask import Flask, render_template
from repositories import task_repository
# Import Blueprint class from flask
from flask import Blueprint

# Create a new instance of Blueprint called "tasks"
tasks_blueprint = Blueprint("tasks", __name__)

# Declare a route for the list of tasks
@tasks_blueprint.route("/tasks")
def tasks():
    tasks = task_repository.select_all()
    return render_template("tasks/index.html", all_tasks = tasks)