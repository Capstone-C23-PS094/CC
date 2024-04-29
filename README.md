## Farmgenius-API

# 🌱 FarmGenius Mobile Application 
Smart agriculture solution using AI for Indonesian farmers: crop recommendations, disease management, sustainability

## Main Feature
### 1. Crop Recommendation <br>
   To be the number one agricultural brand in the world in terms of goodness and convenience in farming
### 2. Rice Leaf Detection <br>
   We are here to provide optimal service to customers by respecting all their requests and using new technology as a step to become the number one brand.

## Technology Architecture

### 2. Cloud Computing
- App Engine
- Cloud Run
- Node.Js
- Cloud SQL
- Cloud Storage
- Express JS Framework

  
## FarmGenius Developer
- [Riyandi Firman Pratama](https://github.com/riyandifirman)    | Mobile Development Engineer 
- [Reyhan Agus Priyatna](https://github.com/ReyhanPriyatna)      | Machine Learning Engineer
- [Iman Nurohman](https://github.com/imannrhman)             | Machine Learning Engineer
- [Husada Hutasoit](https://github.com/husadahts)           | Cloud Computing Engineer
- [Hedrin Sitorus](https://github.com/HedrinSitorus20)            | Machine Learning Engineer
- [Rolasta Sitorus](https://github.com/ifs20021-itdel)           | Cloud Computing Engineer

## Future Feature
1. Farmer Marketplace
2. All Plant Diseases Detection
3. Community Platform and store


The service available:
> Base url of this service is: http://localhost:5000/

- Authentications
  <pre>POST /login</pre>
  <pre>POST  /register</pre>
  <pre>POST  /logout</pre>
  <pre>POST  /refresh</pre>

- Users
  <pre>GET  /users/</pre>
  <pre>GET  /user/{userId}</pre>
  <pre>PUT  /user/{userId}</pre>
  <pre>DEL /user/{userId}</pre>

- Plant
  <pre>GET   /plants</pre>
  <pre>GET   /plant/{plantId}</pre>
  <pre>POST  /plant/{plantId}</pre>
  <pre>PUT   /plant/{plantId}</pre>
  <pre>DEL   /plant/{plantId}</pre> 

- Diseases
  <pre>GET   /diseases</pre>
  <pre>GET   /disease/{diseaseId}</pre>
  <pre>POST  /disease</pre>
  <pre>PUT   /disease/{diseaseId}</pre>
  <pre>DEL   /disease/{diseaseId}</pre>

- Predictions 
  <pre>POST /prediction/potato</pre>
  <pre>POST /prediction/peppers</pre>
  <pre>POST /predictions/rises</pre>

- History 
  <pre>GET  /historys/</pre>
  <pre>GET  /history/{historyId}</pre>
  <pre>POST /history</pre>
  <pre>DEL  /history/{historyId}</pre>

- Recomendation Store
  <pre>GET   /stores</pre>
  <pre>POST  /store/{storeId}</pre>
  <pre>PUT   /store/{storeId}</pre>
  <pre>GET   /store/{storeId}</pre>
  <pre>DEL   /store/{storeId}</pre>


# Quick Look

# Authentications

This service utilizes token-based authentication, requiring users to have an account for accessing its features. If you don't have an account, please create a new one. Once registered, you can generate an authentication token. This token serves as a means of logging in, requiring you to authenticate yourself using your email and password. If the authentication is successful, you will receive an access token, enabling you to access the service. If the authentication fails, an error message will be displayed.

The provided tokens are the accessToken and refreshToken. The refreshToken is used for token refreshing purposes. The accessToken remains valid for one hour. To refresh the token, you must send the refreshToken to the service. If the refreshToken is valid, a new accessToken will be provided. If the refreshToken is invalid, an error message will be returned.

By following this authentication process, you can securely access the service and enjoy its functionalities.

# Instructions
This project run in node js version 18.13.0. 
1. Install all dependencies with
```bash
npm install
```
2. Make your database and export from database/botaniscan.sql
3. Run server:
<P>-development<p>

```bash
npm run start-dev
```
<p>-production<p>

```bash 
npm run start  
```

# Environment

In order to run this project, you need to configure the following environment variables:

```bash

PORT= {your server port}

# Database Configuration MySQL
DB_HOST= {define your db host}
DB_USERNAME= {define your db username}
DB_PASSWORD= {define your db password}
DB_NAME= {define your db name}

# JWT TOKEN
SECRET_KEY= {define your secret key}
REFRESH_TOKEN_KEY= {define your refresh key}

```

### Dependency

* [Express Server](https://www.npmjs.com/package/express)
* [JWT](https://www.npmjs.com/package/jsonwebtoken)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
* [DotEnv](https://www.npmjs.com/package/dotenv)
* [Joi](https://www.npmjs.com/package/joi)
* [Nanoid](https://www.npmjs.com/package/nanoid)
* [Multer](https://www.npmjs.com/package/multer)
* [axios](https://www.npmjs.com/package/axios)
* [mysql2](https://www.npmjs.com/package/mysql2)

# Pull Requests

I'd be happy to review any pull requests that may better the TanamIn project, in particular if you have a bug fix, enhancement, or a new idea, you can contact us.
