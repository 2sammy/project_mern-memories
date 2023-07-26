# technology used
body-parser - enables us to send post requests
cors -cross origin requests
express - used for creating routes request
mongoose - used to create methods for the posts
nodemon - to prevent restarting the saver incase of any changes

bodyParser.json([options])
Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option. This parser accepts any Unicode encoding of the body and supports automatic inflation of gzip and deflate encodings.

A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body).

CORS or Cross-Origin Resource Sharing in Node.js is a mechanism by which a front-end client can make requests for resources to an external back-end server. The single-origin policy does not allow cross-origin requests and CORS headers are required to bypass this feature. Through this article, we will learn how to set up an ExpressJS back-end server and send a cross-origin request to it through a front-end.

What is Routing? 

Routing defines the way in which the client requests are handled by the application endpoints. 