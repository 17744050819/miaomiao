<template>
<!-- 搜索 -->
    <div class="search_body">
        <div class="search_input">
            <div class="search_input_wrapper">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" v-model="message">
            </div>					
        </div>
        <div class="search_result">
            <h3>电影/电视剧/综艺</h3>
            <ul>
                <li v-for="item in moviesList" :key="item.id">
                    <div class="img"><img :src="item.img |setWH('128.180')"></div>
                    <div class="info">
                        <p><span>{{item.nm}}</span><span>{{item.sc}}</span></p>
                        <p>{{item.star}}</p>
                        <p>{{item.cat}}</p>
                        <p>{{item.rt}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Search',
    data(){
        return{
            message:'',
            moviesList:[]
        }
    },
    watch : {
        message(newVal){
             var that = this;
            // 取消上一次请求
            this.cancelRequest();

            this.axios.get(`/ajax/search?kw=${newVal}&cityId=10&stype=-1`,{
                cancelToken: new this.axios.CancelToken(function(c) {
                    that.source = c;
                })
            }).then((res)=>{
                console.log(res.data.movies.list);
                this.moviesList = res.data.movies.list
            }).catch((err) => {
                if (axios.isCancel(err)) {
                    console.log('Rquest canceled', err.message); //请求如果被取消，这里是返回取消的message
                } else {
                    //handle error
                    console.log(err);
                }
            })       
        }
    },
    methods: {
         cancelRequest(){
            if(typeof this.source ==='function'){
                this.source('终止请求')
            }
        }
    }
}
</script>

<style>

</style>