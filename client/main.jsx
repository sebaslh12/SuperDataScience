import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Tracker } from 'meteor/tracker'

import App from '../imports/ui/App.jsx';

// render routes after DOM has loaded
Meteor.startup(() => {
  Tracker.autorun(() => {
    render(<App />, document.getElementById('app'));
  })
});
