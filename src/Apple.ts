import Canvas from './8bits/Canvas';
import GameObject from './8bits/GameObject';
import Sprite from './8bits/Sprite';
import SpriteSheet from './8bits/SpriteSheet';
import Texture from './8bits/Texture';
import Time from './8bits/Time';

export default class Apple extends GameObject {
  
  constructor() {
    super();

    this.sprite = new Sprite(new Texture('../assets/images/sapple.png'));
    // this.spriteSheet = new SpriteSheet('../assets/images/apple.png', 32, 32);
  }

  public render(): void {
    super.render();
  }

  public update(): void {
    super.update();
  }
}