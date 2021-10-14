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

const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: '',
  credentials: true,
};


app.use(cors(corsOptions));

