<template>
  <div>
    <!-- Title Page -->
    <section class="bg-title-page p-t-50 p-b-40 flex-col-c-m" style="background-image: url(https://picsum.photos/1920/239?random=1);">
      <h2 class="l-text2 t-center">
        Women
      </h2>
      <p class="m-text13 t-center">
        New Arrivals Women Collection 2018
      </p>
    </section>
    <!-- Content page -->
	<section class="bgwhite p-t-55 p-b-65">
		<div class="container">
			<div class="row">
				<div class="col-sm-6 col-md-4 col-lg-3 p-b-50">
					<div class="leftbar p-r-20 p-r-0-sm">
						<!--  -->
						<h4 class="m-text14 p-b-7">
							Categories
						</h4>

						<category-filter></category-filter>

						<!--  -->
						<h4 class="m-text14 p-b-32">
							Filters
						</h4>

						<price-filter></price-filter>
            			<color-filter></color-filter>
					

						<div class="search-product pos-relative bo4 of-hidden">
							<input class="s-text7 size6 p-l-23 p-r-50" type="text" name="search-product" placeholder="Search Products...">

							<button class="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4">
								<i class="fs-12 fa fa-search" aria-hidden="true"></i>
							</button>
						</div>
					</div>
				</div>

				<div class="col-sm-6 col-md-8 col-lg-9 p-b-50">
					<!--  -->
					<div class="flex-sb-m flex-w p-b-35">
						<div class="flex-w">
							<div class="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
								<select class="selection-2" name="sorting">
									<option>Default Sorting</option>
									<option>Popularity</option>
									<option>Price: low to high</option>
									<option>Price: high to low</option>
								</select>
							</div>

							<div class="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
								<select class="selection-2" name="sorting">
									<option>Price</option>
									<option>$0.00 - $50.00</option>
									<option>$50.00 - $100.00</option>
									<option>$100.00 - $150.00</option>
									<option>$150.00 - $200.00</option>
									<option>$200.00+</option>

								</select>
							</div>
						</div>

						<span class="s-text8 p-t-5 p-b-5">
							Showing {{(page*12)+1}}–{{(page*12+12)}} of {{totalProducts}} results
						</span>
					</div>

					<!-- Product -->
					<product-list></product-list>


					<!-- Pagination -->
					<div class="pagination flex-m flex-w p-t-26">            
						<button v-for="p in Math.ceil(totalProducts/12)" :key="p" type="button" @click="changePage(p-1)" class="item-pagination flex-c-m trans-0-4" :class="{'active-pagination':p-1 === page}">
							{{p}}
						</button>            
					</div>
				</div>
			</div>
		</div>
	</section>
  <!-- Container Selection -->
	<div id="dropDownSelect1"></div>
	<div id="dropDownSelect2"></div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import CategoryFilter from '@/components/shop/CategoryFilter.vue'
import PriceFilter from '@/components/shop/PriceFilter.vue'
import ColorFilter from '@/components/shop/ColorFilter.vue'
import ProductList from '@/components/shop/ProductList.vue'
export default {
  components:{
    PriceFilter,
    CategoryFilter,
    ColorFilter,
    ProductList,
  },
  computed:{
    ...mapState('product',{
      totalProducts: state => state.totalProducts,
      page: state => state.page
    })
  },
  methods:{
    changePage(page){
      this.$store.dispatch('product/setProducts', page);
    }
  },
  mounted(){
    $(".selection-1").select2({
		minimumResultsForSearch: 20,
		dropdownParent: $('#dropDownSelect1')
	});

	$(".selection-2").select2({
		minimumResultsForSearch: 20,
		dropdownParent: $('#dropDownSelect2')
	});
  }
}
</script>

<style>

</style>