<template>
    <div id="result">
        <div class="container">
            <div class="row  my-5 py-3 mx-auto">
                <div class="col-md-3 col-sm-5">
                     <p id="display-name">
                        {{storeFoundResult.name}}
                    </p>
                </div>
                <div class="col-md-6 col-sm-5 ">
                     <p>
                        <ul>
                            <li v-for="(key,i) in storeFoundResult" :key="i">
                                {{ key }}: {{storeFoundResult[i]}}
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters([
            'storeFoundResult'
        ])
    }
    
}
</script>
<style scoped>
  #display-name{
    font-family: 'Tangerine';
    font-size: 7em;
    text-shadow: 4px 4px 4px #aaa;
  }
</style>
