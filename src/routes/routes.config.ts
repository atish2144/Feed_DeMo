import { lazy } from "react";

// Lazy load your page components
const Home = lazy(() => import("../pages/home/home"));
const Login = lazy(() => import("../pages/auth/login/login"));
const CreateAccount=lazy(()=>import("../pages/auth/createAccount/CreateAccount"));
const Edit=lazy(()=>import("../pages/auth/Edit/Edit"));
const ForgetPassword=lazy(()=>import("../pages/auth/ForgetPassword/ForgetPassword"))

/*
 * Route path: URLs
 */
export const paths = {
  home: "/home",
  login: "/auth/login",
  CreateAccount:"/auth/signup",
  Edit:"/auth/edit",
  ForgetPassword:"/auth/ForgetPassword"
};

/*
 * Routes: path & lazy loaded component
 */
export const routes: any[] = [
  {
    path: paths.home,
    component: Home,
  },
  {
    path: paths.login,
    component: Login,
  },
  {
    path: paths.CreateAccount,
    component: CreateAccount,
  },
  {
    path: paths.Edit,
    component: Edit,
  },
  {
    path:paths.ForgetPassword,
    component:ForgetPassword,
  }
];
