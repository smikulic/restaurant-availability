'use strict';

import React from 'react/addons';
import { Link } from 'react-router';

const PureRendermixin = React.addons.PureRenderMixin;
const Navigation = React.createClass({
  mixins: [PureRendermixin],

  render() {

    return (
      <div className="pure-u-1-1 navigation">
        <div className="pure-u-1-5"></div>
        <div className="pure-u-4-5 name">The Fish</div>
      </div>
    );
  }
});

export default Navigation;
