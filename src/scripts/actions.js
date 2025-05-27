class Action {
    constructor(name, checkCondition, id, level) {
        this.name = name;
        this.checkCondition = checkCondition;
        this.id = id;
        this.level = level;
    }

    wasPerformed(...args) {
        return typeof this.checkCondition === 'function'
            ? this.checkCondition(...args)
            : false;
    }
}

const checkButton = (index) => ((gamepad, device) => {
    return gamepad.buttons[index - 1] && gamepad.buttons[index - 1].pressed;
});

let lastAxes = [];

const checkAxis = (index) => ((gamepad, device) => {
    const axes = device.getAxis(gamepad);

    if (lastAxes.length != axes.length) {
        lastAxes = axes;
    }

    const value = Math.abs(axes[index - 1] - lastAxes[index - 1]) > 1.4;
    if (value) {
        lastAxes = axes;
    }

    return value;
});

const checkPOV = (direction) => ((gamepad, device) => {
    const pov = device.getPOV(gamepad);
    return pov[direction] || false;
});

const actions = [
    new Action('Climb', checkButton(7), 'B7', 0),
    new Action('Auto Score', checkButton(1), 'B1', 0),
    new Action('Ground intake', checkButton(2), 'B2', 0),
    new Action('Grab Algae', checkButton(3), 'B3', 0),
    new Action('Manual Elevator Up', checkPOV('POV+Y'), 'POV+Y', 1),
    new Action('Manual Elevator Down', checkPOV('POV-Y'), 'POV-Y', 1),
    new Action('Manual Arm Up', checkPOV('POV+X'), 'POV+X', 1),
    new Action('Manual Arm Down', checkPOV('POV-X'), 'POV-X', 1),
    new Action('Ground Intake Relative', checkButton(10), 'B10', 1),
    new Action('Elevator Relative', checkButton(8), 'B8', 1),
    new Action('Climb Relative', checkButton(12), 'B12', 0),
    new Action('Pose Rotation Reset', checkButton(5), 'B5', 2),
    new Action('Reset To Limelight', checkButton(6), 'B6', 2),
    new Action('Kill Subsystems', checkButton(4), 'B4', 2),
    new Action('Speed Level', checkAxis(4), 'Axis4', 1)
];

export { Action, actions };