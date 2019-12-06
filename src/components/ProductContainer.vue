<template>
    <div class="left">
        <simple-product :productList='productList' v-for='(item,index) in productList'  :key='index'  :product='item'> 1</simple-product>
    </div>
    
</template>
<script>
import SimpleProduct from '@/components/SimpleProduct'
export default {
    name:'ProductContainer',
    props : {
        productList:''
        
    },
    data(){
        return {
        }
    },
    components:{
        SimpleProduct
    }
}
</script>

<style>
.left{
    text-align: left;
}
</style>