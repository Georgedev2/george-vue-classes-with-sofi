<template>

<div>{{ name }}</div>
<div style="color:red">{{ count }}</div>
<div>DOUBLED {{ doubled }}</div>
<button @click="increment">INcrement Count {{ count }}</button>
<button @click="changeName"> Change Name</button>


</template>
<script>

export default {

    data(){
       return  {
       count:0,
       name:'MY COUNT LOGIC'

        }
       

    },
    methods:{
        increment(){
             this.count++
        },
        changeName(){
            this.name="SOFI"
        }
    },

    computed:{
       doubled (){return this.count*2} 
    },

        watch: {
             count (newCount, oldCount){
                console.log(oldCount, newCount)
             }
        },
}

</script>