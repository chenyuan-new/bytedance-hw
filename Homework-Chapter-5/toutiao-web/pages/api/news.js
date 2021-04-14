export default (req, res) => {
    res.status(200).json({
        code: 200,
        data: [
        {
          title: '再登达沃斯论坛 习近平释放鲜明信号',
          author: '中央网新闻',
          commentsCount: 45,
          type: 'News',
        },
        {
          title: '系列微视频 | 我爷爷拉二胡、唱小曲儿',
          author: '瞎吹',
          commentsCount: 666,
          type: 'OnePic',
          imgUrls: [
            'https://p3.pstatp.com/list/pgc-image/SUWPYQc5OXziJM',
          ],
        },
        {
          title: '环球网评：@纽约时报，收起你的满纸荒唐言',
          author: '环球网',
          commentsCount: 4497,
          type: 'News',
        },
        {
          title: '易地搬迁，稳得住能致富',
          author: '人民日报',
          commentsCount: 1203,
          type: 'News',
        },
        {
          title:
            '志愿者“组团”为居民跑腿买药：疫情让我们距离变远 却让心更近了！',
          author: '央视网新闻',
          commentsCount: 465,
          type: 'OnePic',
          imgUrls: [
            'https://p3.pstatp.com/list/pgc-image/SUWPYQc5OXziJM',
          ],
        },
        {
          title: '走开5米车就瞬间被盗！短裙长腿“黑衣女”专偷“卖菜三轮”？',
          author: '中国青年网',
          commentsCount: 666,
          type: 'OnePic',
          imgUrls: [
            'https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          ],
        },
        {
          title:
            'BBC发布《重返湖北》纪录片，网友：感觉他努力想黑但实在做不到……',
          author: '中国青年网',
          commentsCount: 854,
          type: 'MultiPic',
          imgUrls: [
            'https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            'https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          ],
        },
        ],
    })
  }