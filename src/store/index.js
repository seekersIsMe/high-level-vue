import vue from 'vue';
import vuex from 'vuex';
import state from './state';
console.log(state)
vue.use(vuex);

export default new vuex.Store({
    state
  })
  
