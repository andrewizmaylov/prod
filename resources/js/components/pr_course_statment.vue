<template>
	<div class="flex flex-col lg:w-1/4 md:w-1/2 sm:w-2/3 mx-auto my-6 p-2" >
		<img :src="'/img/'+data.img" alt="" class="w-48 h-48 mx-auto">
		<div class="text-center my-4 font-medium">{{data.definition}}</div>
		<div class="mx-2">
			<ul class="mb-1 px-4">

				<li class="list-none text-center text-sm text-gray-700">{{data.description}}</li>
				<!-- <li v-for="i in data.description" class="list-none text-center text-sm text-gray-700">{{i}}</li> -->
			</ul>	
		</div>
	</div>
</template>
<script>
	export default {
		name: 'pr_course_statment',
		props: ['data'],
	}
</script>