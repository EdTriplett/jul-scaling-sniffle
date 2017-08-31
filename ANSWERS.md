### ANSWERS
1. Explain what’s the difference between authentication and authorisation. (3 points)

Authentication is confirming that users are who they say they are.  Authorization is confirming that they are permitted to access the requested resources.

2. Explain what does it mean to `hash` a password. What exactly is hashing? (3 points)

To hash a password is to generate a one-way digest of it, such that it's impossible/hard to re-generate the plaintext from the digest.

3. What’s the diff between encrypting and digesting? (2 points)

Encrypting is done with a key that can be used to reverse the encryption; digesting is strictly one-way (in theory and best practice).

4. What is `HTTP Digest Authentication` and how does it work? How is it different from `HTTP Basic Authentication`? (4 points)

It hashes users' entered passwords and transmits the hash back to the server for comparison to a stored hash for authentication.  Basic just transmits unhashed passwords and usernames for authentication, requiring you to store plaintext passwords in your db.

5. What does `salting` mean? (3 points)

Adding a random string to a password before hashing it to reduce the usefulness of rainbow tables to attackers.

6. What are the differences between `Session Based Auth` and `HTTP Basic Auth`? (3 points)

The latter stores user credentials in the browser and resends them with every request.  The former uses a sessionId cookie signed with a secret only known to our server to identify the user after login and confirm that the cookie has not been tampered with.


7. What is a signed session id? How is it formatted? How do we check its validity? (3 points)

A session cookie in the format email:signature, where the sig is a hash of the email plus our secret.  We hash the user's email with our secret and compare that to the signature on the cookie accompanying a request to ensure it hasn't been altered.


8. What is a strategy for passport? (3 points)

An authentication mechanism, each of which is a separate package from the base passport module.  They may either use a password and username or delegate authentication to a third party provider through OAuth or OpenID. 

9. What two functions must you define for Passport to correctly deal with sessions? (2 points)

Serializatoin and deserialization

10. At a high level, how does OAuth 2.0 work? (5 points)

In two round trips.
You register your app with the OAuth provider, and get an App ID and an App secret.  Then when a user chooses to login with the provider's account you redirect them to the provider's endpoint, including a redirect URI with your request.  When the user accepts to share their info from the provider with you they're redirected to the URI you gave with a provider-added auth code.
Then you make a post request back to the provider with this auth code and get back an access token used to request info from the provider.

