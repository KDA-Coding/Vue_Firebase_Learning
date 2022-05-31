const app = Vue.createApp({
    
    data() {
        return{
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,

            books: [
                { title: 'Name of the Wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg', isFav: true },
                { title: 'The Way of Kings', author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: false },
                { title: 'The Final Empire', author: 'Brandon Sanderson', img: 'assets/3.jpg', isFav: true }
            ],

            url: 'http://www.thenetninja.co.uk',

        }
    },

    methods: {

        changeTitle(title) {
            this.title= title
        },

        toggleShowBooks () {
            this.showBooks = !this.showBooks
        },

        toggleFav(book) {
            book.isFav = !book.isFav;
            //console.log("Method Called, isFav for " + book.title + " now: " + book.isFav);
        },

        handleEvent(e, num) {
            console.log(e, e.type)

            if(data) {
                console.log(data);
            }
        },

        handleMousemove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }   
    },

    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav); 
        }
    }

})

app.mount('#app');

// Challenge - Add to Favs
// Attach a click event to each li tag (foreach book)
// when a user clicks an li, toggle the 'isFav' property of that book.