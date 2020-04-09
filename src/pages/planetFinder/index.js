/* Library Imports */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Grid, Col, PageHeader } from 'react-bootstrap/lib';
/* Component Imports */
import PlanetSelection from '../../components/planetSelection';
import Sidebar from '../../components/sideBar';
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
    let { props } = this;
    console.log(props.planets);
    console.log(props.vehicles);
    return (
      <Col xs={12}>
        <Col xs={12}>
          <Col className="sidebar" md={3} lg={3}>
            <Sidebar
              assets={{ planets: props.planets, vehicles: props.vehicles }}
            />
          </Col>
          <Col md={9} lg={9}>
            <Row>
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
            </Row>
          </Col>
        </Col>
      </Col>
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
function mapStateToProps(state, ownProps) {
  return {
    planets: state.planetDetails.planetList,
    vehicles: state.vehicleDetails.vehicleList,
  };
}
/**
 *  Mapping the props for the desired dispatch actions
 */
const mapDispatchToProps = {
  getPlanets,
  getVechicles,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PlanetFinder)
);
