'use strict';

import React from 'react/addons';
import _ from 'lodash';
import ReservationStore from '../../stores/ReservationStore.jsx';
import ApiUtils from '../../utils/ApiUtils.jsx';
import DetailsModal from './detailsModalComponent.jsx';
import DetailsModalMinimized from './detailsModalMinimizedComponent.jsx';

function getStateFromStore() {
  return {
    availabilityObject: ReservationStore.getAvailability(),
    detailsModalOpen: false,
    availabilityDetails: {},
    detailsModalMinimize: false
  }
}

const PureRendermixin = React.addons.PureRenderMixin;
const AvailabilityList = React.createClass({
  mixins: [PureRendermixin],

  componentDidMount () {
    ReservationStore.addChangeListener(this._onChange);
    ApiUtils.retrieveAvailabilityObject();
  },

  componentWillUnmount () {
    ReservationStore.removeChangeListener(this._onChange);
  },

  getInitialState () {
    return getStateFromStore();
  },

  _onChange () {
    this.setState(getStateFromStore());
  },

  _openDetailsModal (availabilityDetails) {
    this.setState({detailsModalOpen: true});
    this.setState({availabilityDetails: availabilityDetails});
  },

  _closeModal () {
    this.setState({detailsModalOpen: false});

    if (this.state.detailsModalMinimize) {
      this.setState({detailsModalMinimize: false});
    }
  },

  _openModal () {
    this.setState({detailsModalOpen: true});
  },

  _minimizeModal () {
    this._closeModal();
    this.setState({detailsModalMinimize: true});
  },

  _maximizeModal () {
    this._openModal();
    this.setState({detailsModalMinimize: false});
  },

  render () {
    let listNode = null;
    let detailsModalNode = null;
    let detailsModalMinimizedNode = null;

    listNode = _.map(this.state.availabilityObject.objects, function (item, i) {
      // resource_uri for item details (currently returning an error/ not available?)
      return (
        <div key={i} className="availability-list__option" onClick={()=>this._openDetailsModal(item)}>
          <div className="pure-u-1-5 availability-list__time">{item.local_time_formatted}</div>
          <div className="pure-u-4-5 availability-list__people">Available for {item.available} people</div>
        </div>
      );
    }, this);

    if (this.state.detailsModalOpen) {
      detailsModalNode = (
        <DetailsModal availabilityDetails={this.state.availabilityDetails} 
                      closeModal={this._closeModal} 
                      minimizeModal={this._minimizeModal} />
      );
    }

    if (this.state.detailsModalMinimize) {
      detailsModalMinimizedNode = (
        <DetailsModalMinimized availabilityDetails={this.state.availabilityDetails} 
                      closeModal={this._closeModal} 
                      maximizeModal={this._maximizeModal} />
      );
    }

    return (
      <div className="availability-list">
        <div className="availability-list__headline">December 31st 2015</div>
        <div className="availability-list__content">
          {listNode}
        </div>
        {detailsModalNode}
        {detailsModalMinimizedNode}
      </div>
    );
  }
});

export default AvailabilityList;
