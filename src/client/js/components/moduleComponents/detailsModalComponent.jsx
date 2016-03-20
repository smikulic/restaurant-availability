'use strict';

import React from 'react/addons';

const PureRendermixin = React.addons.PureRenderMixin;
const DetailsModal = React.createClass({
  mixins: [PureRendermixin],

  render () {
    let availabilityDetails = this.props.availabilityDetails;

    return (
      <span>
        <div className="modal-backdrop" onClick={this.props.closeModal}></div>
        <div className="modal">
          <div className="pure-g">
            <div className="pure-u-1-1 modal-headline">
              December 31st at {availabilityDetails.local_time_formatted}
              <span className="svg-icon svg-icon__minimize" onClick={this.props.minimizeModal} dangerouslySetInnerHTML={{__html: '<svg width="28px" height="28px" viewBox="0 0 32 32" version="1.1"><g stroke="#ffffff" stroke-width="1.3"><path d="M24.3785687,7.91394575 L7.20646021,25.0860543" transform="translate(15.792514, 16.500000) rotate(-315.000000) translate(-15.792514, -16.500000) "></path></g></svg>'}} />
              <span className="svg-icon svg-icon__close" onClick={this.props.closeModal} dangerouslySetInnerHTML={{__html: '<svg width="28px" height="28px" viewBox="0 0 32 32" version="1.1"><g stroke-width="1.3" stroke="#ffffff"><path d="M5.5,6.5 L25.5,26.5 M25,7 L5,27"></path></g></svg>'}} />
            </div>
            <div className="pure-u-1-1 modal-content">
              <p>Available for {availabilityDetails.available}</p><br />
              <div className="label">About</div>
              <p>"The Fish is a nice restaurant to ear seafood"</p><br />
              <div className="pure-u-2-24">
                <span className="svg-icon svg-icon__address" dangerouslySetInnerHTML={{__html: '<svg width="28px" height="28px" viewBox="0 0 32 32" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g stroke="#555555" stroke-width="1.3"><path d="M15.2608416,28.1805185 C15.2608416,28.1805185 24.1500003,18.6919606 24.1499996,12.7233516 C24.149999,6.75474261 20.4977258,4 15.2608416,4 C10.0239574,4 7,7.07184592 7,12.7233516 C7,18.3748573 15.2608416,28.1805185 15.2608416,28.1805185 Z M15.5079602,15.6424719 C17.2391032,15.6424719 18.6424719,14.2391032 18.6424719,12.5079602 C18.6424719,10.7768172 17.2391032,9.37344855 15.5079602,9.37344855 C13.7768172,9.37344855 12.3734486,10.7768172 12.3734486,12.5079602 C12.3734486,14.2391032 13.7768172,15.6424719 15.5079602,15.6424719 Z" id="arrived"></path></g></g></svg>'}} />
              </div>
              <div className="pure-u-10-24">
                <div className="label">Address</div>
                <div className="description">Gneisenaustr. 66, Berlin, Germany</div>
              </div>
              <div className="pure-u-2-24">
                <span className="svg-icon svg-icon__time" dangerouslySetInnerHTML={{__html: '<svg width="28px" height="28px" viewBox="0 0 32 32" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g stroke="#555555" stroke-width="1.5"><path d="M16.5,29 C23.4035594,29 29,23.4035594 29,16.5 C29,9.59644063 23.4035594,4 16.5,4 C9.59644063,4 4,9.59644063 4,16.5 C4,23.4035594 9.59644063,29 16.5,29 Z M16.5622559,16.5626221 L21.5181274,16.5626221 M16.5,9.5 L16.5,17.3187866"></path></g></g></svg>'}} />
              </div>
              <div className="pure-u-10-24">
                <div className="label">Opening hours</div>
                <div className="description">10:00 am - 03:00 pm</div>
                <div className="description">04:00 am - 10:00 pm</div>
              </div>
            </div>
          </div>
        </div>
      </span>
    );
  }
});

export default DetailsModal;
