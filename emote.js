function Emote(key) {

    this.startTime = new Date().getTime()
    this.x = Math.floor(Math.random(100) * width-100)
    this.y = Math.floor(Math.random(100) * height-100)
    this.img = loadImage(`https://static-cdn.jtvnw.net/emoticons/v1/${key}/3.0`)
    
    this.offset = 255
    this.amplitude = 3
    this.angle = 0
    this.upwardsSpeed = Math.floor((Math.random() * 4) + 1)

    this.render = function() {
        image(this.img, this.x, this.y)
        tint(255, this.offset)
    
        this.x += this.amplitude*sin(this.angle)
        this.y -= this.upwardsSpeed
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