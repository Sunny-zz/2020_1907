## AJAX
异步的 javascript 和 XML。在不重新加载页面的情况下更新部分网页的艺术。前端通过 js 向后发端送请求并获取数据的一个方式。

### 原生实现 ajax
- 创建一个 XMLHttpRequest 对象
  ```js
    const xhr = new XMLHttpRequest()
  ```
- 创建请求(设置请求类型和请求的地址)
  ```js
    xhr.open("GET", "http://localhost:8080/goods")
  ```
- 发送请求(可能需要传递数据)
  ```js
    xhr.send();
  ```
-  监听后台接收的响应变化，请求结束拿到后台响应结果
  ```js
    xhr.onreadystatechange = function () {
      // 监听两个内容(也可以只监听第一个) 1. readyState 代表的是响应的状态值    2.status 响应的状态码 
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(JSON.parse(xhr.responseText))
      }
    }
  ```