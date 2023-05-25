"use strict";(self.webpackChunkreference_docs=self.webpackChunkreference_docs||[]).push([[14465],{48132:e=>{e.exports=JSON.parse('{"pluginId":"_supabase_js","version":"current","label":"v2","banner":null,"badge":true,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"sidebar":[{"type":"category","label":"Getting Started","items":[{"type":"link","label":"DGC Voting Portal","href":"/docs/reference/javascript/","docId":"intro"},{"type":"link","label":"On-Chain Governance","href":"/docs/reference/javascript/installing","docId":"installing"},{"type":"link","label":"Voting Wallet","href":"/docs/reference/javascript/voting-wallet","docId":"voting-wallet"},{"type":"link","label":"Voting Guide","href":"/docs/reference/javascript/voting-guide","docId":"voting-guide"},{"type":"link","label":"Polls & Voting","href":"/docs/reference/javascript/polls","docId":"polls"}],"collapsed":false,"collapsible":true}]},"docs":{"generated/auth-admin-createuser":{"id":"generated/auth-admin-createuser","title":"createUser()","description":"Creates a new user."},"generated/auth-admin-deleteuser":{"id":"generated/auth-admin-deleteuser","title":"deleteUser()","description":"Delete a user. Requires a service_role key."},"generated/auth-admin-generatelink":{"id":"generated/auth-admin-generatelink","title":"generateLink()","description":"Generates email links and OTPs to be sent via a custom email provider."},"generated/auth-admin-getuserbyid":{"id":"generated/auth-admin-getuserbyid","title":"getUserById()","description":"Get user by id."},"generated/auth-admin-inviteuserbyemail":{"id":"generated/auth-admin-inviteuserbyemail","title":"inviteUserByEmail()","description":"Sends an invite link to an email address."},"generated/auth-admin-listusers":{"id":"generated/auth-admin-listusers","title":"listUsers()","description":"Get a list of users."},"generated/auth-admin-updateuserbyid":{"id":"generated/auth-admin-updateuserbyid","title":"updateUserById()","description":"Updates the user data."},"generated/auth-getsession":{"id":"generated/auth-getsession","title":"getSession()","description":"Returns the session, refreshing it if necessary."},"generated/auth-getuser":{"id":"generated/auth-getuser","title":"getUser()","description":"Gets the current user details if there is an existing session."},"generated/auth-onauthstatechange":{"id":"generated/auth-onauthstatechange","title":"onAuthStateChange()","description":"Receive a notification every time an auth event happens."},"generated/auth-resetpasswordforemail":{"id":"generated/auth-resetpasswordforemail","title":"resetPasswordForEmail()","description":"Sends a password reset request to an email address."},"generated/auth-setsession":{"id":"generated/auth-setsession","title":"setSession()","description":"Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session."},"generated/auth-signinwithoauth":{"id":"generated/auth-signinwithoauth","title":"signInWithOAuth()","description":"Log in an existing user via a third-party provider."},"generated/auth-signinwithotp":{"id":"generated/auth-signinwithotp","title":"signInWithOtp()","description":"Log in a user using magiclink or a one-time password (OTP)."},"generated/auth-signinwithpassword":{"id":"generated/auth-signinwithpassword","title":"signInWithPassword()","description":"Log in an existing user with an email and password or phone and password."},"generated/auth-signout":{"id":"generated/auth-signout","title":"signOut()","description":"Inside a browser context, signOut() will remove the logged in user from the browser session"},"generated/auth-signup":{"id":"generated/auth-signup","title":"signUp()","description":"Creates a new user."},"generated/auth-updateuser":{"id":"generated/auth-updateuser","title":"updateUser()","description":"Updates user data, if there is a logged in user."},"generated/auth-verifyotp":{"id":"generated/auth-verifyotp","title":"verifyOtp()","description":"Log in a user given a User supplied OTP received via mobile."},"generated/containedby":{"id":"generated/containedby","title":"containedBy()","description":"Parameters"},"generated/contains":{"id":"generated/contains","title":"contains()","description":"Parameters"},"generated/db-abortsignal":{"id":"generated/db-abortsignal","title":"abortSignal()","description":"Parameters"},"generated/db-csv":{"id":"generated/db-csv","title":"csv()","description":"Examples"},"generated/db-modifiers-select":{"id":"generated/db-modifiers-select","title":"select()","description":"Parameters"},"generated/delete":{"id":"generated/delete","title":"Delete data: delete()","description":"Parameters"},"generated/eq":{"id":"generated/eq","title":"eq()","description":"Parameters"},"generated/filter":{"id":"generated/filter","title":"filter()","description":"Parameters"},"generated/getchannels":{"id":"generated/getchannels","title":"getChannels()","description":"Returns all Realtime channels."},"generated/gt":{"id":"generated/gt","title":"gt()","description":"Parameters"},"generated/gte":{"id":"generated/gte","title":"gte()","description":"Parameters"},"generated/ilike":{"id":"generated/ilike","title":"ilike()","description":"Parameters"},"generated/in":{"id":"generated/in","title":"in()","description":"Parameters"},"generated/index":{"id":"generated/index","title":"Supabase Client","description":"Supabase JavaScript."},"generated/initializing":{"id":"generated/initializing","title":"Initializing","description":"You can initialize a new Supabase client using the createClient() method."},"generated/insert":{"id":"generated/insert","title":"Create data: insert()","description":"Parameters"},"generated/invoke":{"id":"generated/invoke","title":"invoke()","description":"Invoke a Supabase Function."},"generated/is":{"id":"generated/is","title":"is()","description":"Parameters"},"generated/like":{"id":"generated/like","title":"like()","description":"Parameters"},"generated/limit":{"id":"generated/limit","title":"limit()","description":"Parameters"},"generated/lt":{"id":"generated/lt","title":"lt()","description":"Parameters"},"generated/lte":{"id":"generated/lte","title":"lte()","description":"Parameters"},"generated/match":{"id":"generated/match","title":"match()","description":"Parameters"},"generated/maybesingle":{"id":"generated/maybesingle","title":"maybeSingle()","description":"Examples"},"generated/neq":{"id":"generated/neq","title":"neq()","description":"Parameters"},"generated/not":{"id":"generated/not","title":"not()","description":"Parameters"},"generated/or":{"id":"generated/or","title":"or()","description":"Parameters"},"generated/order":{"id":"generated/order","title":"order()","description":"Parameters"},"generated/overlaps":{"id":"generated/overlaps","title":"overlaps()","description":"Parameters"},"generated/range":{"id":"generated/range","title":"range()","description":"Parameters"},"generated/rangeadjacent":{"id":"generated/rangeadjacent","title":"rangeAdjacent()","description":"Parameters"},"generated/rangegt":{"id":"generated/rangegt","title":"rangeGt()","description":"Parameters"},"generated/rangegte":{"id":"generated/rangegte","title":"rangeGte()","description":"Parameters"},"generated/rangelt":{"id":"generated/rangelt","title":"rangeLt()","description":"Parameters"},"generated/rangelte":{"id":"generated/rangelte","title":"rangeLte()","description":"Parameters"},"generated/removeallchannels":{"id":"generated/removeallchannels","title":"removeAllChannels()","description":"Unsubscribes and removes all Realtime channels from Realtime client."},"generated/removechannel":{"id":"generated/removechannel","title":"removeChannel()","description":"Unsubscribes and removes Realtime channel from Realtime client."},"generated/rpc":{"id":"generated/rpc","title":"Postgres functions: rpc()","description":"You can call Postgres functions as Remote Procedure Calls, logic in your database that you can execute from anywhere."},"generated/select":{"id":"generated/select","title":"Fetch data: select()","description":"Parameters"},"generated/single":{"id":"generated/single","title":"single()","description":"Examples"},"generated/storage-createbucket":{"id":"generated/storage-createbucket","title":"createBucket()","description":"Creates a new Storage bucket"},"generated/storage-deletebucket":{"id":"generated/storage-deletebucket","title":"deleteBucket()","description":"Deletes an existing bucket. A bucket can\'t be deleted with existing objects inside it."},"generated/storage-emptybucket":{"id":"generated/storage-emptybucket","title":"emptyBucket()","description":"Removes all objects inside a single bucket."},"generated/storage-from-copy":{"id":"generated/storage-from-copy","title":"from.copy()","description":"Copies an existing file to a new path in the same bucket."},"generated/storage-from-createsignedurl":{"id":"generated/storage-from-createsignedurl","title":"from.createSignedUrl()","description":"Creates a signed URL. Use a signed URL to share a file for a fixed amount of time."},"generated/storage-from-createsignedurls":{"id":"generated/storage-from-createsignedurls","title":"from.createSignedUrls()","description":"Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time."},"generated/storage-from-download":{"id":"generated/storage-from-download","title":"from.download()","description":"Downloads a file."},"generated/storage-from-getpublicurl":{"id":"generated/storage-from-getpublicurl","title":"from.getPublicUrl()","description":"Retrieves the URL for an asset in a public bucket."},"generated/storage-from-list":{"id":"generated/storage-from-list","title":"from.list()","description":"Lists all the files within a bucket."},"generated/storage-from-move":{"id":"generated/storage-from-move","title":"from.move()","description":"Moves an existing file to a new path in the same bucket."},"generated/storage-from-remove":{"id":"generated/storage-from-remove","title":"from.remove()","description":"Deletes files within the same bucket"},"generated/storage-from-update":{"id":"generated/storage-from-update","title":"from.update()","description":"Replaces an existing file at the specified path with a new one."},"generated/storage-from-upload":{"id":"generated/storage-from-upload","title":"from.upload()","description":"Uploads a file to an existing bucket."},"generated/storage-getbucket":{"id":"generated/storage-getbucket","title":"getBucket()","description":"Retrieves the details of an existing Storage bucket."},"generated/storage-listbuckets":{"id":"generated/storage-listbuckets","title":"listBuckets()","description":"Retrieves the details of all Storage buckets within an existing project."},"generated/storage-updatebucket":{"id":"generated/storage-updatebucket","title":"updateBucket()","description":"Updates a Storage bucket"},"generated/subscribe":{"id":"generated/subscribe","title":"on().subscribe()","description":"Listen to messages."},"generated/supabase-auth-admin-api":{"id":"generated/supabase-auth-admin-api","title":"Overview","description":"Notes"},"generated/textsearch":{"id":"generated/textsearch","title":"textSearch()","description":"Parameters"},"generated/update":{"id":"generated/update","title":"Modify data: update()","description":"Parameters"},"generated/upsert":{"id":"generated/upsert","title":"Upsert data: upsert()","description":"Parameters"},"generated/using-filters":{"id":"generated/using-filters","title":"Using Filters","description":"Filters allow you to only return rows that match certain conditions."},"generated/using-modifiers":{"id":"generated/using-modifiers","title":"Using Modifiers","description":"Filters work on the row level\u2014they allows you to return rows that"},"generated/voting-portal":{"id":"generated/voting-portal","title":"voting-portal","description":"You can initialize a new Supabase client using the createClient() method."},"generating-types":{"id":"generating-types","title":"Generating Types","description":"Supabase will soon release native type generators that dump your database types for various languages. For now, we support TypeScript through third-party tools."},"installing":{"id":"installing","title":"On-Chain Governance","description":"On-chain governance refers to the practise of voting in active Polls for the proposed DIPS.","sidebar":"sidebar"},"intro":{"id":"intro","title":"DGC Voting Portal","description":"This reference section intends to acquaint DGC Members with the Dijets Voting Portal. DGC Voting Portal is a unified dashboard containing useful stats and charts about governance and council delegations. DGC Members can use the voting portal to keep track of all the currently active and previously accepted/rejected polls. The interface allows members to easily vote, comment, analyse, review and learn all about Dijets Proposals and their summaries.","sidebar":"sidebar"},"polls":{"id":"polls","title":"Polls & Voting","description":"DGC Members can participate in two main types of Governance activities on Dijets Voting Portal: Polls & Mandates.","sidebar":"sidebar"},"release-notes":{"id":"release-notes","title":"Release Notes","description":"Supabase.js v2 release notes."},"typescript-support":{"id":"typescript-support","title":"Typescript Support","description":"supabase-js supports Typescript."},"upgrade-guide":{"id":"upgrade-guide","title":"Upgrade to supabase-js v2","description":"Learn how to upgrade to supabase-js v2."},"voting-guide":{"id":"voting-guide","title":"Voting Guide","description":"This section explains how DGC Members can vote on DGC Voting Portal.","sidebar":"sidebar"},"voting-wallet":{"id":"voting-wallet","title":"Voting Wallet","description":"DGC Members can connect Decypher with the Voting Portal using their respective council accounts to start participating.","sidebar":"sidebar"}}}')}}]);