'use strict';

import React from 'react/addons';
import Navigation from '../layoutComponents/NavigationComponent.jsx';
import AvailabilityList from '../moduleComponents/AvailabilityListComponent.jsx';

const PureRendermixin = React.addons.PureRenderMixin;
const OverviewPage = React.createClass({
  mixins: [PureRendermixin],

  render () {

    return (
      <div className="page overview">
        <Navigation />
        <div className="pure-u-1-5"></div>
        <div className="pure-u-3-5">
          <AvailabilityList />
        </div>
      </div>
    );
  }
});

export default OverviewPage;
