const app=Vue.createApp({
    data(){
        return{
            product:'Socks',
            descripe:'A warm fuzzy pair of socks.',
            image:'./ASSETS/images/socks_blue.jpg',
            url:'https://cn.vuejs.org/',
            instock:true,
            onSale:true
        }
    }
});