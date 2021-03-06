# ZLBridge
## 说明
ZLBridge是为JS和原生WebView进行数据交互时提供更简单方便的小工具，目前支持平台有
<br/>[ZLBridge-iOS](https://github.com/FPJack/ZLBridge-iOS)
<br/>[ZLBridge-Android](https://github.com/FPJack/ZLBridge-Android)
<br/>[ZLBridge-JS](https://github.com/FPJack/ZLBridge-JS)
<br/>[ZLBridge-flutter](https://github.com/FPJack/ZLBridge-flutter)
<br/>[ZLBridge-RN](https://github.com/FPJack/ZLBridge-RN)

## 安装

```ruby
npm install zlbridge 
```
## 初始化
```JavaScript
//导入之后也可通过全局window.zlbridge拿zlbridge对象
import zlbridge from "zlbridge";
或者
var zlbridge = require('zlbridge')
```
## JS调用原生事件

### 无参数
```JavaScript
window.zlbridge.call('test',(arg) => {

});
```
### 有参数参数
```JavaScript
window.zlbridge.call('test',{key:"value"},(arg) => {

});
```

## JS注册原生事件
```JavaScript
//直接返回值到原生
window.zlbridge.register("jsMethod",(arg) => {
     return arg;
});
 ```
 或者
 ```JavaScript
 //callback函数返回值到原生
window.zlbridge.registerWithCallback("jsMethod",(arg,callback) => {
  //ture代表原生只能接受一次JS回调结果，false可以连续监听，默认不传为true
  callback(arg,true);
});
  ```

## 通过本地注入JS脚本的，H5可以监听zlbridge对象初始化完成
```JavaScript
document.addEventListener('ZLBridgeInitReady', function() {
    console.log('ZLBridge初始化完成');
},false);
  ```

## Author

范鹏, 2551412939@qq.com



## License

ZLBridge is available under the MIT license. See the LICENSE file for more info.
