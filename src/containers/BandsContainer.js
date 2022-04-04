import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {

  addBand = (band) => {
    this.props.dispatch({ type: 'ADD_BAND', payload: band })
  }

  renderBands = () => this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)

  render() {
    return(
      <div>
        <BandInput addBand={this.addBand} />
        <ol>
          {this.renderBands()}
        </ol>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer)
