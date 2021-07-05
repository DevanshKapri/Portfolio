# Portfolio
## About the project
A full stack web application the displays user portfolio and has a contact form which and submit and view messages.
### Languages/libraries Used
- Python
- JS/ jquery
- HTML/CSS
- sqlite3
- Flask
- other libraries and packages
### How it works?
The website home page has portfolio information like SKills, Porjects, Resume, etc. The user can fill out a contact form which stores the messages to a database which is then displayed in tabular format when the 'View' button is clicked.
### Routing
THe site has a default '/' route with GET and POST methods and a '/view' route with only GET method.
### Database
All message data in stored in messages.db. It is access using sqlite3 and flask library. 
### Possible Improvements
There's alaways a scope of development in any project. We can add the following features to make this web-application more user-friendly:

- Login system so that the messages are visible only to the admin.
- Instead of displaying messages on a difference page, jQuery tables can be used to display it on same page.
- Adding interactive Blogs to the site through which Admin can post to their portfolio.
- Automating form responses to admin email.

