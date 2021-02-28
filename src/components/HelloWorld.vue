<template>
	<div>
		home {{state.nama}}
	</div>
</template>
<script>
 import {Reactive} from 'vue'
	export default{
		setup(){
			const state = Reactive({
				nama:"jono"
			})
			return{
				state
			}
		}
	}
</script>