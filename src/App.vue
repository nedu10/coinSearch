<template>
 <div id="app-section">
     <transition name="fade" mode="out-in" appear>
     <router-view></router-view>
     </transition>
  <!-- footer section -->
  <!-- footer overlay -->
   <div id="footer-overlay" class="bg-dark w-100" style=" opacity: 0.65;">   
   </div>
   <!-- end of footer overlay -->
   <footer id="footer" class="w-100 py-2" style="background-color: transparent;">
       <div class="container">
           <div class="row">
               <div class="col-md-4 col-sm-6 col-xs-8 mx-auto text-center font-weight-bold">
                   Follow Us
               </div>
           </div>
           <div class="row">
               <div class="col-md-4 col-sm-6 col-xs-8 mx-auto text-center ">
                   <span class="text-muted font-italic">designed by </span><span style="color: lightcoral;">neduFoundation</span>
               </div>
           </div>
       </div>
    </footer>
    <!-- end of footer section -->
 </div>
</template>

<script>
// import Home from './components/Home/Home.vue'
// import Result from './components/Result/Result.vue'

export default {
//  components: {
//      'app-home': Home,
//      'app-result': Result
//  }
}
</script>

<style  scoped>
.fade-enter{
    /* transform: rotateY(0deg); */
}
.fade-enter-active{
    animation: fade-in .5s ease-out forwards;
}
.fade-leave{

}
.fade-leave-active{
    animation: fade-out .5s ease-out forwards;
}
@keyframes fade-out {
    from{
        opacity: 1;
        }
    to{
        opacity: 0.5;
    }
}
@keyframes fade-in {
    from{
        opacity: 0.5
    }
    to{
        opacity: 1;
    }
}
#footer-overlay,#footer{
    position: absolute;
    top: 87%;
    height: 13%;
    color: lightcoral;
}
#app-section{
    height: 100%
}
</style>

