import flask
app=flask.Flask(__name__)
doc='''
<span id="hMsg">html massage</span>
<span id="jMsg">javascript massage</span>
<span id="sMsg">server massage</span>
'''
@app.route("/")
def index():
    return doc.encode()

if __name__=="__main__":
    app.run()
