const express = require('express');
const router = express.Router();
const models = require("../models");
const crypto = require("crypto");


// 회원가입 GET
router.get('/sign_up', function (req, res, next) {
  res.render("user/signup");
});

// 회원가입 POST
router.post("/sign_up", async function (req, res, next) {

  let inputPassword = req.body.password; //평문
  let salt = Math.round((new Date().valueOf() * Math.random())) + "";
  let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex"); //인코딩방식
  //암호화방식       암호화알고리즘 sha512             
  let result = models.user.create({
    //튜플     model에 user라는 객체에서 insert(create)을 한다
    name: req.body.userName,
    email: req.body.userEmail,
    password: hashPassword,
    salt: salt //복호화(암호화의 반대말)를 못하기때문에
  })

  res.redirect("/users/login");
})


// 메인 페이지
router.get('/', function (req, res, next) {
  if (req.cookies) {
    console.log(req.cookies);
  }

  //res.send("Welcome!");
});

// 로그인 GET
router.get('/login', function (req, res, next) {
  res.render("user/login", {
    session: req.session
  });
});

// 로그인 POST
router.post("/login", async function (req, res, next) {
  //user라는 model의 객체
  let result = await models.user.findOne({
    //튜플     model에 user라는 객체에서 select(findone)을 한다.
    where: {
      email: req.body.uEmail // email이란 table의 필드값이 내가 작성한 값이랑 확인후 같으면 튜플값을 result에 넣는다. 
    }
  });

  //암호화되어있는 것//
  let dbPassword = result.dataValues.password; //튜플의 패스워드
  //로그인페이지 암호화안된것//
  let inputPassword = req.body.password; //입력한 패스워드
  //salt 암호화되어있는 것//
  let salt = result.dataValues.salt; //튜플의 솔트값

  //해시알고리즘//
  let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

  if (dbPassword === hashPassword) {
    console.log("PW match");
    // 세션 설정
    req.session.email = req.body.uEmail;
    res.redirect("/users/login");
  } else {
    console.log("PW mismatch");
    res.redirect("/users/login");
  }
});

// 로그아웃
router.get("/logout", function (req, res, next) {
  req.session.destroy();
  res.clearCookie('sid');

  res.redirect("/users/login")
})

module.exports = router;