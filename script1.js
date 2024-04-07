// Parent class
class Training {
    static allSessions = [];

    constructor(date, duration, fatigue) {
        this._date = date || new Date(); // If no date is provided, use the current date
        this._duration = duration;
        this._fatigue = fatigue;
        Training.allSessions.push(this);
    }

    getDate() {
        return this._date;
    }

    getDuration() {
        return this._duration;
    }

    getFatigue() {
        return this._fatigue;
    }

    static calculateAverageDuration() {
        if (!Training.allSessions || Training.allSessions.length === 0) return 0;

        const totalDuration = Training.allSessions.reduce((total, session) => total + session.getDuration(), 0);
        return totalDuration / Training.allSessions.length;
    }
}

// Subclasses
class Gym extends Training {
    static gymSessions = [];

    constructor(date, duration, fatigue, muscleGroups) {
        super(date, duration, fatigue);
        this._muscleGroups = muscleGroups;
        Gym.gymSessions.push(this);
    }

    getMuscleGroups() {
        return this._muscleGroups;
    }
}

class Swimming extends Training {
    static swimmingSessions = [];

    constructor(date, duration, fatigue, poolType) {
        super(date, duration, fatigue);
        this._poolType = poolType;
        Swimming.swimmingSessions.push(this);
    }

    getPoolType() {
        return this._poolType;
    }
}

class Running extends Training {
    static runningSessions = [];

    constructor(date, duration, fatigue, terrain) {
        super(date, duration, fatigue);
        this._terrain = terrain;
        Running.runningSessions.push(this);
    }

    getTerrain() {
        return this._terrain;
    }
}

class Cycling extends Training {
    static cyclingSessions = [];

    constructor(date, duration, fatigue, distance) {
        super(date, duration, fatigue);
        this._distance = distance;
        Cycling.cyclingSessions.push(this);
    }

    getDistance() {
        return this._distance;
    }
}

// Function to create instance names with day
function createInstanceNameWithDay(discipline, dayOfMonth, month) {
    // This is just a placeholder function, you can implement your own logic here
    return `${discipline}_${dayOfMonth}_${month}`;
}

// Function to generate form based on selected discipline
function generateForm(discipline) {
    const formContainer = document.getElementById('formContainer');
    const today = new Date().toISOString().split('T')[0];
    let formHTML = '';

    switch (discipline) {
        case 'gym':
            formHTML = `
                <form id="gymForm">
                    <h2>Gym Session</h2>
                    <label for="gymDate">Date:</label>
                    <input type="date" id="gymDate" value="${today}" required><br>
                    <label for="gymDuration">Duration (minutes):</label>
                    <input type="number" id="gymDuration" min="1" required><br>
                    <label for="gymFatigue">Fatigue Level:</label>
                    <select id="gymFatigue" required>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select><br>
                    <label for="gymMuscleGroups">Muscle Groups:</label>
                    <input type="text" id="gymMuscleGroups" required><br>
                    <button type="button" id="logGymSession">Log Gym Session</button>
                </form>
            `;
            break;
        case 'swimming':
            formHTML = `
                <form id="swimmingForm">
                    <h2>Swimming Session</h2>
                    <label for="swimmingDate">Date:</label>
                    <input type="date" id="swimmingDate" value="${today}" required><br>
                    <label for="swimmingDuration">Duration (minutes):</label>
                    <input type="number" id="swimmingDuration" min="1" required><br>
                    <label for="swimmingFatigue">Fatigue Level:</label>
                    <select id="swimmingFatigue" required>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select><br>
                    <label for="swimmingPoolType">Pool Type:</label>
                    <input type="text" id="swimmingPoolType" required><br>
                    <button type="button" id="logSwimmingSession">Log Swimming Session</button>
                </form>
            `;
            break;
        case 'running':
            formHTML = `
                <form id="runningForm">
                    <h2>Running Session</h2>
                    <label for="runningDate">Date:</label>
                    <input type="date" id="runningDate" value="${today}" required><br>
                    <label for="runningDuration">Duration (minutes):</label>
                    <input type="number" id="runningDuration" min="1" required><br>
                    <label for="runningFatigue">Fatigue Level:</label>
                    <select id="runningFatigue" required>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select><br>
                    <label for="runningTerrain">Terrain:</label>
                    <input type="text" id="runningTerrain" required><br>
                    <button type="button" id="logRunningSession">Log Running Session</button>
                </form>
            `;
            break;
        case 'cycling':
            formHTML = `
                <form id="cyclingForm">
                    <h2>Cycling Session</h2>
                    <label for="cyclingDate">Date:</label>
                    <input type="date" id="cyclingDate" value="${today}" required><br>
                    <label for="cyclingDuration">Duration (minutes):</label>
                    <input type="number" id="cyclingDuration" min="1" required><br>
                    <label for="cyclingFatigue">Fatigue Level:</label>
                    <select id="cyclingFatigue" required>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select><br>
                    <label for="cyclingDistance">Distance:</label>
                    <input type="text" id="cyclingDistance" required><br>
                    <button type="button" id="logCyclingSession">Log Cycling Session</button>
                </form>
            `;
            break;
        default:
            formHTML = ''; // Handle invalid selection
            break;
    }

    formContainer.innerHTML = formHTML;
}
document.getElementById('trainingType').addEventListener('change', function() {
    const selectedTraining = this.value;
    generateForm(selectedTraining);
    document.getElementById('formContainer').style.display = 'block'; // Show the form container
});


// Event listener for training type selection
document.getElementById('trainingType').addEventListener('change', function() {
    const selectedTraining = this.value;
    generateForm(selectedTraining);
});

// Event listeners for logging sessions
document.addEventListener('click', function(event) {
    const target = event.target;
    if (target.matches('#logGymSession')) {
        // Log Gym Session
        // You can fetch input values from the form here and then call logTrainingSession
        logTrainingSession('gym');
    } else if (target.matches('#logSwimmingSession')) {
        // Log Swimming Session
        // You can fetch input values from the form here and then call logTrainingSession
        logTrainingSession('swimming');
    } else if (target.matches('#logRunningSession')) {
        // Log Running Session
        // You can fetch input values from the form here and then call logTrainingSession
        logTrainingSession('running');
    } else if (target.matches('#logCyclingSession')) {
        // Log Cycling Session
        // You can fetch input values from the form here and then call logTrainingSession
        logTrainingSession('cycling');
    }
});

// Function to log training session based on discipline
function logTrainingSession(discipline) {
    // Logic to fetch input values from the form
    // You can implement this based on the structure of the form generated for each discipline
    const form = document.getElementById(`${discipline}Form`);
    const date = form.querySelector(`#${discipline}Date`).value;
    const duration = form.querySelector(`#${discipline}Duration`).value;
    const fatigue = form.querySelector(`#${discipline}Fatigue`).value;
    let additionalParams = {};

    switch (discipline) {
        case 'gym':
            additionalParams.muscleGroups = form.querySelector(`#${discipline}MuscleGroups`).value;
            break;
        case 'swimming':
            additionalParams.poolType = form.querySelector(`#${discipline}PoolType`).value;
            break;
        case 'running':
            additionalParams.terrain = form.querySelector(`#${discipline}Terrain`).value;
            break;
        case 'cycling':
            additionalParams.distance = form.querySelector(`#${discipline}Distance`).value;
            break;
        default:
            break;
    }

    // Call respective log function based on whether it's for today or specified date
    logTrainingSessionWithDate(discipline, date, duration, fatigue, additionalParams);
}

// Automatic logging of training sessions based on the current date
function logTrainingSessionWithDate(discipline, dateStr, duration, fatigue, additionalParams) {
    // Validate fatigue level
    if (fatigue < 1 || fatigue > 5) {
        console.log("Fatigue level must be between 1 and 5.");
        return;
    }

    const [year, month, day] = dateStr.split('-'); // Extract year, month, and day from the date string
    const instanceName = createInstanceNameWithDay(discipline, parseInt(day), parseInt(month));
    const date = new Date(year, parseInt(month) - 1, parseInt(day)); // Create Date object from year, month, and day

    switch (discipline) {
        case "gym":
            const gymSession = new Gym(date, duration, fatigue, additionalParams.muscleGroups);
            console.log(`Logged Gym session with name: ${instanceName}`);
            break;
        case "swimming":
            const swimmingSession = new Swimming(date, duration, fatigue, additionalParams.poolType);
            console.log(`Logged Swimming session with name: ${instanceName}`);
            break;
        case "running":
            const runningSession = new Running(date, duration, fatigue, additionalParams.terrain);
            console.log(`Logged Running session with name: ${instanceName}`);
            break;
        case "cycling":
            const cyclingSession = new Cycling(date, duration, fatigue, additionalParams.distance);
            console.log(`Logged Cycling session with name: ${instanceName}`);
            break;
        default:
            console.log("Invalid discipline type");
    }
}
