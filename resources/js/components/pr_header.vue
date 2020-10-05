<template>
	<header class="">
		<div class="container max-w-6xl mx-auto sm:px-12 px-6 flex pt-5 items-center justify-between">
			<router-link class="flex items-center text-gray-800 mr-auto" :to="{ name: 'courses'}">
				<span class="text-xl font-medium">Product Manager Courses</span>
			</router-link>
			<div class="" v-for="item in menu">
				<span class="mx-2 py-2 px-4 border border-2 rounded-lg " @click="navigateTo(item.name)">{{uppercased(item.menu_name)}}</span>
			</div> 
		</div>
	</header>
</template>
<script>
	export default {
		name: 'pr_header',
		data() {
			return {
				menu: [
					{name: 'describe', menu_name: 'Enroll Now'},
				],
			}
		},
		methods: {
			uppercased(string) {
				return string.charAt(0).toUpperCase() + string.slice(1); 
			},
			navigateTo(link) {
				this.$router.push({name: link});
			}
		}
	}
</script>
