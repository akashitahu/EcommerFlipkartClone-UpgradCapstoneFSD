# Ecommerce Web Application : FlipKart-Clone

This repository contains a "Ecommerce Web Application" i.e., "Flipkart-Clone" built using the MERN stack. Please follow the instructions to set it up.

## **Technologies Used**

As this is a MERN stack project. So, we are using:

1. MongoDB Server
2. Express
3. React
4. Node JS
5. Render & Netifly cloud platform (To deploy our project)

## **Features**

1. Create new user or User Login (if already registered)
2. Product List Page
3. Particular Product Detail Page
4. Interactive Cart
5. Search Bar (To search any product)
6. Going Back to Home Page (by clicking on Flipkart logo)
7. Interactive **"ADD TO CART"** Button
8. Interactive **"BUY NOW"** Button
9. Auto Calculations of Cart Items Price
10. Paytm Payment Gateway (using paytm API)

> [Working Demo](https://akash-ecommerce-clone.netlify.app/) : https://akash-ecommerce-clone.netlify.app/

### Instructions

1. Clone the repo and run `npm install`
2. This repository contains two folders "client" and "server".
3. **client** folder contains all the frontend programming.
4. **server** folder contains all the backend programming including database and routing api's.
5. After cloning the repo, you need to run `npm install` in **client** and **server** folder (installation is required to deal with npm errors)
6. Install all the following packages which I have used while building this project.

#### Required Packages
```sh
1. client> npm install
2. client> npm install @mui/material @emotion/react @emotion/styled
3. client> npm i @mui/icons-material
4. client> npm i react-multi-carousel
5. client> npm i axios
6. client> npm i redux
7. client> npm i redux-devtools-extension
8. client> npm i redux-thunk
9. client> npm i react-redux
10. client> npm i react-countdown
11. client> npm i react-router-dom
```

```sh
1. server> npm install
2. server> npm init
3. server> npm i express
4. server> npm i nodemon
5. server> npm i mongoose
6. server> npm i dotenv
7. server> npm i cors
8. server> npm i body-parser
9. npm i uuid
10. npm i formidable
11. npm i https
```

7. Now after installing all the packages, code require some modifications i.e., under **server>.env** folder you need to update your credentials and paytm key details.
8. In **server>.env** folder DB_USERNAME=`enter your user name of mongodb` and DB_PASSWORD=`enter your mongodb password`
9. Update all the paytm key id's. For example: PAYTM_MID, WEBSITE, CHANNEL_ID etc.
10. After finishing all the setup steps. Check your server connection by typing following command.

```sh
Command:
server> npm start
```

```sh
OUTPUT:
> server@1.0.0 start
> nodemon index.js  

[nodemon] 3.0.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
Server is running successfully on PORT 8000
Database Connected Successfully
```

11. Once Database connected successfully, open another terminal and move to client folder and run npm start.
**Note: Starting the development server... may take 4-5 minutes to start your project on local host depending upon your system specifications and network.**
    
```sh
Command:
client> npm start
```
```sh
OUTPUT:
> client@0.1.0 start 
> react-scripts start

Starting the development server...


You can now view client in the browser.

Local:           http://localhost:3000
On your Network: http://192.168.1.5:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully.
```

12. Congratulations!! That's all.

You can check demo of my project through this link :- https://akash-ecommerce-clone.netlify.app/

#### Deployement

We can deploy this MERN stack project anywhere. Most popular cloud platform (PaaS). Most popular one is **"Heroku"**. But it's paid. So I have used **Render & Netifly** cloud platform. **Render** stores my backend or we can say database and **Netifly** is used to deploy frontend by uploaind **build** of our **client** folder.