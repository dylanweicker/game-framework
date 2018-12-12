/**
 * @fileoverview Class handling the drawing of objects in the game.
 * @author kennethli.3470@gmail.com (Kenneth Li)
 */

/**
 * Creates a Drawing object.
 * @param {CanvasRenderingContext2D} context The context this object will
 *   draw to.
 * @constructor
 */
function Drawing(context) {
  this.context = context;
  this.playerImage = Drawing.createImage("./public/images/arrow.jpg", 32, 32);
  this.enemyImage = Drawing.createImage("./public/images/enemy.jpg", 32, 32);
}

/**
 * This is a factory method for creating a Drawing object.
 * @param {CanvasRenderingContext2D} context The context this object will
 *   draw to.
 * @return {Drawing}
 */
Drawing.create = function(context) {
  return new Drawing(context);
};

/**
 * This method creates and returns an Image object.
 * @param {string} src The path to the image
 * @param {number} width The width of the image in pixels
 * @param {number} height The height of the image in pixels
 * @return {Image}
 */
Drawing.createImage = function(src, width, height) {
  var image = new Image(width, height);
  image.src = src;
  return image;
};

/**
 * Clears the canvas context.
 */
Drawing.prototype.clear = function() {
  var canvas = this.context.canvas;
  this.context.clearRect(0, 0, canvas.width, canvas.height);
};
/**
 * Draws the player's sprite as a purple arrow
 * @param {number} x The x coordinate of the player
 * @param {number} y The y coordinate of the player
 * @param {number} orientation The degree angle of the player
 * @param {number} size The radial size of the player
 */
Drawing.prototype.drawSelf = function(x, y, orientation, size) {
  this.context.save();
  this.context.translate(x, y);
  this.context.rotate(orientation*Math.PI/180);
  this.context.translate(-x, -y);
  this.context.drawImage(this.playerImage, x, y);
  this.context.restore();
};

/**
 * Draws other players' sprite as a red circle.
 * @param {number} x The x coordinate of the player
 * @param {number} y The y coordinate of the player
 * @param {number} orientation The degree angle of the player
 * @param {number} size The radial size of the player
 */
Drawing.prototype.drawOther = function(x, y, orientation, size) {
  this.context.save();
  this.context.translate(x, y);
  this.context.rotate(orientation*Math.PI/180);
  this.context.translate(-x, -y);
  this.context.drawImage(this.enemyImage, x, y);
  this.context.restore();
};
