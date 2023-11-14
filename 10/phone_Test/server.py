import flask
app=flask.Flask(__name__)

"""
自定义文件夹放html
app.template_folder='template'
"""


#跳转登陆界面
@app.route("/",methods=["GET","POST"])
def login():
    user=flask.request.values.get("user") if "user" in flask.request.values else ""
    pwd=flask.request.values.get("pwd") if "pwd" in flask.request.values else ""
    if user=="xxx" and pwd=="123":
        return flask.redirect("/show")
    else:
        #注意html放在templates文件夹下
        return flask.render_template("login.html")

#返回手机信息
@app.route("/show",methods=["GET","POST"])
def show():
    s="<table border='1'>"
    s=s+"<tr><td>品牌</td><td>型号</td><td>价格</td></tr>"
    s=s+"<tr><td>华为</td><td>P9</td><td>3800</td></tr>"
    s=s+"<tr><td>华为</td><td>P10</td><td>4200</td></tr>"
    s=s+"<tr><td>苹果</td><td>iPhone6</td><td>5800</td></tr>"
    s=s+"</table><p>"
    return s

app.run()
