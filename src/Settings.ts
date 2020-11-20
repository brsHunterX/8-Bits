import GameSettings from './core/GameSettings';

export default class Settings extends GameSettings {

/**
   *
   *
   * @type {string}
   * @memberof GameSettings
   */
  public gameTarget: string = 'game';

  /**
   *
   *
   * @type {string}
   * @memberof GameSettings
   */
  public gameName: string = 'Asteroids';

  /**
   *
   *
   * @type {string}
   * @memberof GameSettings
   */
  public gameEnvrioment: string = 'development';

  /**
   *
   *
   * @type {boolean}
   * @memberof GameSettings
   */
  public gameDebug: boolean = (this.gameEnvrioment === 'production') ? false : true;

  /**
   *
   *
   * @type {boolean}
   * @memberof GameSettings
   */
  // public gameDebugFPS: boolean = false;
  public gameDebugFPS: boolean = (this.gameEnvrioment === 'production') ? false : true;

  /**
   *
   *
   * @type {number}
   * @memberof GameSettings
   */
  public gameCanvasWidth: number = 640;

  /**
   *
   *
   * @type {number}
   * @memberof GameSettings
   */
  public gameCanvasHeight: number = 480;

  /**
   *
   *
   * @type {boolean}
   * @memberof GameSettings
   */
  public gameCanvasMarkEdges: boolean = true;
}