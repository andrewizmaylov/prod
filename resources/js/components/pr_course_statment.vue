<template>
	<div class="flex flex-col lg:w-1/4 md:w-1/2 sm:w-2/3 mx-auto my-6 p-2 items-center" >
    	<div v-show="isAdmin" class="flex flex-col items-center border border-indigo-200 rounded-md" @click="showForm">
    		<span class="text-sm mt-2" style="color: #7eaeb7;">Click to change image</span>
			<img :src="'/img/'+data.img" alt="" class="w-48 h-48 mx-auto p-4" >
    	</div>
		<img :src="'/img/'+data.img" alt="" class="w-48 h-48 mx-auto p-4" v-show="!isAdmin">
		<div v-show="form" class="flex flex-col items-center">
			<div class="my-4 font-medium">{{data.definition}}</div>
			<div class="mx-2">
				<ul class="mb-1 px-4">

					<li class="list-none text-sm text-gray-700">{{data.description}}</li>
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
	</div>
</template>
<script>
	export default {
		name: 'pr_course_statment',
		props: ['data','isAdmin'],
		data() {
			return {
				form:true,
			}
		},
		methods: {
			showForm() {
				this.form = false;
				this.$emit('showForm', this.data);
			},
			editStatment() {
				this.$emit('editStatment');
			}
		}
	}
</script>