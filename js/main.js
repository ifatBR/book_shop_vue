import booksApp from './pages/book-app.cmp.js';
import { myRouter} from './routes.js'
import appHeader from './cmps/app-header.cmp.js';
import userMsg from './cmps/user-msg.cmp.js'


const options = {
    el: '#app',
    router: myRouter,
    template: `
    <section>
        <user-msg />
        <app-header/>
        <router-view />
    </section>
    `,
    components: {
        appHeader,
        booksApp,
        userMsg
    },
};

const app = new Vue(options);
