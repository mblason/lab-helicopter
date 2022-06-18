class Helicopter {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = this.ctx.canvas.height / 3
    this.y = this.ctx.canvas.width / 5
    this.img = new Image();
    this.img.src = "./images/helicopter-spritesheet.png"
    this.w = 120;
    this.h = 50;
    this.tick = 0;

    this.img.frames = 4
    this.img.frameIndex = 0

    

    this.weapon = new Weapon(this)
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      0,
      this.img.frameIndex * this.img.height / this.img.frames,
      this.img.width,
      this.img.height / this.img.frames,
      this.x,
      this.y,
      this.w,
      this.h
    )
      this.animate()
  }

  isFloor() {
  }

  move() {
  }

  animate() {
    this.tick++

    if(this.tick > 4){
      this.tick = 0
      this.img.frameIndex++

      if(this.img.frameIndex > 3) {
        this.img.frameIndex = 0
      }
    } 


  }

  setListeners() {
    document.onkeydown = e => this._switchAction(e.keyCode, true)
    document.onkeyup = e => this._switchAction(e.keyCode, false)
  }

  applyActions() {
  }

  switchAction(key, apply) {
  }
}
