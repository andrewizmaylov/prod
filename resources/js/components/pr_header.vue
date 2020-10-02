<template>
	<header class="">
		<div class="container max-w-6xl mx-auto sm:px-12 px-6 flex pt-5 items-center justify-between">
			<router-link class="flex items-center text-gray-800 mr-auto" href="https://productstar.org/">
				<logo class="lg:block hidden"></logo>
				<span class="lg:hidden block text-xl font-medium">Product Manager Courses</span>
			</router-link>

			<div class="lg:block hidden" v-for="item in menu">
				<span class="mx-2 hover:text-gray-900" @click="navigateTo(item.name)">{{uppercased(item.menu_name)}}</span>
			</div>

			<svg class="lg:hidden block h-5 w-5 fill-current text-gray-700" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" @click="verticalBlock=!verticalBlock">
				<path v-show="!verticalBlock" d="M0 0h16v2H0V0zm0 5h16v2H0V5zm0 5h16v2H0v-2z" />
				<path v-show="verticalBlock" d="M13.694 11.563L10.13 8.001l3.563-3.562c1.373-1.373-.757-3.504-2.13-2.13L8 5.871 4.44 2.309C3.066.936.936 3.066 2.31 4.439l3.562 3.562-3.562 3.562c-1.373 1.374.757 3.504 2.13 2.13l3.562-3.562 3.562 3.562c1.374 1.374 3.504-.756 2.13-2.13z" /></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs>
			</svg>

			<div class="ml-2 hidden">
				<button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 mr-4 md:mt-0">Login</button>		
				<button class="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Sign Up</button>
			</div>
		</div>

	</header>
</template>
<script>
	import logo from './pr_logo.vue';
	export default {
		name: 'pr_header',
		components: {logo},
		data() {
			return {
				menu: [
					{name: 'enroll', menu_name: 'Enroll Now'},
					

				],

			}
		},
		methods: {
			uppercased(string) {
				return string.charAt(0).toUpperCase() + string.slice(1); 
			},
			navigateTo(link) {
				this.verticalBlock = false;
				this.$router.push({name: link});
			}
		}
	}
</script>
