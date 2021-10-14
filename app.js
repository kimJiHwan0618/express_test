// const express = require("express")
// const axios = require("axios")
// const path = require("path")
// const app = express()
// const port = process.env.PORT || 5000
// const http = require("http")

// require("dotenv").confing()

// const covid_url = "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson";

// const getCovidData = async (request) => {
//   let reponse;
//   try {
//     reponse = await axios.get(covid_url, {
//       params: {

//       }
//     })
//   } catch (e) {
//     console.log(e)
//   }
//   return reponse
// }

// app.get("/api/covid", (req, res) => {
//   getCovidData(req).then((reponse) => {
//     res.json(reponse.data.reponse.body)
//   })
// })

// app.use(express.static(path.join(__dirname, "client/build")))

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/cliend/build/index.html"))
// })


// const express = require('express');
// const cors = require('cors');
// const app = express();

// const corsOptions = {
//   origin: 'http://127.0.0.1:5500',
//   credentials: true,
// };


// app.use(cors(corsOptions));


// var express = require('express');
// var router = express.Router();


// router.get('/', function (req, res, next) {
//   res.status(200).json({
//     message: "sopt 서버 여러분 안녕하세요~,sopt-Media에 좋아요와 댓글 부탁드립니다!!(꾸벅)",
//   })
// });

// module.exports = router;


const express = require('express')
const app = express();
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`err ${port}`));