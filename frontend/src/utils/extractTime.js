export function extractTime(dateString) {
    const date = new Date(dateString);
    
    // Specify options for formatting time
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };

    // Format the time using the specified options
    const formattedTime = date.toLocaleTimeString(undefined, options);

    return formattedTime;
}


 // const hours = padZero(newDate.getHours());
    // const minutes = padZero(newDate.getMinutes());

// function padZero(number){
//     return number.toString().padStart(2, '0');
// }