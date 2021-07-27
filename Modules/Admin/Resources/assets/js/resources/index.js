import {lazy} from "react"

const Posts = lazy(() => import(/* webpackChunkName: "js/admin/posts"*/ './Posts'))
const PostsCreate = lazy(() => import(/* webpackChunkName: "js/admin/posts"*/ './Posts/create'))
const PostsEdit = lazy(() => import(/* webpackChunkName: "js/admin/posts"*/ './Posts/edit'))

const Members = lazy(() => import(/* webpackChunkName: "js/admin/members"*/ './Members'))
const MembersCreate = lazy(() => import(/* webpackChunkName: "js/admin/members"*/ './Members/create'))
const MembersEdit = lazy(() => import(/* webpackChunkName: "js/admin/members"*/ './Members/edit'))

const Galleries = lazy(() => import(/* webpackChunkName: "js/admin/galleries"*/ './Galleries'))
const GalleriesCreate = lazy(() => import(/* webpackChunkName: "js/admin/galleries"*/ './Galleries/create'))
const GalleriesEdit = lazy(() => import(/* webpackChunkName: "js/admin/galleries"*/ './Galleries/edit'))

const Documents = lazy(() => import(/* webpackChunkName: "js/admin/documents"*/ './Documents'))
const DocumentsCreate = lazy(() => import(/* webpackChunkName: "js/admin/documents"*/ './Documents/create'))
const DocumentsEdit = lazy(() => import(/* webpackChunkName: "js/admin/documents"*/ './Documents/edit'))


const About = lazy(() => import(/* webpackChunkName: "js/admin/about"*/ './Info/About'))
const History = lazy(() => import(/* webpackChunkName: "js/admin/history"*/ './Info/History'))


export {
    Posts,
    PostsCreate,
    PostsEdit,
    Members,
    MembersCreate,
    MembersEdit,
    Galleries,
    GalleriesCreate,
    GalleriesEdit,
    Documents,
    DocumentsCreate,
    DocumentsEdit,
    About,
    History
}
