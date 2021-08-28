import Scale from "./Scale";

/**
 *
 *
 * @export
 * @class Texture
 */
export default class Texture {

  /**
   *
   *
   * @type {HTMLImageElement}
   * @memberof Texture
   */
  public image!: HTMLImageElement;
  
  /**
   * Creates an instance of Texture.
   * @param {string} path
   * @memberof Texture
   */
  constructor(
    public path: string = '',
  ) {
    
    this.image = document.createElement('img');
    this.image.src = this.path;
  }

  /**
   *
   *
   * @return {*}  {Scale}
   * @memberof Texture
   */
  public get dimensions(): Scale {

    const w: number = this.image.width;
    const h: number = this.image.height;

    return new Scale(w, h);
  }
}