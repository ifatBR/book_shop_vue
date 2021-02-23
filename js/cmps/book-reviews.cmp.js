export default{
    props:['reviews'],
    template:`
    <section>
        <ul>
            <li v-if="reviews" v-for="review in reviews">
                <h3>Writte by: {{review.userName}}</h3>
                <h5>Rating: {{review.rate}}</h5>
                <h4>Read at: {{review.readAt}}</h4>
                <p>{{review.txt}}</P>
            </li>
        </ul>
    </section>
    `,

    
}   