function formatDate(date) {

    var d = new Date(date);

    const options = {  
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };

    return d.toLocaleString('en-US', options);
};

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

module.exports = {
    formatDate, generateID
}