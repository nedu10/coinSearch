<template>
    <div id="filter-result">
        <div class="container-fluid" id="container-fluid1">
            <div class="row justify-content-between">
                <div class="col-8 py-3">
                    <h4 class="er">Pick A Location</h4>
                </div>
                <div class="text-right">
                        <button id="close-filter" class="btn btn-primary" @click.prevent="closeFilter">&times;</button>
                    </div>
            </div>
        </div>
        <div class="container my-2 py-2">
            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-10 offset-xs-1 my-2"
                     v-for='(key,i) in uploadSearchResult_filter' :key="i">
                        <router-link to="/result" tag="a" id="filter-item">
                            <div class="w-90 mx-auto" id="text" >
                                <div id="text-inner" class="text-white text-center" @click.prevent="showResult">
                                    {{key.name}}
                                </div>
                            </div>
                        </router-link>                                 
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations,mapGetters,mapActions } from "vuex";

export default {
    props: ['uploadSearchResult_filter','check'],
    methods: {
        closeFilter(){
            this.check = false
            this.$emit("EmitCloseFilter", this.check)
        },
        showResult(event){
            console.log(event.target.innerText)
            for (var i = 0; i < this.uploadSearchResult_filter.length; i++) {
                if (event.target.innerText === this.uploadSearchResult_filter[i].name) {
                    this.uploadStoreFoundResult = this.uploadSearchResult_filter[i];
                }   
            }
            this.$router.push('/result')
        }
    },
    computed: {
        ...mapGetters([
            'storeFoundResult'
        ]),
        uploadStoreFoundResult: {
            get(){
                return this.$store.getters.storeFoundResult;
            },
            set(uploadStoreFoundResult){
                this.$store.dispatch('uploadStoreFoundResult',uploadStoreFoundResult)
            }
        }
    }
    
}
</script>
<style scoped>
#filter-result{
    height: 80%;
    width: 80%;
    margin: auto;
    background-color: #c8c5c5;
    position: absolute;
    top: 10%;
    left: 10%;
    z-index: 4;
    border-radius: 1em;
    box-shadow: 2px 2px 5px 2px #30302f;
    overflow: hidden;
}
#container-fluid1{
    border-bottom: 1px solid #393939;
    background-color: #e77c7c;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    color: #393939;
    font-style: italic;
}
#text{
    border: 1px solid #8c8c8c;
    height: 7em;
    border-radius: 1em;
    /* background-color: white; */
    background-image: url(../../../images/img-1.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    cursor: pointer;
}
#text-inner{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 1em;
}
#close-filter{
    background-color: #e77c7c;
    color: white;
    font-weight: bolder;
    font-size: 150%;
    padding: 0;
    padding-left: 0.2em;
    padding-right: 0.2em;
    border: none;
}
#close-filter:hover{
    background-color: white;
    color: lightcoral;
}
#text-inner:hover{
    background-color: rgba(231, 124, 124, 0.6);
}
</style>
