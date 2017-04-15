var currentEmotes = []
var options = {
    options: {
        debug: false
    },
    connection: {
        reconnect: true,
        secure: true
    },
    channels: ["#rikitales"]
}

function setup() {
    createCanvas(1280, 720)
}

function draw() {
    clear()
    for (var i = 0; i < currentEmotes.length; i++) {
        currentEmotes[i].render()
        currentEmotes[i].delete()
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