from flask import Flask, request, jsonify
from flask import send_from_directory

app = Flask(__name__)

@app.route("/selected-text", methods=["POST"])
def receive_selected_text():
    selected_text = request.json.get("text")
    print("Selected text received:", selected_text)
    return jsonify({"status": "success"}), 200

@app.route("/")
def index():
    return send_from_directory(".", "index.html")

@app.route("/<path:path>")
def static_files(path):
    return send_from_directory(".", path)

if __name__ == "__main__":
    app.run(debug=True)
