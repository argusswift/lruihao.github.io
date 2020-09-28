---
title: 利用腾讯云为静态页面添加“动态”相册
date: 2019-11-24 10:52:34
tags:
- 腾讯云cos桶
- Frontend
categories:
- Frontend
- JavaScript
---

{% note info no-icon %}
cos桶相册，终于！！终于来了！！，思路参考自[给hexo静态博客添加动态相册功能](https://me.idealli.com/post/73ad4183.html)，
**<span style="color: #428bca;">功能虽好，但是还是先友情提示！</span>**
开放API是一个**很危险**的操作，意味着你的cos桶里面的所有资源包括目录结构都暴露的整个世界中，所以建议不要放一些比较私密的照片，保护自己的隐私，提防不良用心之人。下面就开始吧！
{% endnote %}

<!--more-->

# 创建腾讯云cos存储桶
就创建一个COS就好了！有几点注意事项：
1. 权限设置为共有读私有写
2. policy权限设置整个桶的读操作
3. 跨域访问CORS设置，自己随意

# 上传照片
首先我这个cos相册，相册分类就是文件夹分类，所以cos桶里面先新建不同的文件夹，**文件夹名称就是相册名称**，
每个相册里面需要放置一张名称为**“封面.jpg”**的图片作为该相册的封面。
## 上传工具
- **COSBrowser** GUI工具,桌面/移动版 【官方、推荐】
- **COSCMD** 命令行工具 【官方】
- **PicGo** 图床上传工具 【第三方、推荐】

# 食用方式
<a href="https://github.com/Lruihao/cos-album" target="_blank" class="LinkCard">下载地址，别忘点赞哈</a>
首先，下载源码，引入`cos-album.css`和`cos-album.js`
```js config
<link rel="stylesheet" type="text/css" href="cos-album.css">
<script type="text/javascript" src="cos-album.js"></script>
```
然后，在你的js中new一个Cosalbum对象(xmlLink后不需要添加`/`)，比如：
```js
<script type="text/javascript">
  new Cosalbum({
    'xmlLink': 'https://img-xxxxxxxx.cos.ap-chengdu.myqcloud.com',
    'prependTo': '',
    'viewNum': 8
  });
</script>
```

`viewport`视个人爱好添加。
hexo中使用时css和js都需要做适当调整，配合加密功能使用等等，这里不再展开。
***注：代码设定不加载根目录文件，所以可以利用静态服务把源码部署在根目录，配合PicGo、COSBrowser上传来搭建个人图床。***
```xml demo
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>cos-album</title>
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
    <link rel="stylesheet" type="text/css" href="cos-album.css">
    <script type="text/javascript" src="cos-album.js" defer></script>
  </head>
  <body>
    <script type="text/javascript">
      new Cosalbum({
        'xmlLink': 'https://img-1256932288.cos.ap-chengdu.myqcloud.com',
        'prependTo': '',
        'viewNum': 8
      });
    </script>
    <!-- 你的其他内容，如评论等 -->
  </body>
</html>
```
<a href="https://img.lruihao.cn" target="_blank" class="LinkCard">cos-album demo</a>
{% asset_img view.png 大屏显示 %}
{% asset_img mobile.png 手机显示 %}

# changelog

- 2019-11-24 10:52:34
修改整理了一下代码，分割功能为函数，并写了注释，更加方便[伸手党](https://github.com/Lruihao/cos-album)!
- 2020-9-28 22:46
  1. 升級：相冊封裝成類，可以更方便new出來
  2. 優化：相冊圖片樣式優化

# 未实现
- fancybox
- 加密功能
- 分页显示