<template>
    <div class="filter-price p-t-22 p-b-50 bo3">
        <div class="m-text15 p-b-17">
            Price
        </div>

        <div class="wra-filter-bar">
            <div id="filter-bar"></div>
        </div>

        <div class="flex-sb-m flex-w p-t-16">
            <div class="w-size11">
                <!-- Button -->
                <button class="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4">
                    Filter
                </button>
            </div>

            <div class="s-text3 p-t-10 p-b-10">
                Range: $<span id="value-lower">610</span> - $<span id="value-upper">980</span>
            </div>
        </div>
    </div>
</template>

<script>
import noUiSlider from 'nouislider'
import 'nouislider/distribute/nouislider.css';
export default {
    mounted(){    
        /*[ No ui ]
	    ===========================================================*/
	    var filterBar = document.getElementById('filter-bar');

	    noUiSlider.create(filterBar, {
	        start: [ 50, 200 ],
	        connect: true,
	        range: {
	            'min': 50,
	            'max': 200
	        }
	    }); 

	    var skipValues = [
	    document.getElementById('value-lower'),
	    document.getElementById('value-upper')
	    ];

	    filterBar.noUiSlider.on('update', function( values, handle ) {
	        skipValues[handle].innerHTML = Math.round(values[handle]) ;
	    });
        filterBar.noUiSlider.on('end',(values) =>{
            this.$store.dispatch('product/setPriceRange',values);
        })
    }
}
</script>

<style>
.leftbar #filter-bar {
  margin-right: 13px;
  margin-left: 13px;
  height: 4px;
  border: none;
  background-color: #e1e1e1;
}
.leftbar #filter-bar .noUi-connect {
  background-color: #c5c5c5;
  border: none;
  box-shadow: none;
}
.leftbar #filter-bar .noUi-handle {
  width: 13px;
  height: 13px;
  left: 13px;
  top: -5px;
  border: none;
  border-radius: 50%;
  background: #999999;
  cursor: pointer;
  box-shadow: none;
  outline: none;
}
.leftbar #filter-bar .noUi-handle:before {
  display: none;
}
.leftbar #filter-bar .noUi-handle:after {
  display: none;
}
</style>