<template>
  <!-- 城市 -->
  <div class="city_body">
		<div class="city_list">
			<div class="city_hot">
				<h2>热门城市</h2>
				<ul class="clearfix">
					<li v-for="item in hotList" :key = "item.cityId">{{item.name}}</li>
				</ul>
			</div>
			<div class="city_sort" ref="city_sort">
				<div v-for="item in cityList" :key="item.index">
					<h2>{{item.index}}</h2>
					<ul>
						<li v-for="itemList in item.list" :key="itemList.id">{{itemList.nm}}</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="city_index">
			<ul>
				<li v-for="(item,index) in cityList" :key="item.index" @touchstart="handleToIndex(index)">{{item.index}}</li>	
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name : 'City',
	data(){
		return{
			cityList:[],
			hotList:[]
		}
	},
	mounted(){
		this.axios({
			url:'https://m.maizuo.com/gateway?k=2577079',
			headers:{
				'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1612833538569087461687297"}',
				'X-Host': 'mall.film-ticket.city.list'
			}
		}).then(res=>{
			// 判断数据请求是否成功
			var msg = res.data.msg;
			// console.log(res.data.data.cities);
			if(msg ==='ok'){
				var cities = res.data.data.cities
				var {cityList ,hotList} = this.formatCityList(cities)
				this.cityList = cityList
				this.hotList = hotList
				console.log(cityList);
			}
		})
	},
	methods : {
		// 处理数据将数据按首字母进行分类并添加到对应集合中
		formatCityList(cities){
			// 两个结果集用于存储分类后的城市与热门城市
			var cityList = [];
			var hotList = [];
			// 存储热门城市
			for (let i = 0; i < cities.length; i++) {
				if(cities[i].isHot){
					hotList.push(cities[i])
				}	
			}

			for (let i = 0; i < cities.length; i++) {
				// 截取数据中第一个首字母并转换成大写
				var firstLetter = cities[i].pinyin.substring(0,1).toUpperCase()
				if(toCom(firstLetter)){		//新添加index
					cityList.push({index : firstLetter,list : [{nm:cities[i].name,id : cities[i].cityId}]})
				}else{		//累加到已有index中
					for(var j = 0;j<cityList.length;j++){
						if(cityList[j].index === firstLetter){
							cityList[j].list.push({nm:cities[i].name,id : cities[i].cityId})
						}
					}
				}
			}
			// 判断集合中有没有存在该索引集合
			function toCom(firstLetter) {
				for (let i = 0; i < cityList.length; i++) {
					if(cityList[i].index ===firstLetter){
						return false;
					}
				}
				return true;
			}
			// 对集合中的index进行降序排序
			cityList.sort((n1,n2)=>{
				if(n1.index > n2.index){
					return 1;
				}else if(n1.index < n2.index){
					return -1;
				}else{
					return 0;
				}
			})
			// 将筛选好的集合返回
			return {
				cityList,hotList
			}
		},
		// 索引点击事件
		handleToIndex(index){
			var h2 = this.$refs.city_sort.getElementsByTagName('h2');
			this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop
		}

	}


}
</script>

<style>

</style>