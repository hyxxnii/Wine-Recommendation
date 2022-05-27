# -*- coding: utf-8 -*-
import json
from module import *
from flask import Flask, request, render_template, jsonify

app = Flask(__name__)

@app.route("/")
def main():
    return render_template("main.html", ishidden='hidden')

@app.route("/main", methods=['POST'])
def main_get(name=None):
    if request.method == "POST":
        name = request.form["name"]
        return show_result(name)
    else:
        return '안됨'
        #return render_template("main.html", ishidden='hidden')

@app.route("/show_result", methods=['GET', 'POST'])
def show_result(name=None):
    result_dict = food_recommendation(name)
    if request.method == "POST":
        return render_template('main.html', result_dict=json.dumps(result_dict), default=json_default, ishidden='hidden')#data=json.dumps(result_dict), ishidden='hidden')
    # 테스트
    #if request.method == "POST":
    #    return render_template('result.html', name)

if __name__ == "__main__":
    app.run(debug=True)