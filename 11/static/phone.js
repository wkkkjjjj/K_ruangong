//初始化下拉框
function init()
{
//数组
var marks=new Array("华为","苹果","三星");
var selm=document.getElementById("marks");
for(var i=0;i<marks.length;i++)
{
//select对象有option属性(对象)
selm.options.add(new Option(marks[i],marks[i]));
}
selm.selectedIndex=0;
display();
}

function display()
{
try
{
//按照selctIndex请求对于的数据
var http=new XMLHttpRequest();
var selm=document.getElementById("marks");
var m=selm.options[selm.selectedIndex].text;
http.open("get","/phones?mark="+m,false);
http.send(null);
//msg为json数据
msg=http.responseText;
obj=eval("("+msg+")");
// JS中将JSON的字符串解析成JSON数据格式

//将从服务器获取的数据填到html
s="<table width='200' border='1'><tr><td>型号</td><td>价格</td></tr>"
for(var i=0;i<obj.phones.length;i++)
{
s=s+"<tr><td>"+obj.phones[i].model+"</td><td>"+obj.phones[i].price+"</td></tr>";
}
s=s+"</table>";
document.getElementById("phones").innerHTML=s;
}
catch(e) { alert(e);}
}