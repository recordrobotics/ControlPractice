class Action {
    constructor(name, checkCondition, id) {
        this.name = name;
        this.checkCondition = checkCondition;
        this.id = id;
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
    new Action('Climb', check, 'B7'),
    new Action('Auto Score', check, 'B1'),
    new Action('Ground intake', check, 'B2'),
    new Action('Grab Algae', check, 'B3'),
    new Action('Manual Elevator Up', check, 'POV+Y'),
    new Action('Manual Elevator Down', check, 'POV-Y'),
    new Action('Manual Arm Up', check, 'POV+X'),
    new Action('Manual Arm Down', check, 'POV-X'),
    new Action('Ground Intake Relative', check, 'B10'),
    new Action('Elevator Relative', check, 'B8'),
    new Action('Climb Relative', check, 'B12'),
    new Action('Pose Rotation Reset', check, 'B5'),
    new Action('Reset To Limelight', check, 'B6'),
    new Action('Kill Subsystems', check, 'B4'),
    new Action('Speed Level', check, 'Axis4')
];

export { Action, actions };