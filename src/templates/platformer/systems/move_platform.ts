import { dnaManager } from '@lib/dna/dna_manager';
import { DNASystem } from '@lib/dna/dna_system';
// ---------------------------------------------------------------------------------------
import { Platform } from '../components/platform';
import { Position } from '../components/position';
import { Velocity } from '../components/velocity';
// ---------------------------------------------------------------------------------------

export class MovePlatformSystem extends DNASystem {
  constructor() {
    super();
    this.addRequiredComponentTypename('Platform');
    this.addRequiredComponentTypename('Position');
    this.addRequiredComponentTypename('Velocity');
  }

  onEntityUpdate(ts: number, eid: number) {
    const position = dnaManager.getComponent(eid, Position);
    const platform = dnaManager.getComponent(eid, Platform);
    const velocity = dnaManager.getComponent(eid, Velocity);

    const dest = platform.direction ? platform.from : platform.to;
    const deltaX = dest[0] - position.x;
    const deltaY = dest[1] - position.y;
    const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (dist <= 0.2) {
      platform.direction = !platform.direction;
    }
    else {
      position.x += velocity.x = Math.sign(deltaX) * 0.01 * ts;
      position.y += velocity.y = Math.sign(deltaY) * 0.01 * ts;
    }
  }
}