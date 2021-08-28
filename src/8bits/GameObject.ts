import { v4 as uuidv4 } from 'uuid';

import Engine from './Engine';
import Sprite from './Sprite';
import Transform from './Transform';
import SpriteSheet from './SpriteSheet';

/**
 *
 *
 * @export
 * @class GameObject
 */
export default class GameObject {

  /**
   * UUID da instancia
   *
   * @private
   * @type {string}
   * @memberof GameObject
   */
  private uuid: string = uuidv4();

  /**
   *
   *
   * @type {(null | Sprite)}
   * @memberof GameObject
   */
  public sprite: null | Sprite = null;

  /**
   *
   *
   * @type {(null | SpriteSheet)}
   * @memberof GameObject
   */
  public spriteSheet: null | SpriteSheet = null;

  /**
   * Creates an instance of GameObject.
   * @param {string} [tag='']
   * @param {Transform} [transform=new Transform()]
   * @memberof GameObject
   */
  constructor(
    public tag: string = '',
    public transform: Transform = new Transform(),
  ) { }

  /**
   * Cria uma nova instancia de GameObject
   *
   * @static
   * @param {GameObject} gameObject
   * @param {Transform} [transform]
   * @memberof GameObject
   */
  public static instantiate(gameObject: GameObject, transform?: Transform): void {

    if (transform) {
      gameObject.transform = transform;
    }

    Engine.gameObjects.push(gameObject);
  }

  /**
   * Destrói uma instancia de GameObject
   *
   * @static
   * @param {GameObject} gameObject
   * @param {number} [delay]
   * @memberof GameObject
   */
  public static destroy(gameObject: GameObject, delay: number = 0): void {

    setTimeout(() => Engine.gameObjects = Engine.gameObjects.filter((object: GameObject) => {
      return object.getUUID() !== gameObject.getUUID()
    }), delay);
  }

  /**
   * Retorna o UUID da instancia
   *
   * @return {*}  {string}
   * @memberof GameObject
   */
  public getUUID(): string {
    return this.uuid
  }

  /**
   *
   *
   * @memberof GameObject
   */
  public render(): void {

    if (this.sprite) {
      this.sprite.draw();
    }
  }

  /**
   *
   *
   * @memberof GameObject
   */
  public update(): void { }
}