import {differenceInSeconds, isFuture, isPast} from 'date-fns';
import secondsToDHMS from '../selectors/secondsToDHMS';
import React from 'react';

export default ({date}) => {

    const [counter, setCounter] = React.useState({
        days: 0, hours: 0 , minutes: 0, seconds: 0
    });
    const [note, setNote] = React.useState('');
    const [isRunning, setIsRunning] = React.useState(false);
    const [intervalId, setIntervalId] = React.useState();


    const handleStartButton = () => {
        if(isFuture(date)) {
            setIsRunning(true);
            let id = setInterval(() => {
                setNote('');
                let totalSeconds = differenceInSeconds(date, Date.now());
                console.log(id);

            if(totalSeconds === 0){
                clearInterval(id);
                setNote('Your gotta do something!');
                setIsRunning(false);
            }

            const {days, hours, minutes, seconds} = secondsToDHMS(totalSeconds); 
            setCounter({
                days, hours, minutes, seconds
            })

        }, 1000)    
        setIntervalId(id);
        }
    }


    const handleStopButton = () => {
        clearInterval(intervalId);
        setCounter({
            days: 0, hours: 0, minutes: 0, seconds: 0
        })
        setIsRunning(false);
    }

    return (
        <div>
            <div>days: {counter.days}</div>
            <div>hours: {counter.hours}</div>
            <div>minutes: {counter.minutes}</div>
            <div>seconds: {counter.seconds}</div>
            <button disabled={isRunning} onClick={handleStartButton}>Start Countdown</button>
            <button disabled={!isRunning} onClick={handleStopButton}>Stop Countdown</button>
            <p>{note}</p>
        </div>
    )
}

