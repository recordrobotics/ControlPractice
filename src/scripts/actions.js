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

const check = (e) => {
    return true;
};
const actions = [
    new Action('Climb', check, 'B7', 0),
    new Action('Auto Score', check, 'B1', 0),
    new Action('Ground intake', check, 'B2', 0),
    new Action('Grab Algae', check, 'B3', 0),
    new Action('Manual Elevator Up', check, 'POV+Y', 1),
    new Action('Manual Elevator Down', check, 'POV-Y', 1),
    new Action('Manual Arm Up', check, 'POV+X', 1),
    new Action('Manual Arm Down', check, 'POV-X', 1),
    new Action('Ground Intake Relative', check, 'B10', 1),
    new Action('Elevator Relative', check, 'B8', 1),
    new Action('Climb Relative', check, 'B12', 0),
    new Action('Pose Rotation Reset', check, 'B5', 2),
    new Action('Reset To Limelight', check, 'B6', 2),
    new Action('Kill Subsystems', check, 'B4', 2),
    new Action('Speed Level', check, 'Axis4', 1)
];

export { Action, actions };