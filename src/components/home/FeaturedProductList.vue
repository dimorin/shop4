<template>
    <section class="newproduct bgwhite p-t-45 p-b-105">
		<div class="container">
			<div class="sec-title p-b-60">
				<h3 class="m-text5 t-center">
					Featured Products
				</h3>
			</div>

			<!-- Slide2 -->
			<div class="wrap-slick2">
				<div class="slick2" ref="slick">
                    <div v-for="product in products" :key="product.id" class="item-slick2 p-l-15 p-r-15">
                        <product :product="product"></product>
                    </div>										
				</div>
			</div>

		</div>
	</section>
</template>

<script>
import Product from '@/components/Product.vue'
import {mapState} from 'vuex'
export default {
    components:{
        Product
    },
    computed:{
        ...mapState('product',{
            products:state => state.featuredProducts
        })
    },
    created(){
        this.$store.dispatch('product/setFeaturedProducts')
        .then(() => {
            $(this.$refs.slick).slick2();
        })
    },
    
}
</script>

<style>

</style>