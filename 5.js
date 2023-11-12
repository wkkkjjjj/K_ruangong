// 进阶题目: 自动滑屏, 点赞, 收藏
//基于未打开抖音
auto.waitFor();

home();

app.launchApp("抖音");

sleep(2000);

var screenHeight = device.height;
var screenWidth = device.width;

function like() {
  click(screenWidth / 2, screenHeight / 2);
  sleep(100);
  click(screenWidth / 2, screenHeight / 2);
}

function collection() {
  click(991, 1536);
}

function nextVideo() {
  swipe(
    screenWidth / 2,
    0.9 * screenHeight,
    screenWidth / 2,
    0.1 * screenHeight,
    200
  );
}


while (1) {
  like();
  sleep(500);
  collection();
  sleep(500);
  nextVideo();
  sleep(2000);
}