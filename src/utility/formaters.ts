/**
 * Changing a format date and convert it to string after that
 * @param {date} date current date 
 * @returns {string} current date in format: dddd, mmmm dS, yyyy, hh:MM:ss TT
 */

function formatDate(date: Date): string {

    var d = new Date(date);

    const options : Intl.DateTimeFormatOptions = {  
        day: 'numeric',
        month: 'long', 
        year: 'numeric', 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

    return d.toLocaleString('en-US', options);
};

/**
 * Generating object's ID in format AA000000
 * @returns {string} object's ID
 */

function generateID() {
    var password = "";
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < 3; i++)
        if (i < 2)
            password += alphabet.charAt(Math.random() * alphabet.length);
        if (i > 1)
            password += Math.round(Math.random() * 100000000);

    return password.toString();
};

export { formatDate, generateID };