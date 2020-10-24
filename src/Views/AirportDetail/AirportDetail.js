import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import classes from './AirportDetail.module.css';

const Detail = (props) => {
    console.log(props)
    const { match } = props;
    const { id } = match.params;
    useEffect(()=>{
        props.getHandler(id);
        console.log(props.detail)
    },[]);

    const exit = () => {
        props.history.goBack();
    }

    return (
        <div className={classes.container}>
            <p>
                Airport Name:{props.detail.airportName}
            </p>
            <p>
                Country Name:{props.detail.country&&props.detail.country.countryName}
            </p>
            <p>
                City Name:{props.detail.city&&props.detail.city.cityName}
            </p>
            <p>
                TimeZone:{props.detail.city&&props.detail.city.timeZoneName}
            </p>
            <p>
                Location: Latitude:{props.detail.location&&props.detail.location.latitude}, Longitude:{props.detail.location&&props.detail.location.longitude}
            </p>   
            <button onClick={()=>exit()}>Back</button>         
        </div>
    );
}

const mapStateToProps = state => {
    console.log(state)
    return {
        detail: state.currentAirport
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getHandler: (id) => dispatch({type: actionTypes.GET, id: id})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));