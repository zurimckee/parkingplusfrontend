# 🅿️ SmartParkingPlus - Frontend

**currently inactive because my railway free plan ran out! currently debating whether or not to pay to have it deployed or migrate everything 😫**


### check it out! [smartparkingplus](https://smartparkplusapp.vercel.app/)

### overview
smartparkingplus is a full-stack web app designed to streamline parking lot/spot management through a modern frontend interface and a cloud-hosted backend powered by a custom mysql database. this repository contains the frontend application, which communicates with a backend api deployed alongside a mysql database hosted on Railway.

### features
* constantly accurate spot display, updating data every sixty seconds
* pulls from a cloud-based MySQL database based in Railway
* fully optimized for mobile and desktop viewing.
* visual representation of parking locations.
* cloud-hosted scalable backend (railway) 
* full crud operations via rest api

### tech stack
front-end
- [X] react/vite
- [X] javascript
- [X] css
- [X] deployed on vercel
back-end
- [X] node.js/express
- [X] mysql
- [X] deployed on railway

### data flow
[ React Frontend ]
        |
        |  HTTP (REST API)
        ↓
[ Backend API - Railway ]
        |
        |  SQL Queries
        ↓
[ MySQL Database - Railway ]





Created using React(Vite), Javascript, Node/Express, Deployed using Vercel


