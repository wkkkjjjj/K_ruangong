//基于打开直播后
auto.waitFor();
sleep(1000);
sleep(1000);

f=1;
var win = floaty.window(
    <frame h="auto" w="auto" gravity="center">
        <button bg="#98FB98" id="console1" text="静态评论" visibility="visible" />
        <button bg="#FFD700" id="console2" text="开始" visibility="gone" />
    </frame>
);
win.setPosition(500, 1000)   //设置位置（x，y）
win.setAdjustEnabled(true)   //显示三个按钮
win.exitOnClose()    //关闭悬浮窗时自动结束脚本运行

setTimeout (function start(){
    while(1)
    {autoComment();
        sleep(5000);}
    
},0);

win.console1.click(function () {
    toast("评论打开");
    ui.run(function () {
        //悬浮窗.console.setText("开始");
        win.console1.setVisibility(8) ;//0 可见    8 不可见
        win.console2.setVisibility(0);
        f=0;
})
});

win.console2.click(function () {
    toast("脚本已继续");
    ui.run(function () {
        // 悬浮窗.console.setText("暂停");
        win.console1.setVisibility(0);//设置 可见
        win.console2.setVisibility(8);//不可见
        f=1;
    });

});


function autoComment() {
    content = ["666","牛啊","你的乐观总是鼓舞别人","我被他种草了啊","棒棒棒","在你身上我看到了什么叫做坚强","喜欢你的直播方式","支持支持","牛逼","支持国货","喜欢喜欢"];
    n=random(0,7);
    console.log(n);
    sleep(1000);//阻塞下面的动作
    // b = id('pz').findOnce().bounds();//获取评论按钮的rect
    // click(b.centerX(), b.centerY());
    sleep(1000);
    click(217, 2208);
    sleep(1000);
    setText(content[n]);
    sleep(1000);
    let b = className("android.widget.TextView").text("发送").findOnce().bounds();
    click(b.centerX(), b.centerY());
}