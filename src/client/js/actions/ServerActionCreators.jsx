'use strict';

import AppDispatcher from '../dispatcher.js';
import ReservationConstants from '../constants/ReservationConstants.jsx';

const ServerActionCreators = {
  receiveAvailabilityObject(availabilityObject) {
    AppDispatcher.handleServerAction({
      actionType: ReservationConstants.AVAILABILITY_RECEIVE,
      availabilityObject: availabilityObject
    });
  }
};

export default ServerActionCreators;
