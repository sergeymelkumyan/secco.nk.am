export default {
    siteName: 'Scnkr',
    defaultLanguage: 'hy',
    apiPrefix: '/api/',
    routes: {
        default: {
            home: {
                path: '/',
                slug: 'home',
                name: 'home',
                component: 'Home',
                autoload: true
            },
            members: {
                path: '/members',
                slug: 'members',
                name: 'members',
                component: 'Members',
                autoload: true
            },
            memberDetail: {
                path: '/member/:slug',
                slug: 'member',
                name: 'memberDetail',
                component: 'MemberDetail',
                autoload: false
            },
            about: {
                path: '/about',
                slug: 'about',
                name: 'about',
                component: 'About',
                autoload: true
            },
            history: {
                path: '/history',
                slug: 'history',
                name: 'history',
                component: 'History',
                autoload: true
            },
            sergey: {
                path: '/sergey',
                slug: 'sergey',
                name: 'sergey',
                component: 'Sergey',
                autoload: true
            },
            pressRelease: {
                path: '/press-release',
                slug: 'posts/press',
                name: 'pressRelease',
                component: 'PressRelease',
                autoload: true
            },
            announcements: {
                path: '/announcements',
                slug: 'posts/announcement',
                name: 'announcements',
                component: 'Announcements',
                autoload: true
            },
            speeches: {
                path: '/speeches',
                slug: 'posts/speeches',
                name: 'speeches',
                component: 'Speeches',
                autoload: true
            },
            sessions: {
                path: '/sessions',
                slug: 'posts/sessions',
                name: 'sessions',
                component: 'Sessions',
                autoload: true
            },
            photos: {
                path: '/photos',
                slug: 'photos',
                name: 'photos',
                component: 'Gallery',
                autoload: true
            },
            photo: {
                path: '/photo/:slug',
                slug: 'photo',
                name: 'photo',
                component: 'GalleyDetail',
                autoload: false
            },
            videos: {
                path: '/videos',
                slug: 'videos',
                name: 'videos',
                component: 'Video',
                autoload: true
            },
            search: {
                path: '/search',
                name: 'search',
                component: 'Search'
            },
            post: {
                path: '/post/:slug',
                name: 'post',
                component: 'Post'
            },
            docs: {
                name: 'documents',
                path: '/documents/',
                slug: 'documents',
                component: 'Docs',
                autoload: true
            }
        }
    }
}
