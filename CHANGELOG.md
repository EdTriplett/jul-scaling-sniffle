
TODO: lines 88 and 76


line 60 and 64 don’t use hard-coded user correctly (User.find)
///////////////////////////////keep portion below:

Added more detail on question 8

Code:
Typoes - Added required closing brackets and removed extraneous closing parentheses

Renamed `user` to `userObj`, and added a stored hash of the password to it.

changed `admin` to `"admin"` in declaration of hard-coded user object

Moved new Strategy above de/serialize, and simplified the function for a hard-coded user.

added line 25: 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

validPassword - changed the second argument for bcrypt.compareSync to userObj.hashedPassword

commented out extraneous middleware, and parts of routes that duplicated them.  Changed   `loggedOutOnly` to check for (!req.isAuthenticated) instead of (req.isUauthenticated)