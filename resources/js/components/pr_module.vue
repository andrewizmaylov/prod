<template>
	<div class="">
        <div class="relative h-full rounded-lg overflow-hidden border border-indigo-200" style="box-shadow: rgb(67 110 167 / 9%) 4px 7px 13px 1px;"  @click="select()">

        	<img class="lg:h-48 md:h-36 w-full object-cover object-center" :src="module.img" alt="blog">
        	<div class="flex flex-col justify-around px-6">
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
		props: ['module', 'action'],
		methods: {
			select() {
				this.$emit('select', this.module);
			}
		},

	}
</script>