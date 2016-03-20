'use strict';

import React from 'react/addons';

const PureRendermixin = React.addons.PureRenderMixin;
const DetailsModalMinimized = React.createClass({
  mixins: [PureRendermixin],

  render () {
    let availabilityDetails = this.props.availabilityDetails;

    return (
      <div className="modal-minimize">
        <div className="pure-g">
          <div className="pure-u-1-1 modal-headline">
            December 31st at {availabilityDetails.local_time_formatted}
            <span className="svg-icon svg-icon__maximize" onClick={this.props.maximizeModal} dangerouslySetInnerHTML={{__html: '<svg width="24px" height="24px" viewBox="0 0 32 32" version="1.1"><g stroke="#ffffff" stroke-width="1.3"><path d="M8.4047619,7.4047619 L24.5952381,23.5952381 M24.1904762,7.80952381 L8,24" transform="translate(16.500000, 15.500000) rotate(-315.000000) translate(-16.500000, -15.500000) "></path></g></svg>'}} />
            <span className="svg-icon svg-icon__close" onClick={this.props.closeModal} dangerouslySetInnerHTML={{__html: '<svg width="24px" height="24px" viewBox="0 0 32 32" version="1.1"><g stroke-width="1.3" stroke="#ffffff"><path d="M5.5,6.5 L25.5,26.5 M25,7 L5,27"></path></g></svg>'}} />
          </div>
        </div>
      </div>
    );
  }
});

export default DetailsModalMinimized;
