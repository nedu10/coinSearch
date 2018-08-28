<template>
 <div id="home-section">
   <!-- navbar -->
    <nav id="home-nav" class="navbar navbar-dark font-weight-bold navbar-expand-sm">
        <!-- logo -->
      <div class="container">
        <a href="#" class="navbar-brand font-italic" id="navbar-brand">coinSearch</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarLinks">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <!-- <a href="#header" id="nav-header" class="nav-link">Home</a> -->
                    <router-link to="/" tag="a" id="nav-header" class="nav-link" active-class="active" exact>Home</router-link>
                </li>
                <li class="nav-item">
                    <!-- <a href="#skill" id="nav-result" class="nav-link">Result</a> -->
                        <router-link to="/result" tag="a" id="nav-result" class="nav-link" active-class="active" exact>Result</router-link>
                </li>
            </ul>
        </div>
        </div>
    </nav>
    <transition name="flip" mode="out-in" appear>
    <home-filter 
          v-if="check" 
          :uploadSearchResult_filter="uploadSearchResult"
          @EmitCloseFilter="check = $event">
    </home-filter>
    </transition>
    <!-- end of navbar -->
   <div class="container">
     <div class="row">
       <div class="col-md-6 col-sm-8 col-xs-10 mx-auto text-white font-weight-bold text-uppercase py-5 font-italic">
        An application that gives full detail about available coin and also check if it is a crypto-currency       </div>
     </div>
     <!-- search form -->
     <div class="row">
       <div class="col-md-6 col-sm-8 col-xs-10 mx-auto text-white font-weight-bold text-uppercase py-5">
        <form action="">
         <div class="input-group my-3">
            <input type="text" id="search-form-control" placeholder="Search" class="form-control" v-model.trim="search">
            <!-- append -->
            <div class="input-group-append">
                <button type="submit" class="btn btn-outline-primary" id="search-btn-outline-primary" @click.prevent="result">Search</button>
            </div>
        </div>
     </form>
       </div>
     </div>
     <!-- end of search form -->
   </div>
 </div>
</template>
<script>
import Filter from './Filter.vue'
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
    components: {
        'home-filter': Filter
    },
    data: function(){
      return{
        search: '',
        searchResult: [],
        check: false
      }
    },
    computed: {
      ...mapGetters([
        'files'
      ]),
      value: {
        get(){
            return this.$store.getters.files;
        },
        set(value){
            this.$store.dispatch('upload', value)
        }
     },
     uploadSearchResult: {
       get(){ 
         return this.$store.getters.storeSearchResult;
       },
       set( uploadSearchResult ){
         this.$store.dispatch('uploadSearchResult', uploadSearchResult)
       }
     }
    },
    methods: {
      result(){
        var nine = 0;
        var eight = 0;
        var seven = 0;
        if(this.search.length > 0){
      //  let regex = new RegExp('(' + this.search + ')', 'i');
       var similarity = require("similarity")
       for (let i=0; i<this.files.length; i++) {
         const ele = similarity(this.files[i].name,this.search)
         if (ele >= 0.9){
           this.searchResult.unshift(this.files[i])
           nine++
         }
         if (ele >= 0.8 && ele <0.9){
           this.searchResult.splice(nine,0,this.files[i])
           eight++
         }
          if (ele >= 0.7 && ele <0.8){
           this.searchResult.splice(eight+nine,0,this.files[i])
           seven++
         }
        //  if(this.search.length > 4){
        //   if (regex.test(this.files[i].name)) {
        //     this.searchResult.push(this.file[i])
        //     console.log(this.files[i])
        //   }
        //  }
         if (ele >= 0.65 && ele <0.7){
           this.searchResult.push(this.files[i])
         }
       }
       seven = 0;
       eight = 0;
       nine = 0;
      }
      else{
        this.searchResult = []
      }
      this.uploadSearchResult = this.searchResult;
      if (this.uploadSearchResult.length > 0) {
        this.check = true
      }
      console.log(this.searchResult)
      this.searchResult = [];
      this.search = ''
      }
    },
    created(){
      this.$http.get('https://rest.coinapi.io/v1/assets')
      .then((response) => {
        return response.json();
      })
      .then(function(data){
        this.value = data;
      })
    }
}
</script>

<style>
.flip-enter{

}
.flip-enter-active{
  animation: flip-in .5s ease-in-out forwards;
}
.flip-leave{

}
.flip-leave-active{
  animation: flip-out .5s ease-in-out forwards;
}
@keyframes flip-in {
  from{
    transform: rotateY(90deg)
  }
  to{
    transform: rotateY(0deg)    
  }
}
@keyframes flip-out {
  from {
    transform: rotateY(0deg)
  }
  to{
    transform: rotateY(90deg)
  }
}
</style>

