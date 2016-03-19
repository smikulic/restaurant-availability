'use strict';

import React from 'react/addons';
import _ from 'lodash';
import ReservationStore from '../../stores/ReservationStore.jsx';
import ApiUtils from '../../utils/ApiUtils.jsx';

function getStateFromStore() {
  return {
    availabilityObject: ReservationStore.getAvailability()
  }
}

const PureRendermixin = React.addons.PureRenderMixin;
const AvailabilityList = React.createClass({
  mixins: [PureRendermixin],

  componentDidMount() {
    ReservationStore.addChangeListener(this._onChange);
    ApiUtils.retrieveAvailabilityObject();
  },

  componentWillUnmount() {
    ReservationStore.removeChangeListener(this._onChange);
  },

  getInitialState() {
    return getStateFromStore();
  },

  _onChange() {
    this.setState(getStateFromStore());
  },

  render () {
    let listNode = null;

    listNode = _.map(this.state.availabilityObject.objects, function (item, i) {
      // resource_uri for item details
      return (
        <div key={i} className="availability-list__option">
          <div className="pure-u-1-5 availability-list__time">{item.local_time_formatted}</div>
          <div className="pure-u-4-5 availability-list__people">Available for {item.available} people</div>
        </div>
      );
    }, this);

    return (
      <div className="availability-list">
        <div className="availability-list__headline">December 31st 2015</div>
        <div className="availability-list__content">
          {listNode}
        </div>
      </div>
    );
  }
});

export default AvailabilityList;
