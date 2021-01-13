import React from 'react';
import {differenceInSeconds, isFuture, isPast} from 'date-fns';
import secondsToDHMS from '../selectors/secondsToDHMS';
import useCounter from '../hooks/useCounter';

const ACTIONS = {
    ADDEVENT: 'ADDEVENT',
    DELETEEVENT: 'DELETEEVENT'
}

export default ({date, eventName, id, dispatch}) => {

    const [note, setNote] = React.useState('this is some note');

    const {days, hours, minutes, seconds, isRunning, finished, startCounter, stopCounter} = useCounter(date);

    const handleDeleteEvent = () => {
        dispatch({type: ACTIONS.DELETEEVENT, payload:{id}})
    }
    
    React.useEffect(() => {
        finished && alert(eventName + ' is finished');
    }, [finished])

    return (
        <div>
            <div>days: {days}</div>
            <div>hours: {hours}</div>
            <div>minutes: {minutes}</div>
            <div>seconds: {seconds}</div>
            {/* {isRunning ? (
                <button onClick={stopCounter}>Stop Countdown</button>
            ) : (
                 <button onClick={startCounter}>Start Countdown</button>
                )} */}
            <button onClick={handleDeleteEvent}>Delete Event</button>
            <p>{eventName}</p>

        </div>
    )
}

