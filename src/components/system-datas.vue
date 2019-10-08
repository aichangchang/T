<template>
	<div>
		<ul class="list-wrap clear">
		  <li v-for="(item, index) in FuelDispenserData" class="goods_list" :key="index">
			<router-link :to="{ name: 'Details', params: { detail: item }}">
			  <a><img v-bind:src="item.src" /></a>
			  <div class="proTitle">{{item.title}}</div>
			</router-link>
		  </li>
		</ul>
		<paginate
			:page-count="total_page"
			:page-range="3"
			:margin-pages="2"
			:click-handler="clickCallback"
			:prev-text="'<'"
			:next-text="'>'"
			:container-class="'pagination'"
			:page-class="'page-item'">
		  </paginate>
	</div>
</template>

<script>
	import systemDatas from '../../static/SystemData.json';
	export default{
		data() {
		  return{
		    FuelDispenserDataAll: [],
			FuelDispenserData:[],
			limit:9, // 每页条数
			total_page:1, // 总页数
		  }
		},
		methods:{
			clickCallback:function(pageNum){
				var that = this;
				if(pageNum <= that.total_page){
					console.log(pageNum)
					var startIndex = pageNum*that.limit - that.limit;
					var endIndex = pageNum*that.limit>that.FuelDispenserDataAll.length?that.FuelDispenserDataAll.length:pageNum*that.limit;
					console.log(startIndex +'---'+endIndex)
					var arr = [];
					for (var i=startIndex;i<endIndex;i++) {
						arr.push(that.FuelDispenserDataAll[i]);
					}
					that.FuelDispenserData = arr;
				}
			},
		},
		created:function(){
			var list = [];
			systemDatas.CentralControlSystem.map((item, index)=>{
			  if(index==0){
			    list.push(item)
			  }
			});
			systemDatas.TankMonitorSystem.map((item, index)=>{
			  if(index==0){
			    list.push(item)
			  }
			});
			this.FuelDispenserDataAll = list;
			var arr = [];
			var len = this.FuelDispenserDataAll.length>=this.limit?this.limit:this.FuelDispenserDataAll.length
			for (var i=0;i<len;i++) {
				arr.push(this.FuelDispenserDataAll[i]);
			}
			this.FuelDispenserData = arr;
			this.total_page = Math.ceil(this.FuelDispenserDataAll.length/this.limit);
		}
	}
</script>

<style lang="less" scoped="scoped">
	.list-wrap{
		width: 100%;
	}
	.goods_list{
	  padding-top: 3px;
	  margin-top: 2px;
	  float: left;
	  width: 207px;
	  margin-right: 8px;
	  margin-bottom: 8px;
	  overflow: hidden;
	  a {
	    a {
	      display: block;
	      width: 100%;
	      overflow: hidden;
	      img {
	        border: 1px #e9e9e9 solid;
	        width: 204px;
	        height: 235px;
	      }
	    }
	  }
	  .proTitle{
	    height: 32px;
	    line-height: 18px;
	    text-align: center;
	    font-size: 11px;
	    font-weight: bold;
	  }
	}
</style>
