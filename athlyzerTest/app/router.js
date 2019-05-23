import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('videoroute');
  this.route('facebookroute');
  this.route('videoroute-local');
});

export default Router;
