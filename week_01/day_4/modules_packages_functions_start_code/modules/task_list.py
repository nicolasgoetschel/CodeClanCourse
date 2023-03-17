# Functions to complete:

## Get a list of uncompleted tasks
def get_uncompleted_tasks(list):
    status = False
    return get_tasks_by_status(list, status)


## Get a list of completed tasks
def get_completed_tasks(list):
    status = True
    return get_tasks_by_status(list, status)


## Get tasks where time_taken is at least a given time
def get_tasks_taking_at_least(list, time):
    long_tasks = []
    for task in list:
        if task["time_taken"] >= time:
            long_tasks.append(task)
    return long_tasks


## Find a task with a given description
def get_task_with_description(list, description):
    des_tasks = []
    for task in list:
        if task["description"] == description:
            des_tasks.append(task)
    return des_tasks


# Extention (Function):

## Get a list of tasks by status
def get_tasks_by_status(list, status):
    filtered_tasks = []
    for task in list:
        if task["completed"] == status:
            filtered_tasks.append(task)
    return filtered_tasks


def mark_task_complete(task):
    task["completed"] = True


def create_task(description, time_taken):
    task = {}
    task["description"] = description
    task["completed"] = False
    task["time_taken"] = time_taken

    return task


def add_to_list(list, task):
    list.append(task)
