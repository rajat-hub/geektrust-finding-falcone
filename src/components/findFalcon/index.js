/* Library Imports */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
/* Action Imports */
import { getResult } from '../../redux/actions/gameActions';
/* Style Imports */
import './style.css';

const FindFalconButton = (props) => {
    if(props.ajaxStatus.state === 'inprogress'){
        return <div className="loader"></div>
    }else{
        return <button disabled={props.vehicleSelectionCount < 4} onClick={() => {props.getResult(props.history)}}>Find Falcon</button>
    }
}

/** 
 *  Mapping the state to desired props for the component
 */
function mapStateToProps(state, ownProps) {
    return {
        ajaxStatus: state.ajaxStatus,
        vehicleSelectionCount: state.vehicleDetails.vehicleSelectionList.length
    };
}

export default withRouter(connect(mapStateToProps, {getResult})(FindFalconButton));