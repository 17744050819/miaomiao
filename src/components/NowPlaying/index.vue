<template>
<!-- 正在热映 -->
  <div class="movie_body">
		<ul>
			<li v-for="item in movieList" :key="item.id">
				<div class="pic_show"><img :src="item.img | setWH('128.180')"></div>
				<div class="info_list">
					<h2>{{item.nm}} <img :src="item.version | setImg()" alt=""></h2>
					<p>观众评 <span class="grade">{{item.sc}}</span></p>
					<p>主演: {{item.star}}</p>
					<p>{{item.showInfo}}</p>
				</div>
				<div class="btn_mall">
					购票
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name : 'NowPlaying',
	data(){
		return{
			movieList:[]
		}
	},
	mounted(){
		this.axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=6E572B606A7011EB8D6275421C8004531246F4D479B14A83A41FD07895DB1178&optimus_risk_level=71&optimus_code=10').then((res)=>{
			// console.log(res.data.movieList);
			this.movieList = res.data.movieList
		})
	},

}
</script>

<style>

</style>