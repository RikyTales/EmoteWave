function Emote(key) {

    this.offset = 255
    this.startTime = new Date().getTime()
    this.amplitude = 3
    this.angle = 0
    this.x = Math.floor(Math.random(56) * width-56)
    this.y = Math.floor(Math.random(56) * height-56)
    this.img = loadImage(`https://static-cdn.jtvnw.net/emoticons/v1/${key}/3.0`)

    this.render = function() {
        image(this.img, this.x, this.y)
        tint(255, this.offset)
        this.x += this.amplitude*sin(this.angle)
        this.y -= 2
        this.angle += 0.07
        this.offset -= 2
        this.now = new Date().getTime()
    }
    this.delete = function() {
        if (this.now > (this.startTime + 5000)) {
            currentEmotes.splice(this, 1)
        }
    }
}