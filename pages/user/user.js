var WxParse = require('../wxParse/wxParse.js');
Page({

  change(){
   
  },
  /**
   * 页面的初始数据
   */
  data: {
    douPage:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var article = `
  <body>
    <div class="container bs-docs-container">  
  <div class="post-container">
    <div>
      <h1 id="title">打鸡血｜这么懂事的男票不多了 2015.09.05</h1>
    </div>
    <div class="meta">
      
    
      一刻编辑
      
    
      
        <b class="pipeline">&#124;</b>
        <span>打鸡血</span>
      
      
    </div>
    <div class="post-body">
      <div id="content"><p>假期余额=1天</p><div class="status-card"><div class="hd"><img class="avatar cache-avatar" width="32" height="32" src="https://img3.doubanio.com/icon/u31722935-152.jpg"><a href="https://www.douban.com/people/bloodykiss/">esnepedal</a>&nbsp;的广播</div><div class="bd"><p>今天教了学中文的德国小哥怎么用“惹”，刚去超市他对我说了一句“我太累惹”，我_(:з」∠)_</p></div><div class="ft"><p class="title">回应：</p><p><span class="comment-author">把嘴唇咬哭：</span>孺子可教</p></div></div><div class="status-card"><div class="hd"><img class="avatar cache-avatar" width="32" height="32" src="https://img1.doubanio.com/icon/u71017473-9.jpg"><a href="https://www.douban.com/people/71017473/">自闭切</a>&nbsp;的广播</div><div class="bd"><p>临睡前女朋友忽然身体平躺，望着天花板眼珠子乱转，跟她说话也不理我，我就知道她在思考今天要怎么作了。果不其然，她非常严厉地质问我“你是不是只贪图我的美貌？”我也非常冷静地回答“是的！”</p></div><div class="ft"><p class="title">回应：</p><p><span class="comment-author">❤潋♀：</span>这么懂事的男票不多了</p></div></div><div class="status-card"><div class="hd"><img class="avatar cache-avatar" width="32" height="32" src="https://img1.doubanio.com/icon/u3554459-38.jpg"><a href="https://www.douban.com/people/croath/">小鱼·高等游民</a>&nbsp;的广播</div><div class="bd"><p>司机给我打电话：「您好！我是滴滴专车！……不对……我好像是 Uber……」我：「嗯，您是 Uber。」</p></div><div class="ft"><p class="title">回应：</p><p><span class="comment-author">无名氏：</span>身兼数职</p></div></div><div class="status-card"><div class="hd"><img class="avatar cache-avatar" width="32" height="32" src="https://img3.doubanio.com/icon/u1858180-10.jpg"><a href="https://www.douban.com/people/RidForge/">史前物種做不到</a>&nbsp;的广播</div><div class="bd"><p>附属二院今天来了一个患者，无意间吃了一只蟑螂，因为怕蟑螂不会死，然后吃了一点蟑螂药，现在在急诊躺着呢… 这个缜密的逻辑，竟无言以对……</p></div><div class="ft"><p class="title">回应：</p><p><span class="comment-author">约瑟麻麻：</span>就怕会繁殖应该吃避孕药</p><p><span class="comment-author">Kealdon：</span>doctor house里的一集，有个小孩把小球塞进鼻孔了，接着塞了只玩具狗进去，久久不见狗把小球叼出来，就又塞了只救火车进去，让消防员进去救。</p></div></div><div class="status-card"><div class="hd"><img class="avatar cache-avatar" width="32" height="32" src="https://img3.doubanio.com/icon/u59041927-93.jpg"><a href="https://www.douban.com/people/dear-anonymous/">((((辐射))))</a>&nbsp;的广播</div><div class="bd"><p>也是头很文艺的鹿 : )</p><img class="st-photo cache-img" src="https://img1.doubanio.com/view/presto/large/public/227729.jpg"><img class="st-photo cache-img" src="https://img3.doubanio.com/view/presto/large/public/227730.jpg"></div><div class="ft"><p class="title">回应：</p><p><span class="comment-author">warmman：</span>来，给爷笑一个</p></div></div><div class="status-card"><div class="hd"><img class="avatar cache-avatar" width="32" height="32" src="https://img3.doubanio.com/icon/u46037668-31.jpg"><a href="https://www.douban.com/people/46037668/">寓目</a>&nbsp;的广播</div><div class="bd"><p>收银小哥是个有故事的人····</p><img class="st-photo cache-img" src="https://img3.doubanio.com/view/presto/raw/public/227731.jpg"></div></div></div>
      
        
      
    </div>
    <div class="post-ft">
      

    </div>


  </div>

      
    </div>

    <div class="footer container">

  <div id="comment">
      <h2>文章评论（108）</h2>
      
      <div class="comment-login">
          <a href="https://accounts.douban.com/login?redir=https%3A%2F%2Fmoment.douban.com%2Fpost%2F124041%2F%3Fdouban_rec%3D1">请<span>登录</span>后写下你的评论</a>
      </div>
      

      
      <ul class="comment-list">
          
<li data-url="/j/post/124041/comment/396379">
    <div class="user">
        
        <a href="https://www.douban.com/people/zxs19920902/" target="_blank">
            <img src="https://img3.doubanio.com/icon/u74685023-36.jpg" alt="周寄水" width="48" height="48" />
        </a>
        
    </div>
    <div class="content">
        <div class="meta">
            <span class="time" title="2015-09-09 21:49:55">2015-09-09</span>
            
            <a href="https://www.douban.com/people/zxs19920902/" target="_blank">周寄水</a>
            
        </div>
        最后的动图真解恨
        
    </div>
</li>

<li data-url="/j/post/124041/comment/393864">
    <div class="user">
        
        <a href="https://www.douban.com/people/103153329/" target="_blank">
            <img src="https://img3.doubanio.com/icon/u103153329-1.jpg" alt="睡不着先生" width="48" height="48" />
        </a>
        
    </div>
    <div class="content">
        <div class="meta">
            <span class="time" title="2015-09-06 15:37:45">2015-09-06</span>
            
            <a href="https://www.douban.com/people/103153329/" target="_blank">睡不着先生</a>
            
        </div>
        好人一生平安
        
    </div>
</li>

<li data-url="/j/post/124041/comment/393689">
    <div class="user">
        
        <a href="https://www.douban.com/people/iammandyxuan/" target="_blank">
            <img src="https://img3.doubanio.com/icon/u35962566-16.jpg" alt="iammandyxuan" width="48" height="48" />
        </a>
        
    </div>
    <div class="content">
        <div class="meta">
            <span class="time" title="2015-09-06 10:19:55">2015-09-06</span>
            
            <a href="https://www.douban.com/people/iammandyxuan/" target="_blank">iammandyxuan</a>
            
        </div>
        第二个果断看成了“前女朋友”
        
    </div>
</li>

<li data-url="/j/post/124041/comment/393465">
    <div class="user">
        
        <a href="https://www.douban.com/people/rissen/" target="_blank">
            <img src="https://img3.doubanio.com/icon/u26793397-14.jpg" alt="Jun" width="48" height="48" />
        </a>
        
    </div>
    <div class="content">
        <div class="meta">
            <span class="time" title="2015-09-05 23:44:08">2015-09-05</span>
            
            <a href="https://www.douban.com/people/rissen/" target="_blank">Jun</a>
            
        </div>
        为什么图不动？？？！！！
        
    </div>
</li>

<li data-url="/j/post/124041/comment/393443">
    <div class="user">
        
        <a href="https://www.douban.com/people/122119723/" target="_blank">
            <img src="https://img1.doubanio.com/icon/user_normal.jpg" alt="[已注销]" width="48" height="48" />
        </a>
        
    </div>
    <div class="content">
        <div class="meta">
            <span class="time" title="2015-09-05 22:58:53">2015-09-05</span>
            
            <a href="https://www.douban.com/people/122119723/" target="_blank">[已注销]</a>
            
        </div>
        那个，我当时也没多想，上去就是一狗 很好笑的
        
    </div>
</li>

<li data-url="/j/post/124041/comment/393432">
    <div class="user">
        
        <a href="https://www.douban.com/people/52949520/" target="_blank">
            <img src="https://img3.doubanio.com/icon/u52949520-4.jpg" alt="一樹 Kazuki" width="48" height="48" />
        </a>
        
    </div>
    <div class="content">
        <div class="meta">
            <span class="time" title="2015-09-05 22:32:49">2015-09-05</span>
            
            <a href="https://www.douban.com/people/52949520/" target="_blank">一樹 Kazuki</a>
            
        </div>
        哈哈哈哈  好开心
        
    </div>
</li>

<li data-url="/j/post/124041/comment/393422">
    <div class="user">
        
        <a href="https://www.douban.com/people/88198067/" target="_blank">
            <img src="https://img3.doubanio.com/icon/u88198067-5.jpg" alt="青空君" width="48" height="48" />
        </a>
        
    </div>
    <div class="content">
        <div class="meta">
            <span class="time" title="2015-09-05 22:26:42">2015-09-05</span>
            
            <a href="https://www.douban.com/people/88198067/" target="_blank">青空君</a>
            
        </div>
        Qwq
        
    </div>
</li>

<li data-url="/j/post/124041/comment/393353">
    <div class="user">
        
        <a href="https://www.douban.com/people/88265106/" target="_blank">
            <img src="https://img1.doubanio.com/icon/u88265106-8.jpg" alt="别当壁花和壁树" width="48" height="48" />
        </a>
        
    </div>
    <div class="content">
        <div class="meta">
            <span class="time" title="2015-09-05 20:26:22">2015-09-05</span>
            
            <a href="https://www.douban.com/people/88265106/" target="_blank">别当壁花和壁树</a>
            
        </div>
        我尼玛是被拉黑了吗。怎么评论不了。。。打好长的一段话
        
    </div>
</li>

<li data-url="/j/post/124041/comment/393332">
    <div class="user">
        
        <a href="https://www.douban.com/people/80960857/" target="_blank">
            <img src="https://img1.doubanio.com/icon/user_normal.jpg" alt="郑聪聪君" width="48" height="48" />
        </a>
        
    </div>
    <div class="content">
        <div class="meta">
            <span class="time" title="2015-09-05 19:44:17">2015-09-05</span>
            
            <a href="https://www.douban.com/people/80960857/" target="_blank">郑聪聪君</a>
            
        </div>
        可以准备去夜跑了。。。。
        
    </div>
</li>

<li data-url="/j/post/124041/comment/393331">
    <div class="user">
        
        <a href="https://www.douban.com/people/80960857/" target="_blank">
            <img src="https://img1.doubanio.com/icon/user_normal.jpg" alt="郑聪聪君" width="48" height="48" />
        </a>
        
    </div>
    <div class="content">
        <div class="meta">
            <span class="time" title="2015-09-05 19:43:52">2015-09-05</span>
            
            <a href="https://www.douban.com/people/80960857/" target="_blank">郑聪聪君</a>
            
        </div>
        晚自习快结束了。。。
        
    </div>
</li>

<li data-url="/j/post/124041/comment/393330">
    <div class="user">
        
        <a href="https://www.douban.com/people/80960857/" target="_blank">
            <img src="https://img1.doubanio.com/icon/user_normal.jpg" alt="郑聪聪君" width="48" height="48" />
        </a>
        
    </div>
    <div class="content">
        <div class="meta">
            <span class="time" title="2015-09-05 19:43:19">2015-09-05</span>
            
            <a href="https://www.douban.com/people/80960857/" target="_blank">郑聪聪君</a>
            
        </div>
        早上并没有睡死过去。。。我来完成99+
        
    </div>
</li>

<li data-url="/j/post/124041/comment/393322">
    <div class="user">
        
        <a href="https://www.douban.com/people/mxj950111/" target="_blank">
            <img src="https://img3.doubanio.com/icon/u35666285-34.jpg" alt="马尔" width="48" height="48" />
        </a>
        
    </div>
    <div class="content">
        <div class="meta">
            <span class="time" title="2015-09-05 19:29:58">2015-09-05</span>
            
            <a href="https://www.douban.com/people/mxj950111/" target="_blank">马尔</a>
            
        </div>
        没有喵星人T_T
        
    </div>
</li>

<li data-url="/j/post/124041/comment/393237">
    <div class="user">
        
        <a href="https://www.douban.com/people/49246158/" target="_blank">
            <img src="https://img3.doubanio.com/icon/u49246158-16.jpg" alt="周周" width="48" height="48" />
        </a>
        
    </div>
    <div class="content">
        <div class="meta">
            <span class="time" title="2015-09-05 15:35:49">2015-09-05</span>
            
            <a href="https://www.douban.com/people/49246158/" target="_blank">周周</a>
            
        </div>
        嗷
        
    </div>
</li>

<li data-url="/j/post/124041/comment/393221">
    <div class="user">
        
        <a href="https://www.douban.com/people/veaka/" target="_blank">
            <img src="https://img3.doubanio.com/icon/u64841660-10.jpg" alt="文学青年卡夫卡" width="48" height="48" />
        </a>
        
    </div>
    <div class="content">
        <div class="meta">
            <span class="time" title="2015-09-05 14:33:43">2015-09-05</span>
            
            <a href="https://www.douban.com/people/veaka/" target="_blank">文学青年卡夫卡</a>
            
        </div>
        我以为是怎么作爱呢
        
    </div>
</li>

<li data-url="/j/post/124041/comment/393196">
    <div class="user">
        
        <a href="https://www.douban.com/people/JO1214078/" target="_blank">
            <img src="https://img3.doubanio.com/icon/u110921895-1.jpg" alt="玳玳狗" width="48" height="48" />
        </a>
        
    </div>
    <div class="content">
        <div class="meta">
            <span class="time" title="2015-09-05 13:48:45">2015-09-05</span>
            
            <a href="https://www.douban.com/people/JO1214078/" target="_blank">玳玳狗</a>
            
        </div>
        哈哈哈，收银小哥太犀利
        
    </div>
</li>

<li data-url="/j/post/124041/comment/393184">
    <div class="user">
        
        <a href="https://www.douban.com/people/76819927/" target="_blank">
            <img src="https://img1.doubanio.com/icon/u76819927-7.jpg" alt="苏嬷嬷" width="48" height="48" />
        </a>
        
    </div>
    <div class="content">
        <div class="meta">
            <span class="time" title="2015-09-05 13:22:10">2015-09-05</span>
            
            <a href="https://www.douban.com/people/76819927/" target="_blank">苏嬷嬷</a>
            
        </div>
        真不能遇上这样子的收银小哥…哈哈
        
    </div>
</li>

<li data-url="/j/post/124041/comment/393176">
    <div class="user">
        
        <a href="https://www.douban.com/people/63053750/" target="_blank">
            <img src="https://img3.doubanio.com/icon/u63053750-51.jpg" alt="风情女神林立慧" width="48" height="48" />
        </a>
        
    </div>
    <div class="content">
        <div class="meta">
            <span class="time" title="2015-09-05 13:04:40">2015-09-05</span>
            
            <a href="https://www.douban.com/people/63053750/" target="_blank">风情女神林立慧</a>
            
        </div>
        学好淋语才能走天下
        
    </div>
</li>

<li data-url="/j/post/124041/comment/393175">
    <div class="user">
        
        <a href="https://www.douban.com/people/zoro_1989/" target="_blank">
            <img src="https://img3.doubanio.com/icon/u45499446-41.jpg" alt="Hermeow" width="48" height="48" />
        </a>
        
    </div>
    <div class="content">
        <div class="meta">
            <span class="time" title="2015-09-05 13:04:31">2015-09-05</span>
            
            <a href="https://www.douban.com/people/zoro_1989/" target="_blank">Hermeow</a>
            
        </div>
        但是为什么看不了动图呢
        
    </div>
</li>

<li data-url="/j/post/124041/comment/393166">
    <div class="user">
        
        <a href="https://www.douban.com/people/lemonliuuu/" target="_blank">
            <img src="https://img3.doubanio.com/icon/u68614447-5.jpg" alt="rocknlemon" width="48" height="48" />
        </a>
        
    </div>
    <div class="content">
        <div class="meta">
            <span class="time" title="2015-09-05 12:55:57">2015-09-05</span>
            
            <a href="https://www.douban.com/people/lemonliuuu/" target="_blank">rocknlemon</a>
            
        </div>
        能不能尼玛别要动图了 不然每天要放弃吃鸡血去吃鸭血了！
        
    </div>
</li>

<li data-url="/j/post/124041/comment/393159">
    <div class="user">
        
        <a href="https://www.douban.com/people/95187755/" target="_blank">
            <img src="https://img3.doubanio.com/icon/u95187755-5.jpg" alt="青蘋末" width="48" height="48" />
        </a>
        
    </div>
    <div class="content">
        <div class="meta">
            <span class="time" title="2015-09-05 12:49:06">2015-09-05</span>
            
            <a href="https://www.douban.com/people/95187755/" target="_blank">青蘋末</a>
            
        </div>
        收银员那个举动，看得我好爽哈哈哈～
        
    </div>
</li>

      </ul>
      
      <div class="load-comment">
          <a href="/post/124041/?start=20" data-pid="124041" id="loadComment">加载更多评论</a>
      </div>
      
      

      

      <div id="sideNav">
          <a href="#" id="backToTop"><b class="arrow"></b>回顶部</a>
      </div>

      
  </div>
  </body>
</html>

`;
    WxParse.wxParse('article', 'html', article, this, 5);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})