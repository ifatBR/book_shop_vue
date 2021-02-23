import {booksService} from '../services/books.service.js'

export default{
    template:`
    <section class="book-add-container">
        <datalist id="google-books" >
            <option v-for="(book) in googleBooks" :value="book.volumeInfo.title">{{book.volumeInfo.title}}</option>
        </datalist>
        <label for="">Search book</label>   
        <input type="search" list="google-books"/>
    </section>
    `,
    data(){
        return{
            googleBooks:null,
        }
    },
    created(){
        booksService.getGoogleBooks().then(books => this.googleBooks = books.items)
        
    }
    
}