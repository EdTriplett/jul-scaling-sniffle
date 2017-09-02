
Added more detail on question 8

Code:
Typoes - Added required closing brackets and removed extraneous closing parentheses.  

Renamed `user` to `userObj`, added a stored hash of the password to it as a new field, and changed `admin` to `"admin"` in name and password values.

validPassword - changed the second argument for bcrypt.compareSync to userObj.hashedPassword

Simplified the Local Strategy for a hard-coded user, removing code patterned after Passport-Local docs that (while not specified as such in docs) only work with Mongoose

added line 23: 
app.engine('handlebars', exphbs());

Changed `exphbs` to `handlebars` in setting the view engine on line 24

Removed extraneous loginMiddleware, and parts of routes that duplicated remaining middleware.  

Passed `{user:userObj}` instead of `user` to router for app.get("/", ... 

removed `// Your code here...`

added comments to annotate code