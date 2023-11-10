// alert("卧室睡");
// var str=`<p>测试</p>`
// document.write(str)

var dog=(function(name,age){
    this.name=name;
    this.age=age;
    this.sayname=function (){
        console.log('我的名字是'+this.name+",类型是"+typeof this);
        // console.log("dog的类型是"+typeof dog);
        // 所有dog实例有一个相同__proto__属性，与constructor的prototype为同一地址（对象）
        // console.log(this.__proto__==dog.prototype);
        // console.log(typeof this.__proto__);
      
        
        // current为一个对象
        var current=this,cnt=0;
        // console.log("this为"+this.name+this.toString());
        // dog实例---->dog的prototype(dog类)----->object(object类)---->null
        // 实例原型相当于类，实例原型的原型相当于父类
        while(current!=null){
            // console.log("对象为"+current.toString()+",类型为"+typeof current);
            cnt++;
            if(current.__proto__==null){
                current.toString=function(){
                 if(this.name!=undefined&&this.age!=undefined){
                    
                        return `调用了toString,${this.name},${this.age}\n`;
                    
                 }
                 return "没有名字";
                }
            }
            current=current.__proto__;
        }
        console.log(this.toString());
        console.log(this.__proto__.toString());
        console.log(this.__proto__.__proto__.toString());
        // console.log(cnt);
    }
});

var dogname='小李'


//new dog()得到的是object对象
// dog是一个函数
var dog1=new dog(`${dogname}`,0.1)
console.log(dog1)

// 调用sayname输出protype
dog1.sayname()

// console.log(typeof dog);
// console.log(dog1)
// console.log(typeof dog1)

// var dog1;