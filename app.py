# -*- coding: utf-8 -*-
import json
from module import *
from flask import Flask, request, render_template, jsonify

app = Flask(__name__)

@app.route("/")
def main():
    return render_template("main.html")

@app.route("/main", methods=['GET', 'POST'])
def main_get(name=None):
    if request.method == "POST":
        name = request.form["name"]
        return show_result(name)
    else:
        return render_template("main.html")

@app.route("/show_result", methods=['POST'])
def show_result(name):
    result_dict = food_recommendation(name)
    if request.method == "POST":
        return render_template('main.html', json.dumps(result_dict))
    # 테스트
    #if request.method == "POST":
    #    return render_template('result.html', name)

@app.route('/show_result')
def about():
    return render_template('result.html')

if __name__ == "__main__":
    app.run(debug=True)