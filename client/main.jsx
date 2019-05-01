import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Tracker } from 'meteor/tracker'


// add render routes function
import { renderRoutes } from '../imports/startup/client/routes.jsx'

// render routes after DOM has loaded
Meteor.startup(() => {
  Tracker.autorun(() => {
    render(renderRoutes(), document.getElementById('app'));
  })
});
