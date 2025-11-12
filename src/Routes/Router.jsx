import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import AllBooks from "../Pages/AllBooks/AllBooks";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import MyBooks from "../Pages/MyBooks/MyBooks";
import AddBook from "../Pages/Add-book/AddBook";
import Home from "../Pages/Home/Home";
import BookDetails from "../Pages/BookDetails/BookDetails";
import PageNotFound from "../Pages/PageNotFound";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "all-books",
        Component: AllBooks,
      },
      {
        path: 'auth/login',
        Component: Login
      },
      {
        path: 'auth/register',
        Component: Register
      },
      {
        path: 'my-books',
       element: <PrivateRoute><MyBooks></MyBooks></PrivateRoute>
      },
      {
        path: 'add-book',
        element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
      },
      {
        path: 'book-details/:id',
        element:<PrivateRoute><BookDetails></BookDetails></PrivateRoute>
      },
      {
        path: '/*',
        Component: PageNotFound
      }

      
    ],
  },
]);
