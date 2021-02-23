import booksApp from './pages/book-app.cmp.js';
import { myRouter} from './routes.js'
import appHeader from './cmps/app-header.cmp.js';

const options = {
    el: '#app',
    router: myRouter,
    template: `
    <section>
        <app-header/>
        <router-view />
    </section>
    `,
    components: {
        appHeader,
        booksApp,
    },
};

const app = new Vue(options);
