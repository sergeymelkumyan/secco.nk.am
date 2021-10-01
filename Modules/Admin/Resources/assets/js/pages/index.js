import {lazy} from "react"

const Dashboard = lazy(() => import(/* webpackChunkName: "js/admin/dashboard"*/ './Dashboard'))
const NotFound = lazy(() => import(/* webpackChunkName: "js/admin/not-found"*/'./Exceptions/NotFound'))
const Login = lazy(() => import(/* webpackChunkName: "js/admin/login"*/'./Auth/Login'))
const Forgot = lazy(() => import(/* webpackChunkName: "js/admin/forgot"*/'./Auth/Forgot'))
const Reset = lazy(() => import(/* webpackChunkName: "js/admin/reset"*/'./Auth/Reset'))
const MediaManager = lazy(() => import(/* webpackChunkName: "js/admin/media"*/'./MediaManager'))
const Directory = lazy(() => import(/* webpackChunkName: "js/admin/media"*/'./MediaManager/directory'))
const Account = lazy(() => import(/* webpackChunkName: "js/admin/account"*/'./Account'))

export {
    Dashboard,
    NotFound,
    Login,
    Forgot,
    Reset,
    MediaManager,
    Directory,
    Account
}
