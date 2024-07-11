import { dnaManager } from '@lib/dna/dna_manager';
import { inputManager } from '@lib/input/input_manager';
import { DNASystem } from '@lib/dna/dna_system';
import { DNAComponent } from '@lib/dna/dna_component';
// ---------------------------------------------------------------------------------------
import { RunComponent } from './run';
import { JumpComponent } from './jump';
import { MoveComponent } from './move';
import { DrawableComponent } from './drawable';
// ---------------------------------------------------------------------------------------

export class IdleControlsComponent extends DNAComponent {
  constructor() {
    super('IdleControls');
  }
}

export class IdleComponent extends DNAComponent {
  constructor() {
    super('Idle');
  }
}

export class IdleControlsSystem extends DNASystem {
  constructor() {
    super();
    super.addRequiredComponentTypename('IdleControls');
    super.addRequiredComponentTypename('Idle');
  }

  onEntityUpdate(ts, eid) {
    if (inputManager.isActiveAction('LEFT') || inputManager.isActiveAction('RIGHT')) {
      dnaManager.removeComponent(eid, IdleComponent);
      dnaManager.addComponent(eid, new RunComponent());
    }
  }

  onActionOnce(actionId, eid) {
    if (actionId == 'UP') {
      dnaManager.removeComponent(eid, IdleComponent);
      dnaManager.addComponent(eid, new JumpComponent());
    }
  }
}

export class IdleSystem extends DNASystem {
  constructor() {
    super();
    super.addRequiredComponentTypename('Idle');
  }

  onEntityUpdate(ts, eid) {
    const move = dnaManager.getComponent(eid, MoveComponent);
    const drawable = dnaManager.getComponent(eid, DrawableComponent);
    move.velocityX = 0;
    drawable.jas.play('IDLE', true, true);
  }
}