# E-Commerce Project 

## Overview

This is a simple e-commerce application built with React using Vite for fast development. The project showcases a clean and responsive UI for browsing products and viewing detailed information about each item.

## Features

- **Fast Development**: Built with Vite for a faster development experience.
- **Responsive Design**: Utilizes Bootstrap for responsive and mobile-friendly layouts.
- **Routing**: Implemented with React Router for smooth navigation between pages.
- **Loading and Error Handling**: Displays loading indicators and error messages for improved user experience.
- **Dynamic Data**: Fetches product data from a fake API, allowing for realistic interactions.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation frontend tooling for fast builds and hot module replacement.
- **Bootstrap**: CSS framework for responsive design.
- **React Router**: For navigation and routing within the app.
- **React Icons**: For easy integration of customizable icons.
- **JSX**: Syntax extension for JavaScript, allowing HTML-like code in React.
- **CSS & HTML**: Styling and structure of the application.
- **Fake API**: Used for simulating backend data fetching.

## Live Demo

Check out the live demo of the project [here](https://e-commerce-elevate.netlify.app/).

## Project Structure

```
/src
  ├───components
  │   ├───buttons
  │   ├───card
  │   ├───footer
  │   └───navbar
  └───routes
      ├───layout
      └───pages
```

## Pages

### Home Page

- Displays a list of product cards.
- Each card includes a button to view more details about the product.

### Product Detail Page

- Shows detailed information about the selected product:
  - Rating
  - Color
  - Price
  - Description
  - Purchase button

## Installation

1. Clone the repository:
 
   
2. Navigate into the project directory:
   ```bash
   cd e-commerce-project
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5173`.

## Usage

- Browse the products on the home page.
- Click the button on a product card to navigate to the product detail page for more information.

## Error Handling

- The application includes mechanisms to display loading indicators while data is being fetched.
- If an error occurs during data fetching, an error message will be shown to the user.

