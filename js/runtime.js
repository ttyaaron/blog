// 网站运行时长统计
(function() {
  function siteRuntime() {
    var countElement = document.getElementById('webinfo-runtime-count');
    if (!countElement) return;
    
    // 从配置中获取建站日期，如果没有则使用默认值
    var startDate = new Date('2024/12/31');  // 这里需要和 _config.volantis.yml 中的日期一致
    
    function updateRuntime() {
      var now = new Date();
      var diff = now.getTime() - startDate.getTime();
      
      var days = Math.floor(diff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      countElement.innerHTML = days + ' 天 ' + hours + ' 小时 ' + minutes + ' 分钟 ' + seconds + ' 秒';
    }
    
    // 立即执行一次
    updateRuntime();
    // 每秒更新一次
    setInterval(updateRuntime, 1000);
  }
  
  // 页面加载完成后执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', siteRuntime);
  } else {
    siteRuntime();
  }
})();
