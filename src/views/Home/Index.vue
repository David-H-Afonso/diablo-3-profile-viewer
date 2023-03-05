<template>
	<div class="home">
		<home-title />
		<home-form />
	</div>
</template>

<script>
import HomeTitle from './HomeTitle.vue'
import HomeForm from './HomeForm.vue'

export default {
	name: 'Home',
	components: {
		HomeTitle,
		HomeForm,
	},
}
</script>
