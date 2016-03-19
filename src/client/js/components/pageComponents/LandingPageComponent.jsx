'use strict';

import React from 'react/addons';
import { Link } from 'react-router';

const PureRendermixin = React.addons.PureRenderMixin;
const LandingPage = React.createClass({
  mixins: [PureRendermixin],

  render () {

    return (
      <div className="page landing">
        <Link to="overviewPage">
            <button className="btn btn-large">Click me</button>
        </Link>
      </div>
    );
  }
});

export default LandingPage;
