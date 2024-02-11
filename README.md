# notco.in

Welcome to the notco.in repository! This repository contains a Svelte web application for viewing statistics related to the game Notcoin. Please note that this application is built using regular Svelte, not SvelteKit.
Also note that this is an unofficial version of the site. And only its open source implementation.

## Overview

The purpose of this application is to provide users with a platform to view statistics related to the game Notcoin. Whether you're interested in tracking player scores, analyzing game data, or simply exploring insights, notco.in has got you covered.

## Deployment

### Cloudflare Pages

To deploy the application on Cloudflare Pages, follow these steps:

1. Fork this repository.
2. Log in to your Cloudflare account or sign up for a new account if you don't have one.
3. Navigate to the Cloudflare Pages dashboard.
4. Click on "Create a project" and select your GitHub repository.
5. Configure the build settings as needed.
6. Deploy the application.

### Own Server (Using Nginx)

To deploy the application on your own server using Nginx, follow these steps:

1. Clone this repository onto your server.
2. Install Node.js if not already installed.
3. Navigate to the project directory and install dependencies using `npm i`.
4. Build the project using `npm run build`.
5. Configure Nginx to serve the built files. Below is a sample Nginx configuration:

   ```nginx
   server {
       listen 80;
       server_name your_domain.com;

       location / {
           root /var/www/notco.in/public;
           index index.html;
           try_files $uri $uri/ /index.html;
       }
   }
   ```

6. Restart Nginx.

### Local Development

To set up the application for local development, follow these steps:

1. Clone this repository onto your local machine.
2. Install Node.js if not already installed.
3. Navigate to the project directory and install dependencies using `npm i`.
4. Start the development server using `npm run dev`.
5. Open your browser and navigate to `http://localhost:8080` to view the application.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the [GNU License](LICENSE).
