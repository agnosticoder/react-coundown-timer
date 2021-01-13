import React from 'react';
import add from 'date-fns/add';
import {
    DateTimePicker,
} from '@material-ui/pickers';
import Counter from './Counter';
import { isFuture, parse, startOfDay } from 'date-fns';
import Counter_v2 from './Counter_v2';
import Picker from './Picker';
import {v4 as uuid} from 'uuid';

const initialState =  [];

const ACTIONS = {
    ADDEVENT: 'ADDEVENT',
    DELETEEVENT: 'DELETEEVENT'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADDEVENT:
            return [
                ...state, {
                date: action.payload.date, 
                eventName: action.payload.eventName, 
                id: action.payload.id
            }
        ]
            
        case ACTIONS.DELETEEVENT:
            return state.filter(event => event.id !== action.payload.id)

        default:
            return state;
    }
}



const DatePicker = () => {
    

    const [date, setDate] = React.useState(startOfDay(add(new Date(),{days:1})));

    const [eventsState, dispatch] = React.useReducer(reducer, initialState);

    const [eventName, setEventName] = React.useState('');

    const [error, setError] = React.useState('');

    const handleOnStart = (e) => {
        e.preventDefault();

        if(eventName === ''){
            setError('Please provide the Event Name')
        } else {
            setError('');
            dispatch({ type: ACTIONS.ADDEVENT, payload: { date, eventName, id: uuid() } });
            setEventName("");
            setDate(startOfDay(add(new Date(), { days: 1 })));
        }

    }

    //Setup Local Storage
    // React.useEffect(() => {
    //     localStorage.setItem('event', JSON.stringify(eventsState));
    // }, [eventsState]);


    return (
        <>
        <form onSubmit={handleOnStart}>
            <div className="input-event-container">
                <div className='datepicker-wrapper flex-item-1'>
                    <Picker setError={setError} date={date} setDate={setDate}/>
                </div>
                <div className="flex-item-2">
                    <input type="text" value={eventName} onChange={e => setEventName(e.target.value)}/>
                </div>
                <button>Start</button>
            </div>
            {error && <p>{error}</p>}
        </form>
            {/* <Counter date={date} /> */}
            {eventsState.map((event, index) => {
               return <Counter_v2 key={index} date={event.date} eventName={event.eventName} id={event.id} dispatch={dispatch}/>
            })}
        </>
    )
}

export default DatePicker;