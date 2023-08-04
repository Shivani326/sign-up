# ImpactBoard Signup and Login Flow

## Introduction

This README provides a comprehensive guide to understanding and deploying the Signup and Login flow of ImpactBoard.

## Deployment Steps

To deploy the ImpactBoard Signup and Login flow, please follow these steps carefully:

### Prerequisites

Before initiating the deployment process, ensure that the following prerequisites are met:

1. *Environment Setup*: Have a suitable development environment with the required tools and packages installed. This includes Node.js, npm (Node Package Manager), a code editor of your choice, and a Next.js app 

2. *Database Configuration*: Set up a compatible database system. We have used NoSQL (Mongodb Atlas)

### Step 1: Clone the Repository

Begin by cloning the ImpactBoard repository from GitHub. Open your terminal and execute the following command:

bash
git clone https-link(of the repo)


### Step 2: Install Dependencies

Navigate to the cloned repository directory:

bash
cd signup-login

install the project dependencies using npm:

bash
npm install


### Step 3: Ensure that the correct mongodb atlas connection link is pasted in the .env file
Create a .env file.
Add these three links in .env file:

MONGODB_URI=<paste your mongodb URI>
NEXTAUTH_SECRET=<type in any string>
NEXTAUTH_URL=http://localhost:3000

Your MONGODB_URI should look like: 
MONGODB_URI="mongodb+srv://USER_NAME:<password>@cluster0.auph2xd.mongodb.net/DATABASE_NAME"

### Step 4: Run the code

bash
npm run dev

```
this will give you http://localhost:3000 , follow the link and it will take you to the browser.
Your signin page is there!

Now, the signup-login is completed. If you are a new user, signup if not, sign in!