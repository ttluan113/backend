const Source = require('../../model/ModelSource');
const User = require('../../model/ModelUser');
const historySource = require('../../model/HistorySource');


class ModelSource{
    GetSource(req, res){
        Source.find({})
        .then(dataSource => {
          if(dataSource){
            dataSource.forEach(data => {
              const {link , ...NewData } = data._doc;
              res.status(200).json([NewData])
            })
          }
        })
      }

    showOneSource(req , res){
      Source.findOne({slug : req.params.slug})
      .then(dataOneSource => {
        if(dataOneSource){
          const {link , ...NewData } = dataOneSource._doc;
          res.status(200).json([NewData])
        }

      })
    }

    BuyCode(req , res){
        const slug = req.body.slug;
        const username = req.body.username;
        User.findOne({username})
        .then(dataBuyCode => {
          const usernameBuycode = dataBuyCode.username
          const priceUser = dataBuyCode.surplus
          Source.findOne({slug})
          .then(dataBuy => {
            let priceSource = dataBuy.price
            let surplusUpdate =  priceUser - priceSource 
            if(surplusUpdate >= 0 ){
              res.status(200).json("Thanh Toán Thành Công !!!");
              const sourceUser = new historySource({
                ma : dataBuy.ma, 
                link : dataBuy.link ,
                username : usernameBuycode
              });
              sourceUser.save();
              User.updateOne({surplus : surplusUpdate})
              .then()
            }else{
              res.status(403).json("Số Dư Trong Tài Khoản Của Bạn Không Đủ !!!");
            }
          })
        })
    }

    historySource(req , res , next){
      historySource.find({username : req.body.username})
      .then(data => res.json(data))
    }


    addSource(req, res ,next){
      Source.findOne({slug : req.body.valueSlug})
      .then(addsource => {
        if(addsource){
          res.status(403).json("Source Đã Tồn Tại !!!");
        }else{
            const addsource = new Source(req.body)
            addsource.save();
            res.status(200).json("Thêm  Thành Công !!!")
        }
      })
    }

    editSource(req , res , next){
      Source.updateOne({price : req.body.valuePrice , pricestring : req.body.valuePriceString})
      .then(resEdit => res.status(200).json("Chỉnh Sửa Thành Công !!!"))
    }

    deleteSource(req , res , next){
      Source.deleteOne({slug : req.body.itemSlug})
      .then(res.status(200).json("Xóa Thành Công !!!"))
    }
    
}

module.exports = new ModelSource;