<template>
	<div>

<router-link to="/">home</router-link>
<router-link :to="{name:'About',params:{id:'nice'}}" >about</router-link>
<router-link to="/makan/">home</router-link>


		<router-view v-slot="{ Component, route }">
  <!-- Use any custom transition and fallback to `fade` -->
  <transition :name="route.meta.transition">
    <component :is="Component" />
  </transition>
</router-view>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				nilai:5
			}
		}
	}
</script>