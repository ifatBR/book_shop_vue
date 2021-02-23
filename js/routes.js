import bookApp from './pages/book-app.cmp.js';
import homePage from './pages/home-page.cmp.js';
import bookDetails from './pages/book-details.cmp.js';
import about from './pages/about.cmp.js';
import reviewAdd from './pages/review-add.cmp.js';
const routes = [
    {
        path: '/',
        component: homePage,
    },
    {
        path: '/book',
        component: bookApp,
    },
    {
        path: '/about',
        component: about,
    },
    {
        path: '/book/:bookId',
        component: bookDetails,
    },
    {
        path: '/book/:bookId/:bookTitle/review',
        component: reviewAdd,
    },
];

export const myRouter = new VueRouter({ routes });
