export default function formatDate(date) {

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
}