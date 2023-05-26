const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require("body-parser");
app.use(cors())

var mqtt = require('mqtt');
const { log } = require('node-red');
const MQTT_SERVER = "broker.hivemq.com";
const MQTT_PORT = "1883";
//if your server don't have username and password let blank.
const MQTT_USER = "kittapon2544"; 
const MQTT_PASSWORD = "kittapon2544";

// Connect MQTT
var client = mqtt.connect({
    host: MQTT_SERVER,
    port: MQTT_PORT,
    username: MQTT_USER,
    password: MQTT_PASSWORD
});

client.on('connect', function () {
    // Subscribe any topic
    console.log("MQTT Connect");
    client.subscribe('esp32/output', function (err) {
        if (err) {
            console.log(err);
        }
    });
    client.subscribe('Output/pum', function (err) {
        if (err) {
            console.log(err);
        }
    });
});

let B = "itoi"
let C = "itoi"
// Receive Message and print on terminal
client.on('message', function (topic, message) {
    // message is Buffer
    const A = message.toString()
    const z = topic.toString()
    if(A == "On"){
        B = "itim"
    }else if(A == "Off"){
        B = "ijohn"
    }else if(A == "on"){
        C = "itim"
    }else if(A == "off"){
        C = "ijohn"
    }else if(A == "fan_off"){
        B = "fan_off"
    }else if(A == "pump_off"){
        C = "pump_off"
    }
    console.log(A+"_"+z);
});
app.get('/fan', function (req, res) {
    res.json([{statusfan : B , statuspump : C}])
    res.end()
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// Here is where I'm trying to access and log the value of "a"
app.post('/fans', function (req, res) {
    if(req.body.a === "On"){
        client.publish('esp32/output',req.body.a,{ qos:2})
    }else if(req.body.a === "Off"){
        client.publish('esp32/output',req.body.a,{ qos:2})
    }
    res.end()
});


app.post('/pump', function (req, res) {
    if(req.body.a === "on"){
        client.publish('esp32/output',req.body.a,{ qos:2})
    }else if(req.body.a === "off"){
        client.publish('esp32/output',req.body.a,{ qos:2})
    }
    res.end()
});



app.listen(5000,()=>{
    console.log("start");
    
})