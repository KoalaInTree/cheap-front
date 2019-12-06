<template>

    <div>
       <van-search :placeholder="defaultKeyword" v-model="keyword"  shape='round' @focus='toSearch'/>
    </div>
</template>
<script>
export default {
    name:'CheapHome',
    data(){
        return {
            keyword:'',
            defaultKeyword:'请输入要查询的关键字~'
        }
    },
    methods:{
        toSearch(){
            this.$router.push({
                path:'search',
                query:{
                defaultKeyword:this.defaultKeyword
                }
            })
        }
    }
}

</script>