import React from 'react';
import DatePicker from './DatePickerForm';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';





const App = () => {

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div>
                <h1 className="header">Countdown App ⏳</h1>
                <div className="container">
                    <DatePicker />
                </div>
            </div>
        </MuiPickersUtilsProvider>
    )
}

export default App;




