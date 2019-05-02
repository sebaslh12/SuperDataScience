import { Meteor } from 'meteor/meteor';
import { Blogs } from './../imports/api/blogs'
import { Roles } from 'meteor/alanning:roles'

Meteor.startup(() => {
    
    Meteor.publish("admin", function() {
        if(this.userId) {
            Roles.addUsersToRoles(Meteor.userId(), 'admin', Roles.GLOBAL_GROUP)
        }
    });
});
