var express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const axios = require('axios');
const health = require('@cloudnative/health-connect');
var app = express();
const healthcheck = new health.HealthChecker();

app.use('/live', health.LivenessEndpoint(healthcheck));
app.use('/ready', health.ReadinessEndpoint(healthcheck));
app.use('/health', health.HealthEndpoint(healthcheck));

function invoke_webook(res,body)
{
  axios
  .post(`${process.env.WEBHOOK_URL}`, body)
  .then(webhook_res => {
    console.log(`statusCode: ${webhook_res.status}`);
    res.status(200).send(webhook_res.data);
  })
  .catch(error => {
    console.error(error)
    res.status(500).send(error)
  });
}

app.post("/webhook", jsonParser, function(req, res) { 
    if (Object.keys(req.body).includes("challenge"))
    {
        console.log("This is a challenge")
        console.log(JSON.stringify(req.body, 0, 2)); 
        res.status(200).send(req.body);
    }
    else
    {
      console.log("This is a Webhook Trigger")
      invoke_webook(res,req.body)
    }
})

var server = app.listen(4000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Webhook URL is %s", process.env.WEBHOOK_URL)
   console.log("monday.com webhook app listening at http://%s:%s", host, port)
})
