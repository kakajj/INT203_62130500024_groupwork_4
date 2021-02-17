const app = {
    data(){
        return{
            pics:[
                {name:"The Shoes",url:"https://images.unsplash.com/photo-1612897747445-6849b81bab9e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80",like:false},
                {name:"Snowing Day",url:"https://images.unsplash.com/photo-1612870963422-b5cab65a0547?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=645&q=80",like:false},
                {name:"Northern lights",url:"https://images.unsplash.com/photo-1612864800594-22b1b1c44de8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=712&q=80",like:false}
            ],
            searchField:'',
            isSearch: true,
        }
    },
    computed:{
        picCount(){
            return this.pics.filter(n => n.like).length;
        },
        filteredList(){
            return this.pics.filter(pic => {
                return pic.name.toLowerCase().includes(this.searchField.toLowerCase())
              });
        },
    },
    methods:{
        likePic(index){
            this.pics[index].like = !this.pics[index].like;
        },
        startSearch(){
            this.isSearch = !this.isSearch;
        },
        cancelSearch(){
            this.isSearch = !this.isSearch;
            this.searchField = '';
        },
    }
};

Vue.createApp(app).mount('#app');