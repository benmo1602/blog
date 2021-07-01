// ajax shixian post请求

function ajax_post(url, data) {
  // 1.异步对象 ajax
  var ajax = new XMLHttpRequest();
  // url 方法
  ajax.open("post", url);
  // 设置 请求保文
  ajax.setRequestHeader("Content-type", "text/plain");
  // 发送
  if (data) {
    ajax.send(data);
  } else {
    ajax.send();
  }
  // 注册事件
  ajax.onreadystatechange = function(params) {
    if(ajax.readyState === 4 && ajax.status == 200) {
      console.log(ajax.responseText);
    }
  }
}
