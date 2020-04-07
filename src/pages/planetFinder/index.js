/* Library Imports */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
/* Component Imports */
import PlanetSelection from '../../components/planetSelection';
import Timer from '../../components/timer';
/* Action Imports */
import { getPlanets } from '../../redux/actions/planetActions';
import { getVechicles } from '../../redux/actions/vehicleActions';

/* Style Imports */
import './style.css';
import FindFalconButton from '../../components/findFalcon';

class PlanetFinder extends React.Component {
  componentDidMount() {
    this.props.getPlanets();
    this.props.getVechicles();
  }

  render() {
    return (
      <div className="planetFinderContainer">
        <div className="planetHeaderContainer">
          Select Planets you want to search in:
        </div>
        <div className="planetSelectContainer">
          <PlanetSelection step={0} />
          <PlanetSelection step={1} />
          <PlanetSelection step={2} />
          <PlanetSelection step={3} />
          <Timer />
        </div>
        <FindFalconButton />
      </div>
    );
  }
}

// /**
//  *  Mapping the state to desired props for the component
//  */
// function mapStateToProps(state, ownProps) {
//     return {

//     };
// }

/**
 *  Mapping the props for the desired dispatch actions
 */
const mapDispatchToProps = {
  getPlanets,
  getVechicles,
};

export default withRouter(connect(null, mapDispatchToProps)(PlanetFinder));
