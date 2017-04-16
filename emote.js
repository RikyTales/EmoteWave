function Emote(key) {

    this.x = random(100, width-100)
    this.y = random(100, height-300)
    this.img = loadImage(`https://static-cdn.jtvnw.net/emoticons/v1/${key}/3.0`)
    
    this.angle = 0
    this.amplitude = 3
    this.initialFrameCount = frameCount
    this.frameCount = this.initialFrameCount
    this.offset = 255
    this.upwardsSpeed = random(2, 5)

    this.render = function() {
        image(this.img, this.x, this.y)
        tint(255, this.offset)
    
        this.x += this.amplitude*sin(this.angle)
        this.y -= this.upwardsSpeed
        this.angle += 0.07
        this.offset -= 2
        this.frameCount += 1
    }
    
    this.delete = function() {
        if (this.frameCount === this.initialFrameCount + 150) {
            currentEmotes.splice(this, 1)
        }
    }
}