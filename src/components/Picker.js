import React, {useState} from 'react'
import add from 'date-fns/add';
import {
    DateTimePicker,
} from '@material-ui/pickers';
import { isFuture } from 'date-fns';

const Picker = ({date, setDate, setError}) => {

    const handleDateChange = (date) => {
        if(!isFuture(date)){
            setError('Past time is not allowed');
        }
        setError('');
        return isFuture(date) && setDate(date)
    }


    return (
        <div>
            <DateTimePicker
                disablePast
                value={date}
                onChange={handleDateChange}
                variant="inline"
                helperText="Select your event time and date"
                className='datepicker-component'
                format="do LLLL, yyyy h:mm aaaa"
            />
            
        </div>
    )
}

export default Picker
