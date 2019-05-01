import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Blogs = new Mongo.Collection('blogs')

// Server side code only
/* if (Meteor.isServer) {
    Meteor.publish('blogs', function publishBlogs() {
        return Blogs.find();
    });
} */

Meteor.methods({
    'blogs.insert'(blogTitle, blogDescription) {
        check(blogTitle, String);
        check(blogDescription, String);

        // Need to be logged in before adding a blog
        if (!Meteor.userId()) {
            throw new Meteor.Error(`You're not authorized`);
        }

        Blogs.insert({
            blogTitle,
            blogDescription,
            createdAt: new Date(),
            userId: Meteor.userId(),
            user: Meteor.user().username,
        });
    },

    'blogs.remove'(blogId) {
        check(blogId, String);
        // Need to be logged in before deleting a blog
        if (!Meteor.userId()) {
            throw new Meteor.Error(`ﬁYou're not authorized`);
        }
        Blogs.remove(blogId);
    },

    'blogs.update'(blogId, newTitle, newDescription) {
        check(blogId, String);
        check(newTitle, String);
        check(newDescription, String);

        Blogs.update(blogId, {
            $set:
            {
                blogTitle: newTitle,
                blogDescription: newDescription
            }
        });
    }
})