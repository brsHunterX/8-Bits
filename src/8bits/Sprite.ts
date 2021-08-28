import Scale from './Scale';
import Vector from './Vector';
import Canvas from './Canvas';
import Texture from './Texture';

export default class Sprite {

  /**
   *
   *
   * @private
   * @type {Scale}
   * @memberof Sprite
   */
  private _scale: Scale = new Scale();

  /**
   *
   *
   * @type {number}
   * @memberof Sprite
   */
  public scale: number = 1;

  /**
   *
   *
   * @type {number}
   * @memberof Sprite
   */
  // public opacity: number = 1;

  /**
   *
   *
   * @type {Vector}
   * @memberof Sprite
   */
  public position: Vector = Vector.zero;

  /**
   * Creates an instance of Sprite.
   * @param {Texture} texture
   * @memberof Sprite
   */
  constructor(
    public texture: Texture,
  ) {
    this._getScale();
  }

  /**
   *
   *
   * @private
   * @memberof Sprite
   */
  private _getScale(): void {

    console.log(this.texture.dimensions);

    this._scale.width = this.scale * this.texture.dimensions.width;
    this._scale.height = this.scale * this.texture.dimensions.height;
  }

  /**
   *
   *
   * @memberof Sprite
   */
  public draw(): void {

    this.texture.image.onload = () => {
      Canvas.drawImage(
        this.texture,
        this.position,
        this._scale,
      );
    };
  }
}