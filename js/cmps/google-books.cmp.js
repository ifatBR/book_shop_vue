import { booksService } from '../services/books.service.js';

export default {
    props: ['books', 'search'],
    template: `
    <div class="google-books-filtered clean-list">
        <li v-for="(book) in filteredBooks"><button @click="addBook(book)">+</button>{{book.volumeInfo.title}}</li>
    </div>
    `,
    data(){
        return{
            filteredBooks:null,
        }
    },
    methods: {
        addBook(book) {
            booksService.addGoogleBook(book);
        },
    },
    created(){
        this.filteredBooks = this.books;
    },
    watch:{
        search(val){
            val = val.toLowerCase();
            this.filteredBooks = this.books.filter(book => book.volumeInfo.title.toLowerCase().includes(val))
        }
    }

}
