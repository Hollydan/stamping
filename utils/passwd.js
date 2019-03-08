/* 存取用户相关信息 */

function getUserKey(id){
  if(id == 1){
    var keys = [
      {
        card_id: 1,
        name: '王全勝1',
        key: 'wqs'
      },
      {
        card_id: 2,
        name: '王全勝2',
        key: 'wqs'
      },
      {
        card_id: 3,
        name: '王全勝3',
        key: 'wqs'
      },
      {
        card_id: 4,
        name: '王全勝1',
        key: 'wqs'
      },
      {
        card_id: 5,
        name: '王全勝2',
        key: 'wqs'
      },
      {
        card_id: 6,
        name: '王全勝3',
        key: 'wqs'
      }
    ];
  }else if(id == 2){
    var keys = [
      {
        card_id: 11,
        name: '任丹丹1',
        key: 'rdd'
      },
      {
        card_id: 12,
        name: '任丹丹2',
        key: 'rdd'
      },
      {
        card_id: 13,
        name: '任丹丹3',
        key: 'rdd'
      },
      {
        card_id: 14,
        name: '任丹丹1',
        key: 'rdd'
      },
      {
        card_id: 15,
        name: '任丹丹2',
        key: 'rdd'
      },
      {
        card_id: 16,
        name: '任丹丹3',
        key: 'rdd'
      }
    ];
  }else if(id == 3){
    var keys = [
      {
        card_id: 21,
        name: "NET東1",
        key: 'djnet'
      },
      {
        card_id: 22,
        name: 'NET東2',
        key: 'djnet'
      },
      {
        card_id: 23,
        name: 'NET東3',
        key: 'djnet'
      },
      {
        card_id: 24,
        name: 'NET東1',
        key: 'djnet'
      },
      {
        card_id: 25,
        name: 'NET東2',
        key: 'djnet'
      },
      {
        card_id: 26,
        name: 'NET東3',
        key: 'djnet'
      }
    ];
  }else if(id == 4){
    var keys = [
      {
        card_id: 31,
        name: "NET西1",
        key: 'xanet'
      },
      {
        card_id: 32,
        name: 'NET西2',
        key: 'xanet'
      },
      {
        card_id: 33,
        name: 'NET西3',
        key: 'xanet'
      },
      {
        card_id: 34,
        name: 'NET西1',
        key: 'xanet'
      },
      {
        card_id: 35,
        name: 'NET西2',
        key: 'xanet'
      },
      {
        card_id: 36,
        name: 'NET西3',
        key: 'xanet'
      }
    ];
  }

  return keys;
}

/**
 * 对外暴露接口
 */
module.exports = {
  getUserKey: getUserKey
}