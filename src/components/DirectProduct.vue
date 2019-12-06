<template>
    <div class='product'>
        <van-swipe style="width=100%" >
            <van-swipe-item v-for='(item,index) in smallItemUrl' :key="index" >
                <van-image class="pic" :src="item" />
            </van-swipe-item>
        </van-swipe>
        <div class="out">
            <div class="info">
                <span class="join_txt">券后价格</span>
                <span style="font-style: italic;font-size: 1rem;">￥{{parseInt(reservePrice-couponAmount)}}</span>
                <span style="padding-left:16px;font-size:14px;">原价</span>
                <span style="text-decoration: line-through;font-size: 14px;">{{reservePrice}}</span>
            </div>
            <div class="outTime">
                <span >距结束仅剩</span>
                <van-count-down style="font-size:0.8rem;"
                :time="toTime(couponEndTime)"
                format="DD天HH:mm:ss"
                />
            </div>
        </div>
        <div class="coupon-div">
                <p class="title"><img :src='selectIcon(userType)' />{{title}}</p>
        </div>
        <div>
            <input type="text" v-model="copyText" style="opacity: 0;">
            <van-goods-action>
                <van-goods-action-icon icon="wap-home-o" text="主页" to='/' />
                <van-goods-action-button v-clipboard:copy="copyText" v-clipboard:success="onSuccess" v-clipboard:error="onError" 
                type="warning" text="复制去分享" @click="onShare"    />
                <van-goods-action-button type="danger" :text="platform('1')" v-clipboard:copy="copyText" v-clipboard:success="onSuccess" v-clipboard:error="onError"  @click="onShare" />
            </van-goods-action>
        </div>
    </div>
</template>
<script>
import tb_icon from '../assets/logo_tb.png'
import tm_icon from '../assets/tmallico.png'
export default {
    name:'Product',
    data(){
        return {
        title:this.$route.query.title,
        reservePrice:this.$route.query.reservePrice,
        smallItemUrl:this.$route.query.smallItemUrl,
        userType:this.$route.query.userType,
        itemUrl:this.$route.query.itemUrl,
        volume:this.$route.query.volume,
        couponId:this.$route.query.couponId,
        couponEndTime:this.$route.query.couponEndTime,
        couponAmount:this.$route.query.couponAmount,
        couponTotalCount:this.$route.query.couponTotalCount,
        couponRemainCount:this.$route.query.couponRemainCount,
        shopTitle:this.$route.query.shopTitle,
        shopDesc:this.$route.query.shopDesc,
        sellerId:this.$route.query.sellerId,
        shopUrl:this.$route.query.shopUrl,
        shopDsr:this.$route.query.shopDsr,
        couponShareUrl:this.$route.query.couponShareUrl,
        copyText:'',
        keyword:''
        }
    },
    methods:{
        toTime(dateStr){
            return new Date(dateStr.replace(/-/g,'/')).getTime() - new Date().getTime() +86400000
        },
        selectIcon(userType){
            return 1 == userType ? tm_icon : tb_icon
        },
        onShare(){
            if(this.copyText){
                this.copyText=this.copyText
                return
            }
            let data={
                url:this.couponShareUrl.replace(/%2F/g,'/'),
                text:this.title,
                platform:1
            }
            let that = this;
            this.$axios.post('/good/short/url',data).then((rsp) =>{
                if(rsp.data && rsp.data.success){
                    let txt = "商品名【"+this.title+"】\n\
                                    *******************************\n\
                                    ★&nbsp;优&nbsp;惠&nbsp;券：&nbsp;¥"+this.couponAmount+"元券&nbsp;\n\
                                    ★&nbsp;优惠后价：&nbsp;¥"+parseInt(this.reservePrice-this.couponAmount)+"\n\
                                    口令："+rsp.data.data+"\n\
                                    *******************************\n\
                                    复制此消息，打开【手机淘宝APP】即可"
                    that.copyText = txt
                }else{
                    that.$toast(rsp.data ? rsp.data.data : '复制失败,请再试一次')
                }
            })
        },
        onSuccess(){
            this.$toast('复制成功')
        },
        onError(){
            this.$toast('复制失败,请再试一次')
        },
        platform(pl){
            if(pl == '1'){
                return "复制去淘宝";
            }
        },
        onSearch(){
            let data = {
                keyword : this.keyword,
                platform: '4"',
                shareUrl:false,
                pageNo:1,
                pageSize:20,
            }
            this.$axios.post('/good/get',data).then((response)=>{
                if(response.data && response.data.success){
                    this.product = response.data.data
                }else{
                    this.$toast(response.data.msg)
                }
            })
            
        }
    },
    mounted(){
        setTimeout(() => {
            let data={
                url:this.couponShareUrl.replace(/%2F/g,'/'),
                text:this.title,
                platform:1
            }
            let that = this;
            this.$axios.post('/good/short/url',data).then((rsp) =>{
                if(rsp.data && rsp.data.success){
                    let txt = "商品名【"+this.title+"】\n\
                                    *******************************\n\
                                    ★&nbsp;优&nbsp;惠&nbsp;券：&nbsp;¥"+this.couponAmount+"元券&nbsp;\n\
                                    ★&nbsp;优惠后价：&nbsp;¥"+parseInt(this.reservePrice-this.couponAmount)+"\n\
                                    口令："+rsp.data.data+"\n\
                                    *******************************\n\
                                    复制此消息，打开【手机淘宝APP】即可"
                    that.copyText = txt
                }else{
                    that.$toast(rsp.data ? rsp.data.data : '复制失败,请再试一次')
                }
            })
        }, 1000);
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
<style scoped>
.outTime{
    background: -webkit-gradient(linear,0 0,right 0,from(#FFF58D),to(#fff19d));
    position: absolute;
    width: 100px;
    right: 0;
    top: 0;
    height: 45px;
}

.out{
    font-family: "Microsoft YaHei","Helvetica Neue", Helvetica, STHeiTi, sans-serif;
    font-size: 14px;
    margin: 0;
    padding: 0;
    height: 45px;
    display: block;
    overflow: hidden;
    position: relative;
    color: #ffcbc3;
    background: -webkit-linear-gradient(left, #f15d66, #f11723);
}

.outTime:before {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    background: 0 0;
    left: -15px;
    border-right: 15px solid #FFF58D;
    border-top: 22px solid transparent;
    border-bottom: 23px solid transparent;
}

.outTime span {
    width: 100%;
    display: block;
    color: #FE4A65;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    margin: 3px 0 2px;
}
.product{
    padding: 0;
    width: 100%;
    margin-top: -6vh;
}

.info{
    height: 30px;
    position: absolute;
    left: 5px;
    top: 50%;
    margin-top: -15px;
    font-size: 0.6rem;
}
.join_txt{
   float: left;
    width: 30px;
    font-size: 12px;
    line-height: 13px;
    margin-top: 0px;
    margin-left: 12px;
}
.nowPrice{
    display: inline-block;
     width: 30px;
}

.title{
    font-size: 0.8rem;
    font-weight: bold;
}
.title img{
    width:5%;
    height:5%;
    max-width: 1.3rem;
    max-height: 1.3rem;
    position: relative;
    top: 4px;

}
.coupon-div{
    position: relative;
    top: 0;
    text-align: left;
    background-color:white;
    top: -7px; 
}
.copy{

}
</style>