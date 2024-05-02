# React router DOM

- React router DOM is a package that allows you to use routing in your react application.

## Installation

- To install react router dom, you can use npm.

```bash
npm install react-router-dom
```

## 1. BrowserRouter

- To use react router dom, you need to import the BrowserRouter in the main.jsx file and wrap the App component with it.

```jsx
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

The BrowserRouter can be also renamed to Router. This practice is common in the react community because it makes this component easier to identify.

```jsx
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
```

Both methods are correct and you can use the one that you prefer.

## 2. Routes

- The Routes component is used to define the routes of your application. It is a component that receives a list of Route components as children.

```jsx
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
```

As you can see, the Route component receives two props: path and element. The path prop is used to define the route of the component and the element prop is used to define the component that will be rendered when the route is accessed.
Amazing! Now you have a basic routing system in your application.

## 3. Link

React router dom provides a component called Link that is used to navigate between routes. Since our app is a single page application, we don't want to reload the page when we navigate between routes. The Link component is used to navigate between routes without reloading the page (if we use a regular anchor tag, the page will be reloaded).

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
```

Nice! Now you have a navigation system in your application. Import the navbar component in the App component and you will be able to navigate between routes on every page of your application.

```jsx
function App() {
  return (
    <div>
      <Navbar />{" "}
      {/* Navigation bar out of the Routes children is going to be always available*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
```

## 4. Route parameters

- Sometimes you need to pass parameters to a route. For example, if you have a route that shows the details of a product, you need to pass the id of the product to the route. React router dom allows you to pass parameters to a route using the colon syntax.

```jsx
<Route path="/product/:id" element={<Product />} />
```
In the example above, the route /product/:id receives a parameter called id. You can access this parameter in the Product component using the useParams hook.

```jsx
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams(); // Access the id parameter in the route

  return <h1>Product id: {id}</h1>;
}
```
If the route is /product/1, the Product component will render Product id: 1.

## 5. Query parameters
Sometimes you need to pass query parameters to a route. Remember the Amazon search bar? When you search for a product, the search term is passed as a query parameter to the route. 

For example, the path `/?search=iphone` passes the query parameter search with the value iphone to the route. You can access query parameters in the component using the useSearchParams hook.

```jsx
import {useSearchParams} from "react-router-dom";

function Search() {
  const [searchParams] = useSearchParams();

  return <h1>Search term: {searchParams.get("search")}</h1>;
}
```

If the route is /?search=iphone, the Search component will render Search term: iphone.

And that's enough for now! You have learned the basics of react router dom. You can now create a navigation system in your application and pass parameters to routes! Well done! 🎉

This is the official documentation of react router dom. You can find more information about this package here: 
[React Router DOM](https://reactrouter.com/en/6.23.0/start/overview)