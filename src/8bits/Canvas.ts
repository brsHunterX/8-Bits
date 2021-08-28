import Scale from './Scale';
import Vector from './Vector';
import Texture from './Texture';

/**
 *
 *
 * @export
 * @class Canvas
 */
export default class Canvas {

  /**
   *
   *
   * @static
   * @type {HTMLElement}
   * @memberof Canvas
   */
  public static target: HTMLElement;

  /**
   *
   *
   * @static
   * @type {HTMLCanvasElement}
   * @memberof Canvas
   */
  public static canvas: HTMLCanvasElement;

  /**
   *
   *
   * @static
   * @type {CanvasRenderingContext2D}
   * @memberof Canvas
   */
  public static context: CanvasRenderingContext2D;

  /**
   *
   *
   * @private
   * @static
   * @type {number}
   * @memberof Canvas
   */
  private static canvasWidth: number = 640;

  /**
   *
   *
   * @private
   * @static
   * @type {number}
   * @memberof Canvas
   */
  private static canvasHeight: number = 480;

  /**
   *
   *
   * @param {boolean} active
   * @memberof Canvas
   */
  public static antialiasing(active: boolean = true) {

    this.context.imageSmoothingEnabled = active;
  }

  /**
   *
   *
   * @static
   * @memberof Canvas
   */
  public static clean(): void {

    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

  /**
   *
   *
   * @static
   * @memberof Canvas
   */
  public static mount(): void {

    this.target = document.getElementById('game') as HTMLElement;
    this.canvas = document.createElement('canvas') as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;

    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
    this.canvas.style.borderWidth = '1px';
    this.canvas.style.borderStyle = 'solid';
    this.canvas.style.borderColor = '#000000';

    this.target.appendChild(this.canvas);
  }

  /**
   *
   *
   * @static
   * @param {Vector} position
   * @param {Scale} scale
   * @param {string} [color='#000000']
   * @memberof Canvas
   */
  public static drawRect(position: Vector = Vector.zero, scale: Scale = Scale.one, color: string = '#000000'): void {

    Canvas.context.fillStyle = color;
    Canvas.context.beginPath();
    Canvas.context.fillRect(position.x, position.y, scale.width, scale.height);
    Canvas.context.closePath();
  }

  /**
   *
   *
   * @static
   * @param {Texture} texture
   * @param {Vector} position
   * @param {Scale} scale
   * @memberof Canvas
   */
  public static drawImage(texture: Texture, position: Vector = Vector.zero, scale: Scale = Scale.one): void {

    console.log(texture);
    console.log(position);
    console.log(scale);

    Canvas.context.drawImage(
      texture.image,
      position.x, position.y, scale.width, scale.height,
      position.x, position.y, scale.width, scale.height,
    );
  }
}