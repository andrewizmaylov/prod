<template>
	<div>
		<section class=" my-4">
			<div class="flex flex-wrap px-8">
				<div class="flex flex-col lg:w-1/4 md:w-1/2 sm:w-2/3 mx-auto my-6 p-2" v-for="item in statments">
					<img :src="'/img/'+item.img" alt="" class="w-48 h-48 mx-auto">
					<div class="text-center my-4 font-medium">{{item.title}}</div>
					<div class="mx-2">
						<ul class="mb-1 px-4">
							<li v-for="i in item.agenda" class="list-none text-center text-sm text-gray-700">{{i}}</li>
						</ul>	
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
	export default {
		name: 'pr_course_statment',
		props: ['statments'],
	}
</script>