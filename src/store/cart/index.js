export default{
    namespaced:true,
    state:{
        items:[],
    },
    getters:{
        totalPrice(state){
            return state.items.reduce((sum, item) => sum + item.price * item.qty, 0);
        },
        totalQty(state){
            return state.items.reduce((sum,item) => sum + item.qty, 0);
        }
    },
    mutations:{
        addItem(state, item){
            const cartItems = state.items.filter( cartItem => cartItem.id === item.id); // 같은게 있는 item
                
            if(cartItems.length === 0){
                state.items.push({ //qty라는 새로운 속성을 추가하기 위해서 객체 형태로 push 한 것임.
                    ...item,
                    qty:1
                })
            }else{
                cartItems[0].qty++;
            }
            
        },
        delItem(state, id){
            state.items = state.items.filter( item => item.id !== id);
        },
        changeQty(state, {id,qty}){
            const cartItems = state.items.filter( cartItem => cartItem.id === id);

            if(cartItems.length !== 0){
                if(cartItems[0].qty + qty <= 0){ //해당 item을 없앤다
                    const index = state.items.findIndex(cartItem => cartItem.id === id);
                    state.items.splice(index,1);
                }else{
                    cartItems[0].qty += qty;
                }
            }            
        },
        clearCart(state){
            state.items = [];
        }
    },
    actions:{
        addItem({commit}, item){
            commit('addItem', item);
        },
        delItem({commit}, id){
            commit('delItem',id);
        },
        increaseQty({commit}, id){
            commit('changeQty',{
                id:id,
                qty:1
            })
        },
        decreaseQty({commit}, id){
            commit('changeQty',{
                id:id,
                qty:-1
            })
        },
        clearCart({commit}){
            commit('clearCart');
        }
    }
}