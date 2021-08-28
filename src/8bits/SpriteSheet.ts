import Sprite from "./Sprite";
import Texture from "./Texture";

export default class SpriteSheet {

  /**
   *
   *
   * @private
   * @type {number}
   * @memberof SpriteSheet
   */
  private currentFrame: number = 0;

  /**
   *
   *
   * @private
   * @type {Sprite[]}
   * @memberof SpriteSheet
   */
  private sprites: Sprite[] = [];

  /**
   * Creates an instance of SpriteSheet.
   * @param {Texture} texture
   * @param {number} frameWidth
   * @param {number} frameHeight
   * @param {number} [rows=0]
   * @param {number} [columns=0]
   * @param {number} [maxFrames=0]
   * @memberof SpriteSheet
   */
  constructor(
    public texture: Texture,
    public frameWidth: number,
    public frameHeight: number,
    public rows: number = 0,
    public columns: number = 0,
    public maxFrames: number = 0,
  ) {
    this.getRows();
    this.getColunms();
    this.getMaxFrames();
  }

  /**
   *
   *
   * @private
   * @memberof SpriteSheet
   */
  private getRows(): void {
    if (!this.rows || this.rows <= 0) {
      this.rows = this.texture.dimensions.height / this.frameHeight;
    }
  }

  /**
   *
   *
   * @private
   * @memberof SpriteSheet
   */
  private getColunms(): void {
    if (!this.columns || this.columns <= 0) {
      this.columns = this.texture.dimensions.width / this.frameWidth;
    }
  }

  /**
   *
   *
   * @private
   * @memberof SpriteSheet
   */
  private getMaxFrames(): void {
    if (!this.maxFrames && this.maxFrames <= 0 && this.columns && this.rows) {
      this.maxFrames = this.columns * this.rows;
      // this.maxFrames = this.columns * this.rows - 1;
    }
  }

  /**
   *
   *
   * @private
   * @memberof SpriteSheet
   */
  private slice(): void {
    
  }

  // public getByIndex(index: number): Sprite {
  //   return this.sprites[index];
  // }

  /**
   * Creates an instance of SpriteSheet.
   * @param {string} path
   * @param {number} width
   * @param {number} height
   * @param {number} [rows=0]
   * @param {number} [columns=0]
   * @memberof SpriteSheet
   */
  // constructor(
  //   path: string,
  //   frameWidth: number,
  //   frameHeight: number,
  //   rows: number = 0,
  //   columns: number = 0
  // ) {
  //   this.path = path;
  //   this.frameWidth = frameWidth;
  //   this.frameHeight = frameHeight;
  //   this.image.src = path;

  //   if (!rows) {
  //     this.rows = this.image.height / this.frameHeight;
  //   } else {
  //     this.rows = rows;
  //   }

  //   if (!columns) {
  //     this.columns = this.image.width / this.frameWidth;
  //   } else {
  //     this.columns = columns;
  //   }

  //   this.maxFrames = this.columns * this.rows - 1;
  // }

  /**
   *
   *
   * @param {CanvasRenderingContext2D} context
   * @param {number} row
   * @param {number} column
   * @memberof SpriteSheet
   */
  // public drawFrame(context: CanvasRenderingContext2D, index: number, x: number = 0, y: number = 0): void {

  //   const column: number = index % this.columns; // Obtem a coluna fo frame com base no indice passado
  //   const row: number = Math.floor(index / this.columns); // Obtem a linha do frame com base no indice passado

  //   context.drawImage(
  //     this.image,
  //     column * this.frameWidth, row * this.frameHeight, this.frameWidth, this.frameHeight, // Dimensões da Spritesheet
  //     x, y, this.frameWidth, this.frameHeight // Dimensões do Canvas
  //   );
  // }


  /**
   *
   *
   * @param {CanvasRenderingContext2D} context
   * @param {number} [x=0]
   * @param {number} [y=0]
   * @memberof SpriteSheet
   */
  // public animate(context: CanvasRenderingContext2D, x: number = 0, y: number = 0): void {

  //   this.currentFrame++;

  //   if (this.currentFrame > this.maxFrames) {
  //     this.currentFrame = 0;
  //   }

  //   this.drawFrame(context, this.currentFrame, x, y);
  // }
}