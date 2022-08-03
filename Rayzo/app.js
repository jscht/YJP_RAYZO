var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const models = require("./models/index.js");
const session = require('express-session');
const methodOverride = require('method-override');
//PUT & DELETE 위해 -> RESTful
//기본은 POST와 GET 밖에 없음
var indexRouter = require('./routes/index'); // ./routes/index 경로의 라우터 불러오기
var usersRouter = require('./routes/users'); // ./routes/user 경로의 라우터 불러오기
var app = express();

models.sequelize.sync().then(() => {
  console.log("rayzo DB connection success!!!");
}).catch(err => {
  console.log("rayzo DB connection fail...");
  console.log(err);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//뷰 페이지의 폴더 기본 경로로 __dirname(현 js의 경로) + view 이름의 폴더를 사용하겠다는 의미

app.set('view engine', 'ejs');

app.use(methodOverride('_method')); //method-override 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(session({
  key: 'sid',
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 24000 * 60 * 60 // 쿠키 유효기간 24시간
  }
}));
app.use(express.static(path.join(__dirname, '/public')));

//세션은 쿠키를 기반으로 하고있는 것,사용자 정보 파일을 브라우저에 저장하는 쿠키와 달리, 세션은 서버 측에서 관리
//서버에서는 클라이언트를 구분하기 위해 세션 id를 부여하여 웹 브라우저가 서버에 접속해서 브라우저를 종료할 때까지 인증상태를 유지

app.use('/', indexRouter);
app.use('/users', usersRouter);
// 라우터 함수인 usersRouter 변수의 경로를 /users 라는 가상 경로로 사용하겠다고 선언


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;