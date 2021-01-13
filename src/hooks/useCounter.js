import React from 'react';
import {isFuture, differenceInSeconds} from 'date-fns';
import secondsToDHMS from '../selectors/secondsToDHMS';

const initialState = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isRunning: false
}

const reducer = (state, action) => {
    return action;
}



const useCounter = (date) => {
    
    const [state, setState] = React.useReducer(reducer,initialState);
    const [intervalId, setIntervalId] = React.useState();


    // const startCounter = () => {
    //     if(isFuture(date)) {
    //         let id = setInterval(() => {
    //             let totalSeconds = differenceInSeconds(date, Date.now());

    //             if (totalSeconds <= 0) {
    //                 setState({
    //                     days: 0, hours: 0, minutes: 0, seconds: 0, isRunning: false, finished: true
    //                 })
    //                 clearInterval(id);
    //             } else {
    //                 const { days, hours, minutes, seconds } = secondsToDHMS(totalSeconds);
    //                 setState({
    //                     days, hours, minutes, seconds, isRunning: true
    //                 })
    //             }
    //     }, 1000)    
    //     setIntervalId(id);
    //     }
    // }

    React.useEffect(() => {
        if(isFuture(date)) {
            let id = setInterval(() => {
                let totalSeconds = differenceInSeconds(date, Date.now());

                if (totalSeconds <= 0) {
                    setState({
                        days: 0, hours: 0, minutes: 0, seconds: 0, isRunning: false, finished: true
                    })
                    clearInterval(id);
                } else {
                    const { days, hours, minutes, seconds } = secondsToDHMS(totalSeconds);
                    setState({
                        days, hours, minutes, seconds, isRunning: true
                    })
                }
        }, 1000)    
        setIntervalId(id);
        }
    },[date]);


    // const stopCounter = () => {
    //     clearInterval(intervalId);
    //     setState({
    //         days: 0, hours: 0, minutes: 0, seconds: 0, isRunning: false
    //     })
    // }

    React.useEffect(() => {
        return () => {
            clearInterval(intervalId)
            console.log('listerner removed');
        };
    }, [])

    return {
        ...state,
        // startCounter,
        // stopCounter
    }
}

export default useCounter