import { eventManager } from '../core/event_manager';
import { gfx2Manager } from '../gfx2/gfx2_manager';
import { UT } from '../core/utils';
import { Gfx2Drawable } from '../gfx2/gfx2_drawable';
import { Gfx2BoundingRect } from '../gfx2/gfx2_bounding_rect';

interface JASFrame {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface JASAnimation {
  name: string;
  frames: Array<JASFrame>;
  frameDuration: number;
}

/**
 * A 2D sprite with animations.
 * It emit 'E_FINISHED'
 */
class Gfx2SpriteJAS extends Gfx2Drawable {
  flip: [boolean, boolean];
  animations: Array<JASAnimation>;
  texture: ImageBitmap | HTMLImageElement;
  currentAnimation: JASAnimation | null;
  currentAnimationFrameIndex: number;
  looped: boolean;
  frameProgress: number;
  boundingRects: Array<Gfx2BoundingRect>;

  constructor() {
    super();
    this.flip = [false, false];
    this.animations = [];
    this.texture = gfx2Manager.getDefaultTexture();
    this.currentAnimation = null;
    this.currentAnimationFrameIndex = 0;
    this.looped = false;    
    this.frameProgress = 0;
    this.boundingRects = [];
  }

  /**
   * The update function.
   * 
   * @param {number} ts - The timestep.
   */
  update(ts: number): void {
    if (!this.currentAnimation) {
      return;
    }

    if (this.frameProgress >= this.currentAnimation.frameDuration) {
      if (this.currentAnimationFrameIndex == this.currentAnimation.frames.length - 1) {
        eventManager.emit(this, 'E_FINISHED');
        this.currentAnimationFrameIndex = this.looped ? 0 : this.currentAnimation.frames.length - 1;
        this.frameProgress = 0;
      }
      else {
        this.currentAnimationFrameIndex = this.currentAnimationFrameIndex + 1;
        this.frameProgress = 0;
      }
    }
    else {
      this.frameProgress += ts;
    }
  }

  /**
   * The paint function.
   */
  paint(): void {
    if (!this.currentAnimation) {
      return;
    }

    const ctx = gfx2Manager.getContext();
    const currentFrame = this.currentAnimation.frames[this.currentAnimationFrameIndex];

    ctx.scale(this.flip[0] ? -1 : 1, this.flip[1] ? -1 : 1);
    ctx.drawImage(
      this.texture,
      currentFrame.x,
      currentFrame.y,
      currentFrame.width,
      currentFrame.height,
      this.flip[0] ? currentFrame.width * -1 : 0,
      this.flip[1] ? currentFrame.height * -1 : 0,
      currentFrame.width,
      currentFrame.height
    );
  }

  /**
   * Play a specific animation.
   * 
   * @param {string} animationName - The name of the animation to be played.
   * @param {boolean} [looped=false] - Determines whether the animation should loop or not.
   * @param {boolean} [preventSameAnimation=false] - Determines whether the same animation should be prevented from playing again.
   */
  play(animationName: string, looped: boolean = false, preventSameAnimation: boolean = false): void {
    if (preventSameAnimation && this.currentAnimation && animationName == this.currentAnimation.name) {
      return;
    }

    const animation = this.animations.find(animation => animation.name == animationName);
    if (!animation) {
      throw new Error('Gfx2SpriteJAS::play: animation not found.');
    }

    this.currentAnimation = animation;
    this.currentAnimationFrameIndex = 0;
    this.looped = looped;
    this.frameProgress = 0;
  }

  /**
   * Loads asynchronously sprite data from a json file (jas).
   * 
   * @param {string} path - The file path.
   */
  async loadFromFile(path: string): Promise<void> {
    const response = await fetch(path);
    const json = await response.json();

    this.offset[0] = json['OffsetX'] ?? 0;
    this.offset[1] = json['OffsetY'] ?? 0;

    this.flip[0] = json['FlipX'] ?? false;
    this.flip[1] = json['FlipY'] ?? false;

    this.animations = [];
    this.boundingRects = [];

    for (const obj of json['Animations']) {
      const animation: JASAnimation = {
        name: obj['Name'],
        frames: [],
        frameDuration: parseInt(obj['FrameDuration'])
      };

      for (const objFrame of obj['Frames']) {
        animation.frames.push({
          x: objFrame['X'],
          y: objFrame['Y'],
          width: objFrame['Width'],
          height: objFrame['Height']
        });
      }

      this.animations.push(animation);
      this.boundingRects.push(Gfx2BoundingRect.createFromCoord(
        json['X'],
        json['Y'],
        json['Width'],
        json['Height']
      ));
    }

    this.boundingRect = this.boundingRects[0];
    this.currentAnimation = null;
    this.currentAnimationFrameIndex = 0;
    this.frameProgress = 0;
  }

  /**
   * Returns two booleans, first is the x-axis flip flag, second is the y-axis flip flag.
   */
  getFlip(): [boolean, boolean] {
    return this.flip;
  }

  /**
   * Set flipX.
   * 
   * @param {boolean} x - The x-axis flip flag.
   */
  setFlipX(x: boolean): void {
    this.flip[0] = x;
  }

  /**
   * Set flipY.
   * 
   * @param {boolean} y - The y-axis flip flag.
   */
  setFlipY(y: boolean): void {
    this.flip[1] = y;
  }

  /**
   * Returns the list of animation descriptors.
   */
  getAnimations(): Array<JASAnimation> {
    return this.animations;
  }

  /**
   * Set the animation descriptors.
   * 
   * @param animations - The animations data.
   */
  setAnimations(animations: Array<JASAnimation>): void {
    this.animations = animations;
  }

  /**
   * Returns the current animation or null if there is no current animation.
   */
  getCurrentAnimation(): JASAnimation | null {
    return this.currentAnimation;
  }

  /**
   * Returns the current animation frame index.
   */
  getCurrentAnimationFrameIndex(): number {
    return this.currentAnimationFrameIndex;
  }

  /**
   * Returns the sprite texture.
   */
  getTexture(): ImageBitmap | HTMLImageElement {
    return this.texture;
  }

  /**
   * Set the sprite texture.
   * 
   * @param {ImageBitmap} texture - The sprite texture.
   */
  setTexture(texture: ImageBitmap): void {
    this.texture = texture;
  }

  /**
   * Returns the bounding rect.
   * 
   * @param {boolean} [dynamicMode=false] - Determines if bounding rect fit the current animation.
   */
  getBoundingRect(dynamicMode: boolean = false): Gfx2BoundingRect {
    return dynamicMode ? this.boundingRects[this.currentAnimationFrameIndex] : this.boundingRects[0];
  }

  /**
   * Returns the bounding rect in the world space coordinates.
   * 
   * @param {boolean} [dynamicMode=false] - Determines if bounding rect fit the current animation.
   */
  getWorldBoundingRect(dynamicMode: boolean = false): Gfx2BoundingRect {
    if (dynamicMode) {
      return this.boundingRects[this.currentAnimationFrameIndex].transform(UT.MAT3_TRANSLATE(this.position[0], this.position[1]));
    }
    else {
      return this.boundingRects[0].transform(UT.MAT3_TRANSLATE(this.position[0], this.position[1]));
    }
  }
}

export { Gfx2SpriteJAS };
