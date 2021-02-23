import {booksService} from '../services/books.service.js'
import googleBooks from '../cmps/google-books.cmp.js'
export default{
    template:`
    <section class="book-add-container">
        <div class="book-add">
            <datalist id="google-books" >
                <option v-for="(book) in googleBooks" :value="book.volumeInfo.title">{{book.volumeInfo.title}}</option>
            </datalist>

            <label for="">Search book</label>  
            <input type="search" v-model="search" list="google-books"/>

            <ul class="google-books-container">
                <google-books :search="search" :books="googleBooks"/>
            </ul> 
        </div>
    </section>
    `,
    data(){
        return{
            googleBooks:null,
            search:''
        }
    },
    created(){
        booksService.getGoogleBooks().then(books => this.googleBooks = books.items)
        ;
        
    },
    components:{
        googleBooks
    }
    
}