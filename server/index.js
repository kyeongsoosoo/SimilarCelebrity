const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config/key');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: '*', // 모든 요청 허용
    origin: true, // 들어오는 요청 도메인/포트가 자동으로 origin에 삽입된다.
    credentials: true, // 개발단계에서는 false, 실 서비스에서는 true
  }),
);

app.get('/', (req, res) => {
  var request = require('request');
  const url = "https://openapi.naver.com/v1/search/image?query=yuna&display=10&start=1&sort=sim"
  request.get({url,
    headers: {'X-Naver-Client-Id':config.CLIENT_ID, 'X-Naver-Client-Secret': config.CLIENT_SECRET}},
     (error, response, body) => {
      console.log(body)
      return res.status(200).send(response)
    });

});
app.get('/face', function (req, res) {
  var request = require('request');
  console.log(req.body);
  var api_url = 'https://openapi.naver.com/v1/vision/celebrity'; // 유명인 인식

  //var api_url = 'https://openapi.naver.com/v1/vision/face'; // 얼굴 감지

  var _formData = {
    image:'image',
    image: fs.createReadStream(__dirname + 'YOUR_FILE_NAME') // FILE 이름
  };
   var _req = request.post({url:api_url, formData:_formData,
     headers: {'X-Naver-Client-Id':config.CLIENT_ID, 'X-Naver-Client-Secret': config.CLIENT_SECRET}}).on('response', function(response) {
      console.log(response.statusCode) // 200
      console.log(response.headers['content-type'])
   });
   console.log( request.head  );
   _req.pipe(res); // 브라우저로 출력
});


app.listen(port, () => console.log(`listening to port: ${port}`));
