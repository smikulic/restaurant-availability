'use strict';

import ServerActionCreators from '../actions/ServerActionCreators.jsx';
import { get, post } from './XhrUtils.jsx';

let baseUrl = window.location.host;

export default {
    /**
     * Call to get the current availability object.
     */
    retrieveAvailabilityObject() {
      const url = 'https://api.resmio.com/v1/facility/the-fish/availability?date__gte=2016-12-31';

      get(url).then(function(response) {
        ServerActionCreators.receiveAvailabilityObject(response.data);
      }, function (error) {
        console.error("Failed to retrieve availability data!", error);
      });
    }
};
