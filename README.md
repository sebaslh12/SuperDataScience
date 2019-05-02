# SuperDataScience Test
**Please check the end of this readme**
## Instructions:
Web Developer Test
* It’s important that you upload this test into a GitHub repository since you should only send us the GitHub link for us to download and review.
* MeteorJS works with the frontend frameworks React, Angular, Vue and Blaze but we want you to do the test with React.
## Description of the application:
You must develop a small blog page application. This app will be a private blog page which means that all the users must register in order to check the blog posts. There should be two types of users (guest and admins). The admins should be able to create/update/delete blog posts and also check all the registered users in the app and the guest should only be able to see the blog posts.
This application must have the following functionalities:
* Register/login user accounts. An user needs to be able to login and register to the application (without this he/she should not be able to see the content of the page).
* The following routes should exist in the app:
    - /login
    - /signup
    - /blog
    - /blog/<blog_id_here>(whenyouclickabloginthe/blogrouteitshouldopenthis
route. This will have the title and the full description shown)
 /admin/users(Only the users with thea dmin role should beable to see this)
* Create blog posts. An admin user should be able to create a new blog post. This must have a title and a description field.
* Delete existing blog posts. An admin user should be able to delete a blog post. This functionality should only be available to admins which means that no guest users must be able to see the Delete button.
* Modify existing blog posts. An admin user should be able to modify a blog post content (title and description).
* Open a blog post. The route /blog has the full list of all the existing blog posts. Each element of this list must have a View button which opens the route /blog/<blog_id_here> which displays the complete information of the blog (/<blog_id_here> is the id of the blog document. This makes a url unique for each blog post)
* Admins should be able to check the list of all the registered users in the app (in the route /admin/users). Take into account that this should only be available for admins. If a guest user goes to this route, the page should show a permission denied message.
* The website must have a very basic security system which means use the Meteor methods and the Meteor Publication/subscription system (you must delete the meteor packages autopublish and insecure for this)

The design of the page is not important but we do give extra points for a design implementation to the page. For this test you can use any type of package or library that you think could help you.

## Admin user
To make the current user an Admin one just remove the comment on the `BlogsPage.jsx` file, line number `37`: `Meteor.subscribe('admin')`
