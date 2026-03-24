from flask import Flask, jsonify
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient("mongodb://db:27017/")
db = client.mydb

@app.route("/")
def home():
    return "Backend is running 🚀"

@app.route("/data")
def get_data():
    return jsonify({"message": "Hello from MongoDB"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)