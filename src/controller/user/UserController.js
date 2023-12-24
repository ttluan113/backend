const User = require('../../model/ModelUser');
const jwt = require('jsonwebtoken');

class UserController {
        Register(req , res){
            User.findOne({username : req.body.username})
            .then(newUser => {
                    if(newUser){
                        res.status(403).json({message : "Người Dùng Đã Tồn Tại !!!"});
                    }else{
                        const newUsers = new User(req.body)
                        newUsers.save();
                        res.status(200).json({message : "Đăng Ký Thành Công !!!"})
                    }
            })
        };

        Login(req , res){
            User.findOne({username : req.body.username , password : req.body.password})
            .then(LoginUser => {
                if(LoginUser){
                    const token = jwt.sign({ username : LoginUser.username , 
                        admin : LoginUser.isAdmin , 
                        surplus : LoginUser.surplus
                    }, process.env.ACCSESS_TOKEN ,  { expiresIn: '1d' });
                    const username = LoginUser.username;
                    const surplus = LoginUser.surplus;
                    const admin = LoginUser.isAdmin;
                    res.status(200).json({token , username , surplus , admin});

                }else{
                    res.status(403).json({message : "Tài Khoản Mật Khẩu Không Chính Xác !!!"})
                }
            })
        }

        GetAllUser(req , res , next){
            User.find({})
            .then(data => res.json(data))
        }

        EditUser(req , res , next){
            User.findOne({username : req.body.username})
            .then(newSurplus => {
                if(newSurplus){
                    res.status(200).json("Cộng Tiền Thành Công !!!")
                    User.updateOne({surplus : req.body.surplus})   
                    .then()                 
                }else{
                    res.status(403).json("Có Lỗi Xảy Ra !!!")
                }
            })
        }

        DeleteUser(req , res , next){
            User.deleteOne({_id : req.body._id})
            .then(res.status(200).json("Xóa Thành Công !!!"))
        }

}

module.exports = new UserController