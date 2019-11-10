var GoIMProtocol = require('./');
// https://api.live.bilibili.com/room/v1/Danmu/getConf?room_id=912226&platform=pc&player=web

var connection = new GoIMProtocol.GoIMConnection({
    host:"broadcastlv.chat.bilibili.com",
    port:"2243",
    type:"tcp",
    authInfo:{
        uid:Math.floor(Math.random()*1000000),
        roomid:912226
    }
})
connection.connect();
connection.on('connect',()=>{
    console.log("connect")
})
connection.on('close',(e)=>{
    console.log(e)
})
connection.on('message',(e)=>{
    console.log(e)
})
connection.on('error',(e)=>{
    console.log(e)
})