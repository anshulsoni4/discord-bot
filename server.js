let Discord = require("discord.js");
let Client = new Discord.Client();



Client.on("message", message => {

if (message.content === "ping") {

message.channel.send("pong")

}

  
})




Client.on("message", message => {

if (message.content === "sup") {

message.channel.send("Nothing much what about you")

}

})


Client.on("message", message => {

if (message.content === "hi") {

message.channel.send("Hey there, what's new")

}

})


Client.on("message", message => {

if (message.content === "meme") {

message.channel.send("https://cdn.glitch.global/607bd725-564b-49c4-8e54-4247204f609b/meme.jpg?v=1642147133252")}

})


Client.on("message", message => {

if (message.content === "meme again") {

message.channel.send("https://cdn.glitch.global/607bd725-564b-49c4-8e54-4247204f609b/meme%202.jpg?v=1642147294774")}

})




Client.login("OTMxNDUwNzk4ODI5ODYyOTYy.YeEnJw.BaWi0G2OMPA50kgCp8RWVGDZSiM")