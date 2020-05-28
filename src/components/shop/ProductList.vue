<template>
    <div class="row">
        <div v-for="product in products" :key="product.id" class="col-sm-12 col-md-6 col-lg-4 p-b-50">
            <product :product="product"></product>
        </div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
import Product from '@/components/Product.vue'
export default {
    components:{
        Product,
    },
    computed:{
        ...mapState('product',{
            products:state => state.products
        })
    },
    created(){
        this.$store.dispatch('product/setProducts',0);//1page product list
    }
}
</script>

<style>

</style>