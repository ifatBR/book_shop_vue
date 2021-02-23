import { booksService } from '../services/books.service.js';

export default {
    props: ['books', 'search'],
    template: `
    <div class="google-books-filtered clean-list">
        <li v-for="book in books"><button @click="addBook(book)">+</button>{{book.volumeInfo.title}}</li>
    </div>
    `,
    methods: {
        addBook(book) {
            booksService.addGoogleBook(book);
        },
    },
};
