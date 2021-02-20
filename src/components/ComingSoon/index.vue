<template>
<!-- 即将上映 -->
    <div class="movie_body">
        <ul>
            <li v-for="item in coming" :key="item.id">
                <div class="pic_show"><img :src="item.img | setWH('128.180')"></div>
                <div class="info_list">
                    <h2>{{item.nm}} <img :src="item.version | setImg()" alt=""></h2>
                    <p><span class="person">{{item.wish}}</span> 人想看</p>
                    <p>主演: {{item.star}}</p>
                    <p>{{item.rt}}</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : 'ComingSoon',
    data(){
        return{
            coming:[]
        }
    },
    mounted(){
		this.axios.get('/ajax/comingList?ci=10&token=&limit=10&optimus_uuid=6E572B606A7011EB8D6275421C8004531246F4D479B14A83A41FD07895DB1178&optimus_risk_level=71&optimus_code=10').then((res)=>{
			// console.log(res.data.coming);
			this.coming = res.data.coming
		})
	}
}
</script>

<style>

</style>