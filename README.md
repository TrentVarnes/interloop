# Capstone Project: Interloop Dashboard
![done](https://user-images.githubusercontent.com/75393933/232374275-df890db7-07e5-4e7f-8686-b20e5cb6ac1f.jpg)

## Watch our Slick Video:
https://www.youtube.com/watch?v=z6UE6yfUgis
## Table of Contents:
1. [Overview](#overview)
2. [How to Use](#howto)
3. [System Design](#sysdesign)
    1. [Register Page](#reg)
    2. [Login Page](#log)
    3. [Home Page](#home)
    4. [Dashboard Pages](#dash)

## Overview <a name="overview"></a>
- Client: Interloop.AI
- Develop a web application that displays an embedded Dashboard for both company data and individual employee data

- Web app - Next.js
- Authentication - Next.auth, MongoDB
- Dashboard - PowerBI

## How to Use <a name="howto"></a>
- This Web Application requires a verfied @interloop.ai email address
- To run a mock website:

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## System Design <a name="sysdesign"></a>
This section describes the user interface of this system. Each page is shown and specific features and functionality are listed.

### Login Page <a name="log"></a>
Input boxes will display a message if any credentials are incorrect, i.e. email or password is incorrect or user does not exist. Users are encouraged to sign up if they do not have an account yet.

<img width="800" alt="Screenshot 2023-04-19 at 9 23 16 AM" src="https://user-images.githubusercontent.com/75393933/233088278-d1681555-a8b9-4f80-a5b9-dc17b1ff443f.png">

### Register Page <a name="reg"></a>

Input boxes display a message when input is incorrect, giving the user adequate opportunities to fill out the form correctly. User is notified if registration was successful or not.

<img width="800" alt="Screenshot 2023-04-21 at 2 38 39 PM" src="https://user-images.githubusercontent.com/75393933/233711090-5c570a53-d3f4-41f2-91ca-f37ab12e4036.png">

### Home Page <a name="home"></a>

This is the landing page after logging in. Main features include two widgets that are also redirects to other pages. Top widget is a glipse at an individuals personal dashboard and bottom widget is a glipse of the teams dashboard. Both are embeded using PowerBI and are fully interactive.

<img width="800" alt="Screenshot 2023-04-25 at 4 46 41 PM" src="https://user-images.githubusercontent.com/75393933/234399919-1ae94ea1-aa68-404f-b209-f90d1b4aed83.png">

### Team Dashboard  <a name="dash"></a>
This page entails an embedded dashboard powered by PowerBI. It is dynamic such that when data is updated within the connected excel file, all the widgets update as well. Each widget has a different purpose for visualizing data in various ways. This specific page is the "team" dashboard such that all the data shown is an aggregate of individuals on a specific team. 

<img width="800" alt="Screenshot 2023-04-21 at 2 22 28 PM" src="https://user-images.githubusercontent.com/75393933/233708544-35d857ce-1f63-4b51-bc95-eceb76cd85f5.png">

### Personal Dashboard  <a name="dash"></a>
This page entails an embedded dashboard powered by PowerBI. It is dynamic such that when data is updated within the connected excel file, all the widgets update as well. Each widget has a different purpose for visualizing data in various ways. This specific page is the "profile" dashboard such that all the data shown is specific to one individual.

<img width="800" alt="Screenshot 2023-04-25 at 4 47 03 PM" src="https://user-images.githubusercontent.com/75393933/234399976-2642f72b-1d97-4f29-bfd7-04a98f17a226.png">
