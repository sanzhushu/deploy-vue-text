<template v-title data-title="网易1">
  <div id="app" :class="{dark:checked}" >
   <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'App',
  components: {
   
	},
  computed:{
    ...mapState(['checked'])
  },
  created(){
    this.$store.dispatch('requestgetBanner')
    this.$store.dispatch('requesthomePageData')
    this.$store.dispatch('requestcountriesCodeList')
  }
}
</script>

<style>

</style>
