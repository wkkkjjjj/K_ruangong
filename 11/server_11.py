import flask
import json

app=flask.Flask(__name__)
@app.route("/")
def index():
    return flask.render_template("phone.html")

@app.route("/phones")
def getPhones():
    mark=flask.request.values.get("mark")
    #返回的是{'phones':[{'modle':'' ,'mark':'' ,'price':''},{},...]}
    phones=[]
    if mark=="华为":
        phones.append({"model":"P9","mark":"华为","price":3800})
        phones.append({"model": "P10", "mark": "华为", "price": 4000})
    elif mark=="苹果":
        phones.append({"model":"iPhone5","mark":"苹果","price":5800})
        phones.append({"model":"iPhone6","mark":"苹果","price":6800})
    elif mark=="三星":
        phones.append({"model":"Galaxy A9","price":2800})
    s=json.dumps({"phones":phones}) #将python的数据类型转化成str格式
    return s

app.run()
