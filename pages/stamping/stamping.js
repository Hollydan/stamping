var app = getApp()
var mydata = require('../../utils/data')
var util = require('../../utils/util')
var passwd = require('../../utils/passwd.js')

Page( {
  data: {
    id: '',
    key: '',
    card_id: '',
    name: '',
    hiddenAlert: true,
    hiddenKey: true,
    bookToastHidden: true,
    addrArray:util.replacePhone(mydata.userData().addrs,true),
    keys: '',
    aid: 0
  },
  onLoad: function (options) {
    //console.log(options);
    this.setData({
      aid: options.aid,
      keys: passwd.getUserKey(options.aid)
    })   
  },

  /**
   * 点击名字打卡
   */
  click: function (e) {
    console.log(e);
    this.data.id = e.currentTarget.dataset.id;
    //console.log(id);
    //key = this.data.keys[id].key;
    //console.log(key);
    this.setData({
      hiddenKey: !this.data.hiddenKey,
      card_id: e.currentTarget.dataset.card,
      name: e.currentTarget.dataset.name
    })
  },

  /**
   * 获取输入的 key
   */
  getKey: function (e) {
    //console.log(e);
    this.data.key = e.detail.value;
  },

  /**
   * 判断 key 值
   */
  keyCheck: function (e) {
    if (this.data.key == this.data.keys[this.data.id].key) { // 打卡成功
      //console.log(this.data.id);
      //console.log(this.data.card_id)
      //console.log(this.data.name)

      // 打卡记录
      var log = 'ID：' + this.data.card_id + ', NAME：' + this.data.name + ', TIME：' + util.formatTime(new Date()) + "\n";

      const fs = wx.getFileSystemManager()
      fs.writeFileSync(`${wx.env.USER_DATA_PATH}/log.txt`, log, 'utf8')
      
      this.setData({
        hiddenKey: true,
        hiddenAlert: true,
        bookToastHidden: false
      })

    } else { // key error
      this.setData({
        hiddenKey: false,
        hiddenAlert: false
      })
    }
  },

  /**
   * 取消提交
   */
  keyCancel: function (e) {
    //console.log(e);
    this.setData({
      hiddenKey: true,
      hiddenAlert: true
    })
  },

  /**
   * 隐藏打卡成功提示
   */
  hideToast: function () {
    this.setData({
      bookToastHidden: true
    })
  }
  
})