const app = {
    data(){
        return{
            pics:[{name:"Art #1",url:"https://images.unsplash.com/photo-1612897747445-6849b81bab9e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80",like:false},
                {name:"Art #2",url:"https://images.unsplash.com/photo-1612870963422-b5cab65a0547?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=645&q=80",like:false},
                {name:"Art #3",url:"https://images.unsplash.com/photo-1612864800594-22b1b1c44de8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=712&q=80",like:false}
            ]
        }
    },
    computed:{
        picCount(){
            return this.pics.filter(n => n.like).length;
        }
    },
    methods:{
        likePic(index){
            this.pics[index].like = !this.pics[index].like;
        }
    }
};

Vue.createApp(app).mount('#app');