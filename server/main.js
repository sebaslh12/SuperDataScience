import { Meteor } from 'meteor/meteor';
import { Blogs } from './../imports/api/blogs'
import { Roles } from 'meteor/alanning:roles'

Meteor.startup(() => {

    // Publish a way to make a user admin
    Meteor.publish('admin', () => {
        if (this.userId) {
            Roles.addUsersToRoles(Meteor.userId(), 'admin', Roles.GLOBAL_GROUP)
        }
    });

    // Publish all the users
    Meteor.publish('allUsers', () => {
        return Meteor.users.find({ _id: { $ne: Meteor.userId() } });
    })
});
