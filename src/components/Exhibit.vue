<template>
    <div class="content-border">
        <div class="content-center">
            <ul>
                <li v-for = "item in value" :key = "item.id">
                    <img :src="item"/>
                  <h3>属于你的未来</h3>
                  <p>性能巨匠</p>
                  <span>立即前往</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    mounted () {
        console.log(this.value)
    },
    props:{
        value:{
            type:Array,
            default: () =>[]
        }
    }
}
</script>
<style scoped>
.content-border{
    width: 100%;
}
.content-center{
 width: 91.5%;   
 margin: auto;
}
.content-center ul{
    width: 100%;
    height: 324px;    
    display: flex;
    /* flex-flow: row wrap; */
    align-content: flex-start;
}
.content-center li{
 display: flex;
 height: 100%;
 width: 306px;
 margin-top: 48px;
 flex-wrap: wrap;
}
.content-center h3{
width: 100%;
overflow: hidden;
padding-top: 0.5rem;
}
.content-center p{
    width: 100%;
    overflow: hidden;
}
.content-center span{
   color: #0067B8;
   padding-bottom: 0.5rem;
}
.content-center li img{
width: 100%;
height: 171px;
font-weight: bold;
}
.content-center li{
    padding: 0 11.701px;
}

@media screen and (max-width: 1085px) {
    .content-center ul{
    /* flex-wrap: wrap; */
    }
    .content-center li{
           width: 6.305rem;
    }
}
@media screen and (max-width: 765px) {
}
@media screen and (max-width: 530px) {
    .content-center ul{
        height: 8rem;
        flex-wrap: wrap;
    }
    .content-center li{
        width: 8.5rem;
    }
    .content-center li img{
        height: 5rem;
    }
}
</style>