var params = window.location.search.slice(1)
var searchParams = new URLSearchParams(params)
var channel = searchParams.get("channel") || "rikitales"

var currentEmotes = []
var options = {
    options: {
        debug: false
    },
    connection: {
        reconnect: true,
        secure: true
    },
    channels: [`#${channel}`]
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
}

function draw() {
    clear()
    for (var i = currentEmotes.length-1; i >= 0; i--) {
        currentEmotes[i].update()
    }
}

var client = new tmi.client(options)
client.connect()

client.on("chat", function(channel, userstate, message, self) {
    for (var key in userstate.emotes) {
        for (var j = 0; j < userstate.emotes[key].length; j++) {
            currentEmotes.push(new Emote(key))
        }
    }
})