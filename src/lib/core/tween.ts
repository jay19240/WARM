import { UT } from './utils';

/**
 * Generic values interpolator.
 * @typeParam T - The interpolate value type.
 */
class TweenAbstract<T> {
  times: Array<number>;
  values: Array<T>;
  fns: Array<Function>;
  defaultFn: Function;
  // --
  timeElapsed: number;
  looped: boolean;
  currentValue: T;

  /**
   * @param {Array<number>} times - Times intervals.
   * @param {Array<T>} values - Values that will be associated with each time values.
   * @param {Function} defaultFn - The interpolate function that will be used as a fallback if none of the functions in the `fns` array match the given time.
   * @param {Array<Function>} fns - Interpolate functions that will be associated with each time values.
   */
  constructor(times: Array<number>, values: Array<T>, defaultFn: Function, fns: Array<Function> = []) {
    this.times = times;
    this.values = values;
    this.fns = fns;
    this.defaultFn = defaultFn;
    // --
    this.timeElapsed = 0;
    this.looped = false;
    this.currentValue = this.values[0];
  }

  /**
   * The update function.
   * 
   * @param {number} ts - The timestep.
   */
  update(ts: number): void {
    if (this.times.length == 0) {
      return;
    }

    if (this.looped && this.timeElapsed > this.times[this.times.length - 1]) {
      console.log('gniark');
      this.timeElapsed = 0;
    }

    this.currentValue = this.interpolate(this.timeElapsed);
    this.timeElapsed += ts / 1000;
  }

  /**
   * Returns the interpolated value based on the given times and values.
   * 
   * @param {number} t - The elapsed time.
   */
  interpolate(t: number): T {
    let i = 0;
    let n = this.times.length;

    while (i < n && t > this.times[i]) i++;
    if (i == 0) return this.values[0];
    if (i == n) return this.values[n - 1];

    const beginValue = this.values[i - 1];
    const endValue = this.values[i];
    const currentT = t - this.times[i - 1];
    const currentDuration = this.times[i] - this.times[i - 1];

    if (this.fns[i]) {
      return this.fns[i](currentT, beginValue, endValue, currentDuration);
    }

    return this.defaultFn(currentT, beginValue, endValue, currentDuration);
  }

  /**
   * Set the animation in loop.
   * 
   * @param {boolean} looped - The loop flag.
   */
  setLooped(looped: boolean): void {
    this.looped = looped;
  }

  /**
   * Returns the current interpolated value.
   */
  getCurrentValue(): T {
    return this.currentValue;
  }

  /**
   * Checks if the times and values variables are empty.
   */
  isEmpty(): boolean {
    return this.times.length == 0 || this.values.length == 0;
  }
}

/**
 * Interpolate number values.
 */
class TweenNumber extends TweenAbstract<number> {
  /**
   * @param {Array<number>} times - Times intervals.
   * @param {Array<number>} values - Values that will be associated with each time values.
   * @param {Function} defaultFn - The interpolate function that will be used as a fallback if none of the functions in the `fns` array match the given time.
   * @param {Array<Function>} fns - Interpolate functions that will be associated with each time values.
   */
  constructor(times: Array<number> = [], values: Array<number> = [], fns: Array<Function> = []) {
    super(times, values, UT.LINEAR, fns);
  }
}

/**
 * Interpolate vec2 values.
 */
class TweenVEC2 extends TweenAbstract<vec2> {
  /**
   * @param {Array<number>} times - Times intervals.
   * @param {Array<vec2>} values - Values that will be associated with each time values.
   * @param {Function} defaultFn - The interpolate function that will be used as a fallback if none of the functions in the `fns` array match the given time.
   * @param {Array<Function>} fns - Interpolate functions that will be associated with each time values.
   */
  constructor(times: Array<number> = [], values: Array<vec2> = [], fns: Array<Function> = []) {
    super(times, values, UT.LINEAR_VEC2, fns);
  }
}

/**
 * Interpolate vec3 values.
 */
class TweenVEC3 extends TweenAbstract<vec3> {
  /**
   * @param {Array<number>} times - Times intervals.
   * @param {Array<vec3>} values - Values that will be associated with each time values.
   * @param {Function} defaultFn - The interpolate function that will be used as a fallback if none of the functions in the `fns` array match the given time.
   * @param {Array<Function>} fns - Interpolate functions that will be associated with each time values.
   */
  constructor(times: Array<number> = [], values: Array<vec3> = [], fns: Array<Function> = []) {
    super(times, values, UT.LINEAR_VEC3, fns);
  }
}

export { TweenNumber, TweenVEC2, TweenVEC3 };
