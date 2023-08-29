Simple Blogging Platform
Welcome to the Simple Blogging Platform! This is a web application built using Node.js and Express.js that allows users to create and read blog posts. It utilizes MongoDB as the database for storing posts.

Usage
Home Page: View a list of existing blog posts. Click on a title to read the full post.

Compose Page: Write and submit new blog posts. Enter a title and content for your post, then click "Submit".

Individual Post Page: Access individual blog posts by their title in the URL. For example, to view a post titled "My First Post", navigate to http://localhost:3000/home/my-first-post.

About Page: Learn more about the platform's purpose and vision.

Contact Page: Get in touch with the creators through provided contact information.

Dependencies
Express.js
EJS
Body Parser
Mongoose
dotenv
Configuration
The application can be configured using environment variables defined in the .env file. Make sure to set the DB_URL variable to your MongoDB connection URL.

Routes
/: Home page showing a list of blog posts.
/about: About page with information about the platform.
/contact: Contact page for getting in touch with the creators.
/compose: Page for writing and submitting new blog posts.
/home/:namePost: Route for accessing individual blog posts by title.

Contributing
Contributions to this project are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.


