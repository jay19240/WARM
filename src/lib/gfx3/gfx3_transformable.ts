import Quaternion from 'quaternion';
import { UT } from '../core/utils';

/**
 * The `Gfx3Transformable` class represents an object with position, rotation, and scale properties, and
 * provides methods for manipulating and retrieving these properties.
 */
class Gfx3Transformable {
  position: vec3;
  rotation: vec3;
  scale: vec3;
  quaternion: Quaternion;
  transformMatrix: mat4;

  /**
   * The constructor.
   */
  constructor() {
    this.position = [0.0, 0.0, 0.0];
    this.rotation = [0.0, 0.0, 0.0];
    this.scale = [1.0, 1.0, 1.0];
    this.quaternion = new Quaternion();
    this.transformMatrix = UT.MAT4_IDENTITY();
  }

  /**
   * The "getPosition" function returns the position.
   * @returns The position.
   */
  getPosition(): vec3 {
    return this.position;
  }

  /**
   * The "getPositionX" function returns the x-coordinate of the position.
   * @returns The X coordinate.
   */
  getPositionX(): number {
    return this.position[0];
  }

  /**
   * The "getPositionY" function returns the y-coordinate of the position.
   * @returns The Y coordinate.
   */
  getPositionY(): number {
    return this.position[1];
  }

  /**
   * The "getPositionZ" function returns the z-coordinate of the position.
   * @returns The Z coordinate.
   */
  getPositionZ(): number {
    return this.position[2];
  }

 /**
   * The "setPosition" function set the position with the given x, y and z coordinates.
   * @param {number} x - The X coordinate of the position.
   * @param {number} y - The Y coordinate of the position.
   * @param {number} z - The Z coordinate of the position.
   */
  setPosition(x: number, y: number, z: number): void {
    this.position[0] = x;
    this.position[1] = y;
    this.position[2] = z;
  }

  /**
   * The "translate" function translate the position.
   * @param {number} x - The amount of translation in the x-axis direction.
   * @param {number} y - The amount of translation in the y-axis direction.
   * @param {number} z - The amount of translation in the z-axis direction.
   */
  translate(x: number, y: number, z: number): void {
    this.position[0] += x;
    this.position[1] += y;
    this.position[2] += z;
  }

  /**
   * The "getRotation" function returns the rotation as Euler angles.
   * @returns The rotation Euler angles (radians).
   */
  getRotation(): vec3 {
    return this.rotation;
  }

  /**
   * The "getRotationX" function returns the rotation angle on x-axis.
   * @returns The rotation angle on x-axis.
   */
  getRotationX(): number {
    return this.rotation[0];
  }

  /**
   * The "getRotationY" function returns the rotation angle on y-axis.
   * @returns The rotation angle on y-axis.
   */
  getRotationY(): number {
    return this.rotation[1];
  }

  /**
   * The "getRotationZ" function returns the rotation angle on z-axis.
   * @returns The rotation angle on z-axis.
   */
  getRotationZ(): number {
    return this.rotation[2];
  }

  /**
   * The "setQuaternion" function sets the Quaternion.
   * @param {Quaternion} quaternion - The quaternion.
   */
  setQuaternion(quaternion: Quaternion) : void {
    this.quaternion = quaternion.clone();
  }

  /**
   * The "getQuaternion" function returns the Quaternion.
   * @returns A quaternion.
   */
  getQuaternion(): Quaternion {
    return this.quaternion;
  }

  /**
   * The "setRotation" function sets rotation Euler angles (in radians).
   * @param {number} x - The rotation angle on x-axis in radians.
   * @param {number} y - The rotation angle on y-axis in radians.
   * @param {number} z - The rotation angle on z-axis in radians.
   */
  setRotation(x: number, y: number, z: number): void {
    this.rotation[0] = x;
    this.rotation[1] = y;
    this.rotation[2] = z;
  }

  /**
   * The "rotate" function add rotation values to Euler angles.
   * @param {number} x - The rotation angle on x-axis in radians.
   * @param {number} y - The rotation angle on y-axis in radians.
   * @param {number} z - The rotation angle on z-axis in radians.
   */
  rotate(x: number, y: number, z: number): void {
    this.rotation[0] += x;
    this.rotation[1] += y;
    this.rotation[2] += z;
  }

  /**
   * The "getScale" function returns the scale as a 3D vector.
   * @returns The scale.
   */
  getScale(): vec3 {
    return this.scale;
  }

  /**
   * The "getScaleX" function returns the scale factor on x-axis.
   * @returns The x-axis scale factor.
   */
  getScaleX(): number {
    return this.scale[0];
  }

  /**
   * The "getScaleY" function returns the scale factor on y-axis.
   * @returns The y-axis scale factor.
   */
  getScaleY(): number {
    return this.scale[1];
  }

  /**
   * The "getScaleZ" function returns the scale factor on z-axis.
   * @returns The z-axis scale factor.
   */
  getScaleZ(): number {
    return this.scale[2];
  }

  /**
   * The "setScale" function sets the scale with the given x, y and z factors.
   * @param {number} x - The x factor in the x-axis direction.
   * @param {number} y - The y factor in the y-axis direction.
   * @param {number} z - The z factor in the z-axis direction.
   */
  setScale(x: number, y: number, z: number): void {
    this.scale[0] = x;
    this.scale[1] = y;
    this.scale[2] = z;
  }

  /**
   * The "zoom" function add scale values.
   * @param {number} x - The x factor in the x-axis direction.
   * @param {number} y - The y factor in the y-axis direction.
   * @param {number} z - The z factor in the z-axis direction.
   */
  zoom(x: number, y: number, z: number): void {
    this.scale[0] += x;
    this.scale[1] += y;
    this.scale[2] += z;
  }

  /**
   * The "getTransformMatrix" function returns the transform matrix from position, rotation and scale values.
   * @returns The transform matrix.
   */
  getTransformMatrix(): mat4 {
    UT.MAT4_TRANSFORM(this.position, this.rotation, this.scale, this.quaternion, this.transformMatrix);
    return this.transformMatrix;
  }

  /**
   * The "lookAt" function sets the transform matrix to the specified coordinates and look towards them.
   * @param {number} x - The x-coordinate of the target position that the transformable should look at.
   * @param {number} y - The y-coordinate of the target position that the transformable should look at.
   * @param {number} z - The z-coordinate of the target position that the transformable should look at.
   */
  lookAt(x: number, y: number, z:number, up: vec3 = [0, 1, 0]): void {
    UT.MAT4_LOOKAT(this.position, [x, y, z], up, this.transformMatrix);
    UT.MAT4_MULTIPLY(this.transformMatrix, UT.MAT4_SCALE(this.scale[0], this.scale[1], this.scale[2]), this.transformMatrix);
  }

  /**
   * The "getLocalAxies" function returns an array of three vectors representing the local axes of an
   * object based on its transformation matrix.
   * @returns The three axis vector.
   */
  getLocalAxies(): Array<vec3> {
    const matrix = this.getTransformMatrix();
    return [
      [matrix[0], matrix[1], matrix[2]],
      [matrix[4], matrix[5], matrix[6]],
      [matrix[8], matrix[9], matrix[10]]
    ];
  }
}

export { Gfx3Transformable };