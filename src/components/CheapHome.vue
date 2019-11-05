
<template>
<div class="search-div">
    <el-input class="product-input" v-model="keyword" placeholder="请输入需要查询的内容" ></el-input><el-button @click="search" type="primary" icon="el-icon-search">搜索</el-button>
     <p>{{ msg }}</p>
</div>
</template>

<script>
/* eslint-disable */
export default {
	name: 'CheapHome',
	data() {
    return {
		msg:'',
	  keyword: ''
	}},
	methods: {
		search(){
			let that = this;
			let params = {'keyword':this.keyword}
			this.$axios.post('http://47.110.231.239/good/search',{params}).then( (res) => {
				this.msg = res.data
			})	
		}
	}
}
</script>
<style scoped>
.search-div{
	margin: 0 auto;
	margin-top: 10em;
	width: 80vh;
}
.product-input{
	display:inline-flex;
	width: 60vh;
}
</style>
