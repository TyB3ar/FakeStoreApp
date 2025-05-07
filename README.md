# FakeStore App

The FakeStore App is a React-based e-commerce application that simulates an online store. It allows users to browse products, view product details, and navigate seamlessly between pages. The app is built with modern web technologies and libraries to ensure a smooth and responsive user experience.

## Features

- **Product Listing**: Displays a list of products fetched from a fake store API.
- **Product Details**: View detailed information about a selected product.
- **Add to Cart**: Simulate adding products to a shopping cart.
- **Add New Product**: Interactive form that enables user to add a new product. 
- **Edit and Delete Products**: Simulate Editing product details or Deleting them entirely.
- **Responsive Design**: Fully responsive UI using React Bootstrap.
- **Routing**: Seamless navigation between pages using React Router DOM.
- **Data Fetching**: Fetches product data dynamically using Axios.

## Technology Stack

- **React**: Core framework for building the user interface.
- **React Bootstrap**: Provides pre-styled components for a responsive and modern design.
- **Axios**: Handles HTTP requests to fetch data from the fake store API.
- **React Router DOM**: Enables client-side routing for a single-page application experience.

## Integration Details

### React Bootstrap
React Bootstrap is used to style the application and ensure responsiveness. Components like `Navbar`, `Card`, and `Button` are utilized to create a clean and professional UI.

### Axios Data Fetching
Axios is used to fetch product data from the FakeStore API. The data is retrieved asynchronously and displayed dynamically in the app. Example:
```javascript
import axios from 'axios';

const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    setProducts(response.data);
};
```

### React Router DOM
React Router DOM is used to handle navigation between pages such as the product listing and product details. Example:
```javascript
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

<Router>
    <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/product/:id" component={ProductDetails} />
    </Switch>
</Router>
```

## How to Run the App

1. Clone the repository:
     ```bash
     git clone https://github.com/your-username/fakestore-app.git
     ```
2. Navigate to the project directory:
     ```bash
     cd fakestore-app
     ```
3. Install dependencies:
     ```bash
     npm install
     ```
4. Start the development server:
     ```bash
     npm start
     ```
5. Open your browser and navigate to `http://localhost:3000`.

