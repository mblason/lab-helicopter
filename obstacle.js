class Obstacle {
  constructor(ctx, up) {
    this.ctx = ctx;
    this.x = this.ctx.canvas.width;
    this.dist = Math.random() *  300 + 60
    this.y = up ? 0 : this.ctx.canvas.height - this.dist;
    this.w = 20;
    this.h = this.ctx.canvas.height - this.dist;
    this.color = "black";
    this.vx = -2;    
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
    this.ctx.closePath();
  }

  move() {
    this.x += this.vx;
  }

  collide(el) {
    const collideX = el.x + el.w > this.x && el.x < this.x + this.w;
    const collideY = el.y < this.y + this.h && el.y + el.h > this.y;

    return collideX && collideY;
  }

  isVisible() {
    return this.x + this.w >= 0
  }
}