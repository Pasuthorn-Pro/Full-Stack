function createLog(message) {
    const now = new Date();
    const timestamp = now.toLocaleTimeString('th-TH');

    const eventID = Math.random().toString(16).substring(2, 10).toUpperCase();

    const logMessage = message.toUpperCase();

    return `[${timestamp}] [ID: ${eventID}] ${logMessage}`;
}

const log = createLog("User login successful");
console.log(log);