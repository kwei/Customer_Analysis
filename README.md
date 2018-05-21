# NodeServer

## 簡介

### 這是demo版本，並不會有任何資料交換於伺服器，單純是方便檢測UI介面。所使用的是gh-pages套件將react js的app也能透過github page發佈到網路上。而程式碼也是提供參考並不是所有檔案都有包含。

```
安裝gh-pages套件至dev
$ npm install gh-pages --save-dev
```

```
在package.json檔加入以下代碼
"homepage": "http://yourgitname.github.io/yourgitproject"
```

```
並在script中加入以下代碼
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```
這是我的 package.json
![image](https://github.com/kwei/NodeServer/blob/master/package_json%E6%88%AA%E5%9C%96.PNG)

```
然後新增git repository
$ git init

加入你的git
$ $ git remote add origin <你的git網址.git>

執行
$ npm run deploy
```
#### 若需要更加詳細的教學，以下連結是我的參考資料還請安心服用。
 https://github.com/gitname/react-gh-pages


## 近期目標

### 優化

## 版本

### 這是demo第二版，日後也將會進行優化並推出新版本。
