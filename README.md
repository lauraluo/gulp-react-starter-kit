# 前端開發環境說明

## 目的

讓前端可以在開發期間獨立後端進行開發，及功能模組維護，使用react、scss、jade  

## 功能簡介



*   伺服器： node Express   

*   Javascript Lint： eslint  

*   Javascript Bundle：browserify、watchify、babelify  

*   單元測試工具： jest、enzyme、  

*   ES6兼容：babel (es2015、transform-class-properties)  

*   即改即看結果：live-reload  

*   組件展示：storybook  



## 環境準備

安裝node v7.7.3以上  

```
到官網([連結](https://nodejs.org/en/))下載安裝包，並安裝
```

使用npm全域安裝gulp  

```
sudo npm install -g gulp
```

使用npm全域安裝 storybook  

    sudo npm install -g getstorybook

安裝所有專案需要的nodel module包  

```
npm isntall
```

安裝chrome extenstion livereload外掛  

![](https://quip.com/blob/ORVAAAN6LpO/Vpbi6vt1sh40SelOXFrXJQ?a=VIBTnICsKW9ungi3TLvC3VmgkdGGrYGnyEKVQH6FfyQa)

```
到chrome extension中心[(連結](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=zh-TW))下載擴充
```

### 測試功能是否正常

請在終端機輸入以下命令  

```
gulp develop
```

正常的裝況下，應該不會有任何錯誤，並且可以在[http://localhost:3002](http://localhost:3002) 看到你的首頁  

![](https://quip.com/blob/ORVAAAN6LpO/TFyC5KgSfqtZueozWOwdRA?a=atvx1teeP8qBjTWzZhgZaLJa7aNhV27jsSnYKPJ8gv8a)

## 運行開發環境

### 使用vscode

打開偵錯頁籤 > 選擇`開發模式`  > 按下綠色箭頭運行  

![](https://quip.com/blob/ORVAAAN6LpO/u0UMNPEi4xyFYp1VUHDGUA?a=GafA5Nm7WFBclBxj4w7NsJB1RHoe70pMMSGyeSpsYhAa)

> 障礙排除：使用vscode時，有時無法正常停止運行，請參考[這篇作法](http://stackoverflow.com/questions/28564077/grunt-task-freeing-up-the-port)，移除被佔用的port

### 使用終端機指令

在vscode界面上按下快速鍵，`cmd+shift+M`，打開終端機輸入命令字元  

```
gulp develop
```

或者  

```
npm develop
```

```
ＮＰＭ
```

## 發佈程式碼

由於本環境僅用作前端人員獨立的開開發境，發佈模式的目的在於：將javascript進行壓縮，其它與開發模式並無異常。  

### 使用vscode產出發佈用的程式碼

打開偵錯頁籤 > 選擇`發佈模式`  > 按下綠色箭頭運行  

![](https://quip.com/blob/ORVAAAN6LpO/1fdcqZreNn_qfOHkW5y5jA?a=aa1fhIGZnMKIihwSnrDdNX7XB6Z5oWvdmBaZx2ia8Msa)

### 使用終端機機指令

在vscode界面上按下快速鍵 `cmd+shift+M`，打開終端機輸入命令字元  

```
gulp deploy
```

或者  

```
npm deploy
```

> 如何將程式同步到正式環境，請參考[這一篇文章(待補)](http://google.com.tw)

## 運行測試任務

在vscode界面上按下快速鍵 `cmd+shift+M`，打開終端機輸入命令字元  

### 批次測試

```
npm test
```

### 指定單一測試任務

```
//待補
```

> 關於測試的寫作技巧，請參考[這一篇文章(待補)](http://google.com.tw)

## 運行Storybook(模組展示)

```
npm run storybook
```

## 檔案結構

請參考專案底下的`fileStructure.txt`  

## 開發流程說明

### 如何新增一個網路路徑(path)，並設定對應的視圖

**Step1：**  

在`/src`目錄底新增一個 view( `*.jade` )，可以利用資料來群組你的頁面，以利管理  

```
//宣告layout  
extends ../_layout  
//在此設定必需要在，頁面載入前引用的javascript(不含共用)  
block headScripts  
    script(src="js/test.bundle.js")  

block styles  
    //在此設定必需要在此頁引用的樣式(不含共用)  
    link(rel="stylesheet", href="/css/test.css")  

block content  
    h1 example  
    div#index  

block scripts  
    //在此設定必需要在，頁面載入後引用的javascript(不含共用)  
    script(src="js/demo.bundle.js")
```



*   所以有要引入的資源路徑階相對於public目錄底下  

*   頁 面載入為打包過後的javascript，其原始檔案對應系如下  public/js/demo.bundle.js =>  src/demo.js   



**Step2：**  

在`server.js`底下新增一個 ctroller  

```
app.get('/demo', function(req, res) {  
    //指定回傳視圖的路徑(相對於專案根目錄)  
    res.render('demo/index.jade');  
});
```

目錄底下的index.jade可以省略如下  

```
app.get('/demo', function(req, res) {  
    res.render('demo');  
});
```

最後你能在 [http://localhost:3002/demo](http://localhost:3002/demo)  看見你的頁面  

待補  

## 其他

專案相關連結  



*   開發環境  [http://localhost:3002](http://localhost:3002/)  

*   storybook [http://localhost:6006](http://localhost:6006/)  



### 推荐VSCode擴充功能

待補