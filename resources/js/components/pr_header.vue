<template>
	<header class="text-gray-700 ">
		<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
			<a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 mr-auto">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
					<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
				</svg>
				<span class="ml-3 text-xl">Product Star</span>
			</a>
			<div class="lg:block hidden" v-for="item in menu">
				<router-link :to="{name: item.name}" class="mx-2 hover:text-gray-900">{{uppercased(item.name)}}</router-link>
			</div>
			<div class="ml-2 hidden">
				<button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 mr-4 md:mt-0">Login</button>		
				<button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Sign Up</button>
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
					{name: 'courses'},
					{name: 'products'},
					{name: 'services'},
					{name: 'community'},
					{name: 'pricing'},
					{name: 'deals'},
					{name: 'affilate'},
				]
			}
		},
		methods: {
			uppercased(string) {
				return string.charAt(0).toUpperCase() + string.slice(1); 
			}
		}
	}
</script>
