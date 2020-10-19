<template>
	<section class="text-gray-700 ">

		<pr_course_intro :course="course" :lessonsCount="lessonsCount" :duration="duration" :students='students' class="mt-8"></pr_course_intro>

		<pr_course_statments class="px-8 sm:px-1" :statments="statments"></pr_course_statments>

		<pr_course_content :content="this.chapters"></pr_course_content>

		<div class="max-w-5xl lg:w-4/5 md:w-5/6 w-4/5 mx-auto mt-12">
			<h2 class="text-2xl text-gray-800 mt-4 mb-8 text-center">Related courses:</h2>
			
			<section class="flex flex-wrap -m-4">
				<pr_module v-for="i in selected" :key="i.index" :module="i" :action="'Learn more '" class="p-4 lg:w-1/3 md:w-1/2 sm:w-2/3 mx-auto" @select="selectCourse(i)"></pr_module>
			</section>
		</div>
	</section>

</template>
<script>
	import pr_module from './pr_module.vue';
	import pr_course_statments from './pr_course_statments.vue';
	import pr_course_intro from './pr_course_intro.vue';
	import pr_course_content from './pr_course_content.vue';


	import basic_logic from './basic_logic.vue';
	export default {
		extends: basic_logic,
		name: 'courses',
		components: {pr_course_statments, pr_course_intro, pr_course_content, pr_module},


		methods: {
			selectCourse(i) {
				this.courses.filter(item => {
					if(item.id == i.id) {
						item.loaded = true;
						this.init(item.id);
					} else {
						item.loaded = false;
					}
				});
				this.selected = this.courses.filter(course => course.loaded == false);
					$('html, body').animate({ scrollTop: 0 }, 'fast');
					this.accent = true;
				
			},

		},
		computed: {
			// notSelected() {
			// 	return this.;
			// },
		},


	}
</script>