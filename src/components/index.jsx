import React from 'react'
import withCalculate from '../utilities/withCalculate';

function Button(props) {
    console.log(props);    
    return (
        <>
        <div>
            <h2>x + {props.counter}</h2>
            <p>hasil: {props.nomor}</p>
            <button onClick={props.handleNomor}>klik untuk bertambah</button>
        </div>
        </>
    )
}
export default withCalculate(Button)