<template>
	<div class="flex flex-col lg:w-1/4 md:w-1/2 sm:w-2/3 mx-auto my-6 p-2 items-center" >
    	<div v-show="isAdmin" class="relevant flex flex-col" @click="showForm">
			<img :src="'/img/'+data.img" alt="" class="w-48 h-48 mx-auto" >
        	<div class="absolute flex items-center ml-4 mt-2" style="color: #7eaeb7;">

        		<svg  class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        		  <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        		</svg>
        		<span class="text-sm">Change image</span>

        	</div>
    	</div>
		<img :src="'/img/'+data.img" alt="" class="w-48 h-48 mx-auto" v-show="!isAdmin">
		<div class="text-center my-4 font-medium">{{data.definition}}</div>
		<div class="mx-2">
			<ul class="mb-1 px-4">

				<li class="list-none text-center text-sm text-gray-700">{{data.description}}</li>
				<!-- <li v-for="i in data.description" class="list-none text-center text-sm text-gray-700">{{i}}</li> -->
			</ul>	
		</div>
        <div class="mt-4 mb-6" v-show="isAdmin" @click="editStatment">
            <span class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 main-color">Edit Statment
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              		<path d="M5 12h14"></path>
              		<path d="M12 5l7 7-7 7"></path>
            	</svg>
            </span>
        </div>
	</div>
</template>
<script>
	export default {
		name: 'pr_course_statment',
		props: ['data','isAdmin'],
		methods: {
			showForm() {
				this.$emit('showForm', this.data);
			},
			editStatment() {
				this.$emit('editStatment');
			}
		}
	}
</script>