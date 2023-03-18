from flask import render_template, request
from app import app
from models.event_list import events, add_new_event
from models.eventclass import *
from datetime import datetime


@app.route("/events")
def index():

    return render_template("index.html", title="Home", events=events)


@app.route("/events/new")
def new_event():

    return render_template("new.html", title="New Events")


@app.route("/events", methods=["POST"])
def add_event():
    event_date = request.form["date"]
    year, month, day = map(int, event_date.split("-"))
    formatted_date = datetime(year, month, day)
