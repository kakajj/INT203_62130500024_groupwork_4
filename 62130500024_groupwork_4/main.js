const app = {
    data(){
        return{
            pics:[
                {name:"Rose LoveSickGirl",url:"./images/1.jpg",like:false},
                {name:"Lisa LoveSickGirl",url:"./images/2.jpg",like:false},
                {name:"Jennie LoveSickGirl",url:"./images/3.jpg",like:false},
                {name:"Jisoo LoveSickGirl",url:"./images/4.jpg",like:false},
                {name:"Rose HowYouLikeThat",url:"./images/h3.jpg",like:false},
                {name:"Lisa HowYouLikeThat",url:"./images/h4.jpg",like:false},
                {name:"Jennie HowYouLikeThat",url:"./images/h1.jpg",like:false},
                {name:"Jisoo HowYouLikeThat",url:"./images/h2.jpg",like:false}
            ],
            heart:0,
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
            this.heart++;
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