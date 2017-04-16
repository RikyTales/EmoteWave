function Emote(key) {

    this.x = random(100, width-100)
    this.y = random(100, height-300)
    this.img = loadImage(`https://static-cdn.jtvnw.net/emoticons/v1/${key}/3.0`)
    
    this.angle = 0
    this.amplitude = 3
    this.lifespan = 255
    this.upwardsSpeed = random(2, 5)

    this.render = function() {
        image(this.img, this.x, this.y)
        tint(255, this.lifespan)
    
        this.x += this.amplitude*sin(this.angle)
        this.y -= this.upwardsSpeed
        this.angle += 0.07
        this.lifespan -= 2
    }
    
    this.delete = function() {
        if (this.lifespan < 0) {
            currentEmotes.splice(this, 1)
        }
    }
}