# -*- coding: utf-8 -*-
import json
from module import *
from flask import Flask, request, render_template, jsonify

app = Flask(__name__)


@app.route("/")
def main():
    return render_template("main.html", result_dict=json.dumps(""), ishidden='hidden')


@app.route("/main", methods=['POST'])
def main_get(name=None):
    print("check1")
    if request.method == "POST":
        name = request.form["name"]
        return show_result(name)
    else:
        return '안됨'
        # return render_template("main.html", ishidden='hidden')


@app.route("/show_result", methods=['GET', 'POST'])
def show_result(name=None):
    result_dict = food_recommendation(name)
    print(result_dict)
    if request.method == "POST":
        return render_template('main.html', result_dict=json.dumps(result_dict, ensure_ascii=False), ishidden='hidden')
        # wine_pkl에서 어떤 타입이 JSON으로 변환되지 않는 지 확인 필요
    # 테스트
    # if request.method == "POST":
    #    return render_template('result.html', name)


if __name__ == "__main__":
    app.run(debug=True)
