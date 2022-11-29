from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from flask_pymongo import PyMongo
from bson import ObjectId



app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/intern"
mongo = PyMongo(app)

CORS(app)

db = mongo.db.intern

@app.route("/", methods = ["GET", "POST"])
def getPost():
    if request.method == "GET":
        interns = []
        for i in db.find():
            interns.append({"_ID": str((i["_id"])), "name":i["name"],"surname":i["surname"],"age":i["age"]})
        return jsonify(interns)
    elif request.method == "POST":
        id = db.insert_one({"name": request.json["name"],"surname": request.json["surname"],"age": request.json["age"]})
        return jsonify(str(id))

@app.route("/<id>", methods = ["DELETE", "PUT"])
def deletePut(id):
    if request.method == "DELETE":
        db.delete_one({"_id":ObjectId(id)})
        return jsonify({"message": "Deleted!"})
    elif request.method == "PUT":
        db.update_one({"_id":ObjectId(id)},{"$set":{
            "name": request.json["name"],
            "surname": request.json["surname"],
            "age": request.json["age"]
        }})
        return jsonify({"message": "Updated!"})


@app.route("/getOne/<id>", methods=["GET"])
def getOne(id):
    res = db.find_one({"_id":ObjectId(id)})
    return {"_ID":str(ObjectId(res["_id"])), "name":res["name"], "surname":res["surname"],"age":res["age"]}


if __name__ == "__main__":
    app.run(debug=True)