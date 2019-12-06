<template>
    <div>
        <form action="/">
          <van-search id='search' class='search' :placeholder='defaultKeyword'  v-model='keyword' shape='round'  show-action
           @search='onSearch'> <div slot="action" @click="onSearch">搜索</div></van-search>
          </form>
        <ProductContainer :productList='productList' />
    </div>
</template>
<script>
import ProductContainer from '@/components/ProductContainer'
export default {
    name:'SearchPage',
    props:{defaultKeyword : '请输入商品的关键字!!!'},
    data(){
        return {
            keyword:'',
            productList:[]
        }
    },
  metaInfo: {
      title: 'This is the test',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' }
      ]
  },
    methods:{
        onSearch(){
            if(this.keyword == ''){
                this.$toast('请在搜索框输入文字后查询')
                return
            }

            let data = {
                keyword : this.keyword,
                platform: '1',
                shareUrl:false,
                pageNo:1,
                pageSize:20,
            }
            this.$axios.post('/good/fetch',data).then((response)=>{
                if(response.data && response.data.success){
                    this.productList = response.data.data
                }else{
                    this.$toast(response.data.msg)
                }
            })
            
        },
        toHome(){
            this.$router.push({path:'/'})
        }
    },
    components:{
        ProductContainer
    },
    mounted(){
        document.querySelector('#search').focus()
    },
    created(){
        let keyword = this.$route.query.keyword
        if(keyword){
            console.log(keyword)
            this.keyword = keyword; 
            this.onSearch()
        }
    }
}
</script>