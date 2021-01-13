const secondsToDHMS = (totalSeconds) => {
    totalSeconds = parseInt(totalSeconds, 10);
    let seconds = totalSeconds;
    let days = Math.floor(seconds/(60*60*24));
    seconds = seconds - days*60*60*24;
    let hours = Math.floor(seconds / 3600);
    seconds = seconds - hours*3600;
    let minutes = Math.floor(seconds/60);
    seconds = seconds - minutes*60;

    return {
        days, hours, minutes, seconds
    }
}


export default secondsToDHMS;
