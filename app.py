from math import degrees
from flask import Flask, render_template
from markupsafe import escape

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/music")
def music():
    return render_template('music.html')

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/contact")
def contact():
    return render_template('contact.html')

if __name__ == "__main__":
    app.run(debug=True)