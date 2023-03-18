from  app import app

@app.route("/")
def index():
    return "Hello World!"

@app.route("/greet/<name>")
def greet(name):
    return f"Hello, {name}"

@app.route("/news")
def news():
    return "This is the news page"

# @app.route("books")
# def books():
#     books = database.get_books()
#     view.display_books(books)