<template>
	<section class="text-gray-700 ">
		<pr_course_intro :course="course" :lessonsCount="lessonsCount" :duration="duration" :students='students'></pr_course_intro>

		<pr_course_statments class="px-8 sm:px-1" :statments="course.statments"></pr_course_statments>

		<pr_course_content :content="this.chapters"></pr_course_content>

		<h2 class="text-2xl text-gray-800 mt-4 mb-8 text-center">Related courses:</h2>
	</section>
</template>
<script>
	import pr_course_statments from './pr_course_statments.vue';
	import pr_course_intro from './pr_course_intro.vue';
	import pr_course_content from './pr_course_content.vue';

	import basic_logic from './basic_logic.vue';

	export default {
		name: 'course',
		extends: basic_logic,
		components: {pr_course_statments, pr_course_intro, pr_course_content,},
		created() {
			this.course = this.loadCourse(this.courses[1]);
		},
		data() {
			return {
				coursesee: [
					{
						loaded: false,
						slug: '1',
						img: '/img/module1.svg',
						name: 'Basic Product Manager Skills',
						description: 'Our course help you to start your successful career as a PM.',
					},
					{
						loaded: false,
						slug: '2',
						img: '/img/module2.svg',
						name: 'Skills for Mid-level Product Manager',
						description: 'This course teach you the essential skills you need to ace your PM interview...',
					},
					{
						loaded: false,
						slug: '3',
						img: '/img/module3.svg',
						name: 'Mobile Product Managment',
						description: 'Upgrade your Mobile PM skills today and stay ahead of the curve!',
					},
					{
						loaded: false,
						slug: '4',
						img: '/img/module4.svg',
						name: 'Product Manager Level-up',
						description: 'This course is the best way to bring your PM skills to new heights!',
					},
					{
						loaded: false,
						slug: '5',
						img: '/img/module5.svg',
						name: 'Super power Skill, which not exists: ZeroCoding',
						description: 'This course can help you to get your idea implemented immediately without developers and code!',
					},
					{
						loaded: false,
						slug: '6',
						img: '/img/module6.svg',
						name: 'A/B Testing skills',
						description: 'This course will help you to bring your PM career to new heights.',
					},
				],
			}
		}
	}
</script>