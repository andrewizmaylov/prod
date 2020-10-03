<template>
	<div class="container mx-auto text-center mt-16">
		<h1 class="text-2xl text-gray-800 pt-12 mb-4 px-8">Where our students find employment</h1>
		<p class="text-sm px-6 mb-4">We help our students get invited to interviews and land jobs</p>
		<div class="flex flex-wrap justify-around w-2/3 mx-auto">
			<span class="lg:w-1/5 md:w-1/3 p-2 m-2" v-for="item in sponsors" >
				<img :src="item.logo" class="w-full h-full" style=" filter: grayscale(70%);">
			</span>
		</div>
		<div class="pt-16 pb-8 text-sm tracking-wide">
			<span class="text-gray-600 font-semibold">© Product Star {{this.date()}}</span>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'pr_footer',
		data() {
			return {
				sponsors: [
					{logo: '/img/logos/booking1.svg'},
					{logo: '/img/logos/amazon.svg'},
					{logo: '/img/logos/google.svg'},
					{logo: '/img/logos/paypal.svg'},
					{logo: '/img/logos/gojek.svg'},
					{logo: '/img/logos/flipkart.svg'},
					{logo: '/img/logos/siemens.svg'},
					{logo: '/img/logos/kotak.svg'},
				]
			}
		},
		methods: {
			date() {
				return new Date().getFullYear();
			}
		} 
	}
</script>
<style>
	.main-color {
		color: #3FA4B9;
	}
</style>