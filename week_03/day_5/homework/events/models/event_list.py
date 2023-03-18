from models.eventclass import *
import datetime

event_1 = Event(
    datetime.date(2023, 3, 11), "Superbowl", 40000, "Nashville", "NFL Final"
)
event_2 = Event(
    datetime.date(2023, 8, 1), "Wimbledon", 15000, "London", "Tennis Competition"
)
event_3 = Event(
    datetime.date(2023, 5, 27),
    "Champions League Final",
    72000,
    "Munich",
    "Football Final",
)
event_4 = Event(
    datetime.date(2023, 5, 16), "Love Island Final", 50, "Majorca", "Reality TV show"
)

events = [event_1, event_2, event_3, event_4]


def add_new_event(event):
    events.append(event)
