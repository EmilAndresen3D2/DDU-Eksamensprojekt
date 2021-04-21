function Tank() {
  this.x = 0;  //x værdien er 0
  this.y = 0;  //y værdien er 0
  this.xspeed = 1;  //værdi for farten på x aksen
  this.yspeed = 0;  //værdi for farten på y aksen
  this.total = 0;
  this.hale = [];

  //Opdatere bevægelsen på x og y akserene
  this.update = function() {
    if (this.total === this.hale.length) {
      for (var i = 0; i < this.hale.length - 1; i++) {
        this.hale[i] = this.hale[i+1];
      }

      this.hale[this.total - 1] = createVector(this.x, this.y);

      this.x = this.x + this.xspeed * grid;  //x får tilsat en fart
      this.y = this.y + this.yspeed * grid;  //y får tilsat en fart

      this.x = constrain(this.x, 0, width-grid);
      this.y = constrain(this.y, 0, height-grid);
    }

    this.bev = function(x, y) {
      this.xspeed = x; 
      this.yspeed = y;
    };


    //Kroppen for slangen
    this.vis = function() {
      fill(255);
      rect(this.x, this.y, grid, grid);
    };
  };
}
