<template>
	<div>
		<section class=" my-4">
			<div class="flex flex-wrap px-8">
				<pr_course_statment v-for="item in statments" :key="item.id" :data="item"></pr_course_statment>
			</div>
		</section>
	</div>
</template>
<script>
	import pr_course_statment from './pr_course_statment.vue';
	export default {
		name: 'pr_course_statments',
		components: {pr_course_statment},
		props: ['statments'],

	}
</script>