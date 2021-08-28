import Apple from './Apple';
import Engine from './8bits/Engine';
import Texture from './8bits/Texture';
import SpriteSheet from './8bits/SpriteSheet';
import GameObject from './8bits/GameObject';
import Canvas from './8bits/Canvas';
import Scale from './8bits/Scale';
import Vector from './8bits/Vector';
import Sprite from './8bits/Sprite';

window.onload = () => {
  
  const engine: Engine = new Engine();

  const sprite: Sprite = new Sprite(new Texture('../assets/images/sapple.png'));
  const spriteSheet: SpriteSheet = new SpriteSheet(new Texture('../assets/images/apple.png'), 32, 32);

  // sprite.draw();
};