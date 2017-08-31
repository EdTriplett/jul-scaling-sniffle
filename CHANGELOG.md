<!-- required closing brackets added 

extraneous close-parentheses removed  -->

(except for one I can’t find)

```Ed Triplett:
<!-- - Questions: more details for 8, good answers overall -->
- Code: multiple typos in code, loginMiddleware not being used, confusion about what Strategy returns```
<!-- 
 60, move localStrat above serialize and desrialize -->




[11:43] 
<!-- Ed Triplett oh, and the values for user.name and .password weren’t strings -->


[11:45] 
line 60 and 64 don’t use hard-coded user correctly
///////////////////////////////keep portion below:

Added more detail on question 8

Code:
Typoes - Added required closing brackets and removed extraneous closing parentheses

Renamed `user` to `userObj`, and added a stored hash of the password to it.

changed `admin` to `"admin"` in declaration of hard-coded user object

Moved new Strategy above de/serialize, and simplified the function for a hard-coded user.

validPassword - changed the second argument for bcrypt.compareSync to userObj.hashedPassword