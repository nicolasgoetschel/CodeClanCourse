from flask import render_template
from app import app
from models.todo_list import tasks

@app.route('/')
def index():
    return "Hello World!"
    
@app.route("/tasks")
def tasks_index():
    return render_template("index.html", title="Home",
    tasks=tasks)