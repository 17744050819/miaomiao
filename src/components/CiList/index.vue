<template>
<!-- 影院组件 -->
    <div class="cinema_body">
        <ul>
            <li v-for="item in cinemas" :key="item.cityId">
                <div>
                    <span>{{item.name}}</span>
                    <span class="q"><span class="price">{{item.lowPrice }}</span> 元起</span>
                </div>
                <div class="address">
                    <span>{{item.address}}</span>
                    <span>1763.5km</span>
                </div>
                <div class="card">
                    <div>小吃</div>
                    <div>折扣卡</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : 'CiList',
    data(){
        return{
            cinemas:[]
        }
    },
    mounted(){
        this.axios({
            url:'https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=1540605',
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1612833538569087461687297"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then((res)=>{
            console.log(res.data.data.cinemas);
            this.cinemas = res.data.data.cinemas
        })
    },
}
</script>

<style>

</style>