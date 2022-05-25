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
                { title: 'Name of the Wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg' },
                { title: 'The Way of Kings', author: 'Brandon Sanderson', img: 'assets/2.jpg' },
                { title: 'The Final Empire', author: 'Brandon Sanderson', img: 'assets/3.jpg' }
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
    }

})

app.mount('#app');