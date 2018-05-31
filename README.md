# 專題-顧客分析系統之網站

[![NPM version][shield-npm]](#)
[![Node.js version support][shield-node]](#)
[![Build status][shield-build]](#)
[![Code coverage][shield-coverage]](#)
[![Dependencies][shield-dependencies]](#)
[![MIT licensed][shield-license]](#)



[shield-coverage]: https://img.shields.io/badge/coverage-100%25-brightgreen.svg
[shield-dependencies]: https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg
[shield-license]: https://img.shields.io/badge/license-MIT-blue.svg
[shield-node]: https://img.shields.io/badge/node.js%20support-0.10–5-brightgreen.svg
[shield-npm]: https://img.shields.io/badge/npm-v3.2.0-blue.svg
[shield-build]: https://img.shields.io/badge/build-passing-brightgreen.svg

## 簡介
```
這是 demo 版本，並不會有任何資料交換於伺服器，單純是方便檢測 UI 介面。所使用的是 gh-pages 套件將 react js 的 app 也能透過 github page 發佈到網路上。而程式碼也是提供參考並不是所有檔案都有包含。 :smile:
[demo 網址] (https://kwei.github.io/NodeServer/)
```

## 如何使用 gh-pages deploy web to github
```Bash
安裝gh-pages套件至dev
$ npm install gh-pages --save-dev
```

```JSON
在package.json檔加入以下代碼
"homepage": "http://yourgitname.github.io/yourgitproject"
```

```JSON
並在script中加入以下代碼
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```
這是我的 package.json :flushed:
```JSON
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@material-ui/core": "^1.0.0",
    "material-ui": "^0.20.0",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-scripts": "1.1.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "proxy": "http://localhost:3001",
  "devDependencies": {
    "gh-pages": "^1.1.0"
  },
  "homepage": "http://kwei.github.io/NodeServer"
}
```

```Bash
然後新增git repository
$ git init

加入你的git
$ $ git remote add origin <你的git網址.git>

執行
$ npm run deploy
```
===

#### 若需要更加詳細的[教學](https://github.com/gitname/react-gh-pages)，以下連結是我的參考資料還請安心服用。


## 近期目標
  * 封裝專案
  * 精簡不必要的邏輯
  * 清理多餘的套件
  * 整理出開發工具套件

## 版本 :clock9:

### version 2.0 

|version|infomation|
| :---: |  :----:  |
|      1.0      | 基本 UI 介面的配置與功能設定，尚未有實際功能。|
|      2.0      | 重新配置 UI (Metrial Design) 並加入 Firebase ，登入帳號 by google 、推播和資料庫。|

## 實際操作影片 :eyes:
 [![連結](https://github.com/kwei/NodeServer/blob/master/DEMO%E6%88%AA%E5%9C%96.PNG)](https://drive.google.com/drive/folders/1kSFhl8Pp8g9oYFsHXrEk4QhbkXAbUxKY)

#### [Emoji](https://www.webpagefx.com/tools/emoji-cheat-sheet/)

[回到顶部](#top)

License
-------

Paddington is licensed under the [MIT](#) license.  
Copyright &copy; 2018, KW
