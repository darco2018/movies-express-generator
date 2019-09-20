CREATING EXPRESS APP with generator, as was shown https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website:

npm install express-generator –g

express --view=ejs –git

npm install

DEBUG=express-locallibrary-tutorial:* npm start  (node ./bin/www)

npm install -D nodemon (automate restarting the server on change. ou will still need to reload the browser to refresh the page.)

package.json: "devstart": "nodemon ./bin/www" (we only want to use nodemon during development,)

DEBUG=movies:* npm run devstart ( rs - to force restart by yourself)

npm i eslint  eslint-config-airbnb-base eslint-plugin-import  eslint init (to generate .eslintrc)
npm i body-parser
npm i request
