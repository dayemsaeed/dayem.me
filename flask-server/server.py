from flask import Flask

app = Flask(__name__)

@app.route("/experience")
def experience():
    return {"experience": ["Amazon", "Washington State University", "Freelance"]}

if __name__ == "__main__":
    app.run(debug = True)