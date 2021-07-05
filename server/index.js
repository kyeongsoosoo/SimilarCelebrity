const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const multer = require("multer");
const cors = require('cors');

const config = require('./config/key');
app.use(express.json())


app.use(
  cors({
    origin: '*', // 모든 요청 허용
    origin: true, // 들어오는 요청 도메인/포트가 자동으로 origin에 삽입된다.
    credentials: true, // 개발단계에서는 false, 실 서비스에서는 true
  }),
);

const upload = multer().single("file");

app.use("/uploads", express.static("uploads"));

app.post("/uploadImage", (req, res) => {
  upload(req, res, (err) => {


    const request = require('request');
  
    const api_url = 'https://openapi.naver.com/v1/vision/celebrity'; // 유명인 인식

    const _formData = {
      image:'image',
      image: req.file.buffer
    };

    request.post({url:api_url, formData:_formData,
     headers: {'X-Naver-Client-Id':config.CLIENT_ID, 'X-Naver-Client-Secret': config.CLIENT_SECRET}},(error, response, body) => {
       return res.send(body);
    })
  });
});


app.get('/find-image', (req, res) => {
  const request = require('request');
  const keyword = req.query.keyword;
  const url = `https://openapi.naver.com/v1/search/image?query=${keyword}&display=4&start=1&sort=sim`
  request.get({url,
    headers: {'X-Naver-Client-Id':config.CLIENT_ID, 'X-Naver-Client-Secret': config.CLIENT_SECRET}},(error, response, body) => {
      return res.status(200).send(body);
   })

});


app.listen(port, () => console.log(`listening to port: ${port}`));
