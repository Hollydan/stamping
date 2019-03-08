/**
 * banner数据
 */ 
function getBannerData(){
  var arr = [
    '../../images/logo.svg', 
    '../../images/Goobike.jpg', 
    '../../images/Gooparts.jpg', 
    '../../images/CSR.jpg'
    ]
    return arr
}
/*
 * 首页 navnav 数据
 */ 
function getIndexNavData(){
    var arr = [
            {
                id:1,
                icon:"../../images/nav_icon_01.png",
                title:"打刻画面"
            },
            {
                id:2,
                icon:"../../images/nav_icon_02.png",
                title:"管理画面"
            },
            {
                id:3,
                icon:"../../images/nav_icon_03.png",
                title:"会議予約画面"
            },
            {
                id:4,
                icon:"../../images/nav_icon_04.png",
                title:"美发"
            },
            {
                id:5,
                icon:"../../images/nav_icon_05.png",
                title:"美睫"
            }
        ]
    return arr
}
/*
 * 首页 对应 标签 数据项
 */ 
function getIndexNavSectionData(){
    var arr = [
                [
                    {
                      id: 1,
                      subject:"グーバイクチーム（東京）",
                      coverpath:"../../images/goobike.png",
                      num:'55名',
                      message:'お客様の満足度はアップしろ！'
                    },
                    {
                      id: 2,
                      subject:"グーバイクチーム（西安）",
                      coverpath:"../../images/goobike.png",
                      num:'66名',
                      message:'我们一直在努力！'
                    },
                    {
                      id: 3, 
                      subject:"GooNET（東京）",
                      coverpath:"../../images/recommend_img_03.png",
                      num:'50名',
                      message:'我们追求的是没有最长只有更长！'
                    },
                    {
                      id: 4,
                      subject: "GooNET（西安）",
                      coverpath:"../../images/recommend_img_05.png",
                      num:'60名',
                      message:'站着客户的角度去考虑看看。'
                    }
                ]
            ]
    return arr
}
/**
 * 技师 数据
 * */ 
function getSkilledData(){
    var arr = [
                {
                        company:"西狮独品美容美发有限公司",
                        avatar:"../../images/skilledt_img_01.png",
                        nickname:'张技师',
                        price:'¥500',
                        message:'从事美发行业60余年，有丰富经验',
                        distance:'100m'
                    },
                    {
                        company:"圆月亮美甲沙龙",
                        avatar:"../../images/skilledt_img_02.png",
                        nickname:'包技师',
                        price:'¥800',
                        message:'从事美发行业60余年，有丰富经验',
                        distance:'200m'
                    },
                    {
                        company:"璀璨美睫会所",
                        avatar:"../../images/skilledt_img_03.png",
                        nickname:'王技师',
                        price:'¥600',
                        message:'从事美发行业60余年，有丰富经验',
                        distance:'100m'
                    },
                    {
                        company:"柔丝妮美容养生馆",
                        avatar:"../../images/skilledt_img_04.png",
                        nickname:'黄技师',
                        price:'¥800',
                        message:'从事美发行业60余年，有丰富经验',
                        distance:'400m'
                    }
            ]
    return arr
}

/**
 * 选择器 数据
 */ 
function getPickerData(){
    var arr =[
        {
            name:'李金水',
            phone:'13812314563',
            province:'北京',
            city:'北京',
            addr:'朝阳区望京悠乐汇A座8011'
        },
        {
            name:'王全勝',
            phone:'13812314563',
            province:'北京市',
            city:'北京市',
            addr:'朝阳区望京悠乐汇A座4020'
        }
    ]
    return  arr
}
/**
 * 查询 地址
 * */ 
var user_data = userData()
function searchAddrFromAddrs(addrid){
    var result
    for(let i=0;i<user_data.addrs.length;i++){
        var addr = user_data.addrs[i]
        console.log(addr)
        if(addr.addrid == addrid){
            result = addr
        }
    }
    return result || {}
}
/**
 * 用户数据
 * */ 
function userData(){
    var arr = {
                uid:'1',
                nickname:'キング様',
                name:'李金水',
                phone:'13833337998',
                avatar:'../../images/avatar.png',
                addrs:[
                   {
                        addrid:'1',
                    name:'李金水',
                        phone:'13812314563',
                        province:'北京',
                        city:'直辖市',
                        addr:'朝阳区望京悠乐汇A座8011'
                    },
                    {
                        addrid:'2',
                        name:'王全勝',
                        phone:'13812314563',
                        province:'北京',
                        city:'直辖市',
                        addr:'朝阳区望京悠乐汇A座4020'
                    } 
                ]
            }
    return arr
}
/**
 * 省
 * */ 
function provinceData(){
    var arr = [
        // {pid:1,pzip:'110000',pname:'北京市'},
        // {pid:2,pzip:'120000',pname:'天津市'}
        '请选择省份','福建省'
    ]
    return arr
}
/**
 * 市
 * */ 
function cityData(){
    var arr = [
        // {cid:1,czip:'110100',cname:'市辖区',pzip:'110000'},
        // {cid:2,czip:'120100',cname:'市辖区',pzip:'120000'}
        '请选择城市','福州市','厦门市','宁德市'
    ]
    return arr
}
/*
 * 对外暴露接口
 */ 
module.exports = {
  getBannerData : getBannerData,
  getIndexNavData : getIndexNavData,
  getIndexNavSectionData : getIndexNavSectionData,
  getPickerData : getPickerData,
  getSkilledData :getSkilledData,
  userData : userData,
  provinceData : provinceData,
  cityData : cityData,
  searchAddrFromAddrs : searchAddrFromAddrs

}