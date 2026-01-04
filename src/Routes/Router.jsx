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
import TermsAndConditions from "../Pages/TermsAndConditions/TermsAndConditions";
import AboutUs from "../Pages/AboutUs/AboutUs";
import DashboardLayout from "../Layouts/DashboardLayout";
import OverView from "../Pages/Dashboard/OverView/OverView";
import DashboardMybooks from "../Pages/Dashboard/DashboardMybooks/DashboardMybooks";
import Profile from "../Pages/Dashboard/Profile/Profile";
import AccountDetails from "../Pages/Dashboard/Profile/AccountDetails/AccountDetails";
import UpdateProfile from "../Pages/Dashboard/Profile/UpdateProfile/UpdateProfile";


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
        path: "terms",
        Component: TermsAndConditions,
      },
      {
        path: "about-us",
        Component: AboutUs,
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
  {
    path:'/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
      {
        index:true,
        Component: OverView
      }, 
      {
        path: '/dashboard/add-book',
        Component: AddBook
      },
      {
        path: '/dashboard/my-books',
        Component: DashboardMybooks
      },
      {
        path: '/dashboard/profile',
        Component: Profile,
        children: [
          {
            index:true,
            Component:AccountDetails,
          },
          {
            path: '/dashboard/profile/updateProfile',
            Component: UpdateProfile
          }
        ]
      }
    ]
  }
]);
