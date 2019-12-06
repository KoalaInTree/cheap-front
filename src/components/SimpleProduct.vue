<template>
    <div @click="toDetail" class="simple" >
        <div class="coupon-icon"><p class="coupon-amount">优惠券<br/>¥<span>{{product.couponAmount}}</span></p></div>
        <van-image width="40vw" draggable="true" height='38vw' :src='product.itemUrl' /> 
        <p class="title"><img width="16px"  height='16px' :src='selectIcon(product.userType)' />{{product.title}}</p>
        <div class="info"><span class="left">现价￥{{product.reservePrice}}</span><span class="right">已售{{unitConvert(product.volume)}}</span></div>
        <div class="info">券后<span class='curPrice'>￥{{parseInt(product.reservePrice - product.couponAmount)}}</span></div>
    </div>
</template>

<script>
import tb_icon from '../assets/logo_tb.png'
import tm_icon from '../assets/tmallico.png'
export default {
    name:'SimpleProduct',
    props:{
        product:{
        }
    },
    methods:{
        unitConvert(volume){
            return  parseInt(volume) >= 10000 ? volume/10000 + "万件" : volume+'件'
        },
        selectIcon(userType){
            return 1 == userType ? tm_icon : tb_icon
        },
        toDetail(){
            if(this.product.smallItemUrl){
                this.product.smallItemUrl.unshift(this.product.itemUrl)
            }else{
                this.product.smallItemUrl=[this.product.itemUrl]
            }
           
            this.$router.push({path:'/product',query:{
                title:this.product.title,
                reservePrice:this.product.reservePrice,
                smallItemUrl:this.product.smallItemUrl,
                userType:this.product.userType,
                itemUrl:this.product.itemUrl,
                volume:this.product.volume,
                couponId:this.product.couponId,
                couponEndTime:this.product.couponEndTime,
                couponAmount:this.product.couponAmount,
                couponTotalCount:this.product.couponTotalCount,
                couponRemainCount:this.product.couponRemainCount,
                shopTitle:this.product.shopTitle,
                shopDesc:this.product.shopDesc,
                sellerId:this.product.sellerId,
                shopUrl:this.product.shopUrl,
                shopDsr:this.product.shopDsr,
                couponShareUrl:this.product.couponShareUrl,
                
            }})
        }
    }
}
</script>

<style scoped>
.simple{
    display: inline-block;
    margin-left: 7vw;
    margin-top: 8px;
    text-align: left;
    position: relative;
    width:40vw;

}
.right{
    float: right;
}
.info{
    font-size: 0.8rem;
    color: #9b9b9b;
}
.coupon{
    font-size: 1.3rem;
}
.coupon-icon{
    position:absolute;
    right: 0;
    z-index: 2;
    background-color: red;
    text-align: center;
    color: white;
    width: 3.5rem;
    height: 2.8rem;
}
.coupon-amount{
    margin-top: 0px;
}
.curPrice{
    font-size: 1.2rem;
    color: red;
    font-weight: 30;
}
.title{
    width: 40vw;
    height: 2.2rem;
    font-size: 0.8rem;
    overflow: hidden;
}
</style>