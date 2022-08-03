let express = require('express');
let models = require('../models');
let router = express.Router();
const crypto = require('crypto');


// 메인
router.get('/', function (req, res, next) {
  res.render('index');
});
// 게시판 목록
router.get('/board', async function (req, res, next) {
  let resu = await models.team.findAll();
  let resl = await models.major.findAll();
  let result = await models.post.findAll(); //post라는 model객체를 가져온다
  
  if (req.session.email) {
    if (result){
      for(let post of result){
        let result2 = await models.post.findOne({
          include: {
            model: models.reply,
            where: {
              postId: post.id
            }
          }
        })
        if(result2){
          post.replies = result2.replies
        }
      } 
    }
    res.render('board', {
      posts: result,
      lists: resu,
      majors: resl
    });
  } else {
    console.log("err!!");
  }
});
// 조원 소개 조회
router.get('/team/:id', function (req, res, next) {
  let result = models.team.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(result => {
      res.render("team", { 
        list: result
      });
    })
    .catch(err => {
      console.log("data LOOKUP fail...");
    });
});
// 조원 소개 수정
router.put('/team/:id', function (req, res, next) {
  models.team.update({ //model에 user라는 객체에서 update를 한다.
      member: req.body.editMem,
      introduce: req.body.editItd
    }, {
      where: {
        id: req.params.id // id이란 table의 필드값이 내가 작성한 값이랑 확인후 같으면 update 실행
      }
    })
    .then(result => {
      console.log("data MODIFY success!!");
      res.redirect("/board"); // redirect가 함수 불러옴
    })
    .catch(err => {
      console.log("data MODIFIY fail...");
    });
});
// 전공 소개 조회
router.get('/major/:id', function (req, res, next) {
  let result = models.major.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(result => {
      res.render("major", { 
        major: result
      });
    })
    .catch(err => {
      console.log("data LOOKUP fail...");
    });
});
// 전공 소개 수정
router.put('/major/:id', function (req, res, next) {
  models.major.update({ //model에 user라는 객체에서 update를 한다.
      course: req.body.editMem,
      introduce: req.body.editItd
    }, {
      where: {
        id: req.params.id // id이란 table의 필드값이 내가 작성한 값이랑 확인후 같으면 update 실행
      }
    })
    .then(result => {
      console.log("data MODIFY success!!");
      res.redirect("/board"); // redirect가 함수 불러옴
    })
    .catch(err => {
      console.log("data MODIFIY fail...");
    });
});



// 글 등록
router.post('/board', function (req, res, next) {
  models.post.create({
      //시퀄라이즈로 생성했을때 자동으로 생성되는것 
      //ID
      //수정시간
      //생성시간

      title: req.body.inTitle,
      writer: req.body.inWriter
    })
    .then(result => {
      console.log("data ADD success!!");

      res.redirect("/board");
    })
    .catch(err => {
      console.log("data ADD fail...");
    })
});

// 글 조회
router.get('/board/:id', function (req, res, next) {
  let result = models.post.findOne({
      where: {
        id: req.params.id // post ID에 맞는 게시글
      }
    })
    .then(result => {
      res.render("edit", { //render가 파일을 불러오는거
        post: result
      });
    })
    .catch(err => {
      console.log("data LOOKUP fail...");
    });
});

// 글 수정
router.put('/board/:id', function (req, res, next) {
  console.log(req.body)
  models.post.update({ //model에 user라는 객체에서 update를 한다.
      title: req.body.editTitle,
      writer: req.body.editWriter
    }, {
      where: {
        id: req.params.id // id이란 table의 필드값이 내가 작성한 값이랑 확인후 같으면 update 실행
      }
    })
    .then(result => {
      console.log("data MODIFY success!!");
      res.redirect("/board"); // redirect가 함수 불러옴
    })
    .catch(err => {
      console.log("data MODIFIY fail...");
    });
});

// 글 삭제
router.delete('/board/:id', function (req, res, next) {

  models.post.destroy({ //model에 user라는 객체에서 destroy를 한다.
      where: {
        id: req.params.id // id이란 table의 필드값이 내가 작성한 값이랑 확인후 같으면 destroy 실행
      }
    })
    .then(result => {
      res.redirect("/board");
    })
    .catch(err => {
      console.log("data DELETE fail...");
    });
});

// 댓글 등록
router.post('/reply/:postID', function (req, res, next) {

  models.reply.create({ //model에 reply라는 객체에서 create(insert)을 한다
      postId: req.params.postID,
      writer: req.body.replyWriter,
      content: req.body.replyContent
    })
    .then(results => {
      res.redirect("/board");
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
// 새로운 미들웨어(라우터) 등록

/*이 모듈의 반환 객체는 router 이어야 함을 꼭 기억해주세요!
  그래야 라우터 미들웨어로 등록할 수 있습니다.*/