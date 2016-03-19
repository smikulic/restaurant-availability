'use strict';

import uuid from 'uuid';
import _ from 'lodash';
import AppDispatcher from '../dispatcher.js';
import ReservationConstants from '../constants/ReservationConstants.jsx';
import assign from 'object-assign';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _availabilityObject = {};


const ReservationStore = assign({}, EventEmitter.prototype, {
  getAvailability() {
    return _availabilityObject;
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register to handle all updates
ReservationStore.dispatchToken = AppDispatcher.register(function (payload) {
  const action = payload.action;
  switch (action.actionType) {
    case ReservationConstants.AVAILABILITY_RECEIVE:
      _availabilityObject = action.availabilityObject;
      ReservationStore.emitChange();
      break;

    default:
      return true;
  }

  return true; // No errors.  Needed by promise in dispatcher.
});

export default ReservationStore;
