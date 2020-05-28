<template>
  <header class="header1">
		<!-- Header desktop -->
		<div class="container-menu-header">
			<div class="topbar">
				<div class="topbar-social">
					<a href="#" class="topbar-social-item fa fa-facebook"></a>
					<a href="#" class="topbar-social-item fa fa-instagram"></a>
					<a href="#" class="topbar-social-item fa fa-pinterest-p"></a>
					<a href="#" class="topbar-social-item fa fa-snapchat-ghost"></a>
					<a href="#" class="topbar-social-item fa fa-youtube-play"></a>
				</div>

				<span class="topbar-child1">
					Free shipping for standard order over $100
				</span>

				<div class="topbar-child2">
					<span class="topbar-email">
						fashe@example.com
					</span>

					<div class="topbar-language rs1-select2">
						<select class="selection-1" name="time">
							<option>USD</option>
							<option>EUR</option>
						</select>
					</div>
				</div>
			</div>

			<div class="wrap_header">
				<!-- Logo -->
				<router-link to="/" class="logo">
					<img src="images/icons/logo.png" alt="IMG-LOGO">
				</router-link>
				

				<!-- Menu -->
				<div class="wrap_menu">
					<nav class="menu">
						<ul class="main_menu">
							<router-link to="/" tag="li" active-class="sale-noti" exact>
								<a>Home</a>
							</router-link>

							<router-link to="/shop" tag="li" active-class="sale-noti" exact>
								<a>Shop</a>
							</router-link>

							<router-link to="/features" tag="li" active-class="sale-noti" exact>
								<a>Features</a>
							</router-link>
							
						</ul>
					</nav>
				</div>

				<!-- Header Icon -->
				<div class="header-icons">
					<a href="#" class="header-wrapicon1 dis-block">
						<img src="images/icons/icon-header-01.png" class="header-icon1" alt="ICON">
					</a>

					<span class="linedivide1"></span>

					<div class="header-wrapicon2">
						<img src="images/icons/icon-header-02.png" class="header-icon1 js-show-header-dropdown" alt="ICON">
						<span class="header-icons-noti">{{totalCartQty}}</span>

						<!-- Header cart noti -->
						<div class="header-cart header-dropdown">
							<ul class="header-cart-wrapitem">
								<li v-for="item in cartItems" :key="item.id" class="header-cart-item">
									<div class="header-cart-item-img">
										<img :src="item.image" alt="IMG">
									</div>

									<div class="header-cart-item-txt">
										<router-link to="/" class="header-cart-item-name">
											{{item.title}}
										</router-link>

										<span class="header-cart-item-info">
											{{item.qty}} x ${{item.price}}
										</span>
									</div>
								</li>								
							</ul>

							<div class="header-cart-total">
								Total: ${{totalCartPrice}}
							</div>

							<div class="header-cart-buttons">
								<div class="header-cart-wrapbtn">
									<!-- Button -->
									<a href="cart.html" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
										View Cart
									</a>
								</div>

								<div class="header-cart-wrapbtn">
									<!-- Button -->
									<a href="#" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
										Check Out
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Header Mobile -->
		<div class="wrap_header_mobile">
			<!-- Logo moblie -->
			<router-link to="/" class="logo-mobile">
				<img src="images/icons/logo.png" alt="IMG-LOGO">
			</router-link>
		

			<!-- Button show menu -->
			<div class="btn-show-menu">
				<!-- Header Icon mobile -->
				<div class="header-icons-mobile">
					<a href="#" class="header-wrapicon1 dis-block">
						<img src="images/icons/icon-header-01.png" class="header-icon1" alt="ICON">
					</a>

					<span class="linedivide2"></span>

					<div class="header-wrapicon2">
						<img src="images/icons/icon-header-02.png" class="header-icon1 js-show-header-dropdown" alt="ICON">
						<span class="header-icons-noti">{{totalCartQty}}</span>

						<!-- Header cart noti -->
						<div class="header-cart header-dropdown">
							<ul class="header-cart-wrapitem">
								<li v-for="item in cartItems" :key="item.id" class="header-cart-item">
									<div class="header-cart-item-img">
										<img :src="item.image" alt="IMG">
									</div>

									<div class="header-cart-item-txt">
										<router-link to="/" class="header-cart-item-name">
											{{item.title}}
										</router-link>

										<span class="header-cart-item-info">
											{{item.qty}} x ${{item.price}}
										</span>
									</div>
								</li>
							</ul>

							<div class="header-cart-total">
								Total: ${{totalCartPrice}}
							</div>

							<div class="header-cart-buttons">
								<div class="header-cart-wrapbtn">
									<!-- Button -->
									<a href="cart.html" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
										View Cart
									</a>
								</div>

								<div class="header-cart-wrapbtn">
									<!-- Button -->
									<a href="#" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
										Check Out
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="btn-show-menu-mobile hamburger hamburger--squeeze">
					<span class="hamburger-box">
						<span class="hamburger-inner"></span>
					</span>
				</div>
			</div>
		</div>

		<!-- Menu Mobile -->
		<div class="wrap-side-menu" >
			<nav class="side-menu">
				<ul class="main-menu">
					<li class="item-topbar-mobile p-l-20 p-t-8 p-b-8">
						<span class="topbar-child1">
							Free shipping for standard order over $100
						</span>
					</li>

					<li class="item-topbar-mobile p-l-20 p-t-8 p-b-8">
						<div class="topbar-child2-mobile">
							<span class="topbar-email">
								fashe@example.com
							</span>

							<div class="topbar-language rs1-select2">
								<select class="selection-1" name="time">
									<option>USD</option>
									<option>EUR</option>
								</select>
							</div>
						</div>
					</li>

					<li class="item-topbar-mobile p-l-10">
						<div class="topbar-social-mobile">
							<a href="#" class="topbar-social-item fa fa-facebook"></a>
							<a href="#" class="topbar-social-item fa fa-instagram"></a>
							<a href="#" class="topbar-social-item fa fa-pinterest-p"></a>
							<a href="#" class="topbar-social-item fa fa-snapchat-ghost"></a>
							<a href="#" class="topbar-social-item fa fa-youtube-play"></a>
						</div>
					</li>

					<router-link to="/" tag="li" class="item-menu-mobile" exact>
						<a>Home</a>
					</router-link>
					<router-link to="/shop" tag="li" class="item-menu-mobile" exact>
						<a>Shop</a>
					</router-link>
					
					<router-link to="/features" tag="li" class="item-menu-mobile" exact>
						<a>Features</a>
					</router-link>					

					
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
import {mapState, mapGetters} from 'vuex';

export default {
	computed:{
		...mapState('cart',{
			cartItems:state => state.items
		}),
		...mapGetters('cart',{
			totalCartPrice:'totalPrice',
			totalCartQty:'totalQty',
		})
	}
}
</script>

<style>

</style>