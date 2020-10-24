import React, { useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import classes from './Airport.module.css';

const Airport = (props) => {
    console.log(props);
    useEffect(()=>{
        axios.get('https://api.qantas.com/flight/refData/airport').then(response => {
            console.log(response)
            props.onLoad(response.data);
        }).catch(error => {
            console.log(error);
        });
        
    },[])

    return (
        <div>
            {props.airport && props.airport.map((el, index) => (
                <Link to={'/detail/'+ index} key={el.airportCode}>
                    <div className={classes.container} >
                        <p>
                        Airport Name: {el.airportName}
                        </p>
                        <p>
                        Country: {el.country.countryName}
                        </p>
                        
                    </div>
                </Link>
            ))}
        </div>
    ); 
}

const mapStateToProps = state => {
    return {
        airport: state.airport
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLoad: (data) => dispatch({type: actionTypes.LOAD, data: data})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Airport));