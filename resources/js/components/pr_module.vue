<template>
	<div class="">
        <div class="relative h-full rounded-lg overflow-hidden border border-indigo-200" style="box-shadow: rgb(67 110 167 / 9%) 4px 7px 13px 1px;">

        	<div v-show="isAdmin" class="relevant flex flex-col" @click="showForm">
		        	<img class="lg:h-48 md:h-36 w-full object-cover object-center" :src="'/img/'+module.img" alt="blog">
		        	<div class="absolute flex items-center ml-4 mt-2" style="color: #7eaeb7;">

		        		<svg  class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
		        		  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
		        		</svg>
		        		<span class="text-sm">Change image</span>

		        	</div>
        	</div>
        	<img class="lg:h-48 md:h-36 w-full object-cover object-center" :src="'/img/'+module.img" alt="blog" v-show="!isAdmin">

        	<div class="flex flex-col justify-around px-6" @click="select">
        		<div class="py-8 mb-8">
        			<h1 class="text-lg font-medium text-gray-900 mb-3">{{module.title}}</h1>
        			<span class="font-medium text-gray-900 mb-3">{{module.subtitle}}</span>
        			<p class="leading-relaxed mb-3" v-html="module.description"></p>
        		</div>
	            <div class="absolute bottom-0 mt-4 mb-6">
		          <span class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 main-color">{{action}}
		            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
		              <path d="M5 12h14"></path>
		              <path d="M12 5l7 7-7 7"></path>
		            </svg>
		          </span>
	            </div>
        		
        	</div>


	    </div>
    </div>
</template>
<script>
	export default {
		name: 'pr_module',
		props: ['module', 'action', 'isAdmin'],
		data() {
			return {
				course: {},
				newImage: '',
			}
		},
		created() {
			this.course = this.module;
		},
		methods: {
			select() {
				this.$emit('select', this.module);
				// console.log(this.module.id);
			},
			showForm() {
				this.$emit('showForm', this.module);
			},
		},

	}
</script>