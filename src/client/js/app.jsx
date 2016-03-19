'use strict';

/**
 * Bootstrap whole client
 */

import React from 'react/addons';
import Router from 'react-router';

import NotFoundPage from './components/pageComponents/NotFoundPageComponent.jsx';
import OverviewPage from './components/pageComponents/OverviewPageComponent.jsx';
import LandingPage from './components/pageComponents/LandingPageComponent.jsx';


/**
 * Necessary Router Variables
 */
const { Route, RouteHandler, DefaultRoute, NotFoundRoute, Redirect } = Router;
const PureRendermixin = React.addons.PureRenderMixin;

// For React Dev Tools
window.React = React;

const App = React.createClass({
  mixins: [PureRendermixin],

  render() {
    return (
      <div className="pure-g">

        {/* Dynamic part of the pages, affected by routes */}
        <RouteHandler {...this.state} {...this.props} />
      </div>
    );
  }
});

const routes = (
    <Route handler={App} path="/">
        <NotFoundRoute handler={NotFoundPage} />

        {/* Pages */}
        <Route name="landingPage" path="/landing" handler={LandingPage} />
        <Route name="overviewPage" path="/overview" handler={OverviewPage} />

        <Redirect from="/" to="landingPage" />
    </Route>
);

if (document.getElementById('app')) {
    Router.run(routes, (Handler, state) => {
        const params = state.params;
        const currentPath = state.path;
        const activeRoutes = state.routes.map((el) => {return el.name}).filter((el) => {return el});

        React.render(<Handler currentPath={currentPath} activeRoutes={activeRoutes} params={params} />,
            document.getElementById('app')
        );
    });
}
