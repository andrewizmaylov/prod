<template>
	<section class="text-gray-700 ">

		<course></course>
		<section class="flex flex-wrap -m-4">
			<pr_module v-for="i in selected" :key="i.index" :module="i" class="p-4 lg:w-1/3 md:w-1/2 sm:w-2/3 mx-auto" ></pr_module>
		</section>


		<div class="max-w-5xl lg:w-4/5 md:w-5/6 w-4/5 mx-auto mt-12">
			
			<section class="flex flex-wrap -m-4">
				<pr_module v-for="i in courses" :key="i.index" :module="i" class="p-4 lg:w-1/3 md:w-1/2 sm:w-2/3 mx-auto" @select="selectCourse(i)"></pr_module>
			</section>
		</div>
	</section>

</template>
<script>
	import pr_module from './pr_module.vue';
	import course from './course.vue';
	export default {
		name: 'courses',
		components: { pr_module, course},
		methods: {
			selectCourse(i) {
				this.courses.filter(item => {
					if(item.slug == i.slug) {
						item.loaded = true;
					} else {
						item.loaded = false;
					}
				});

					$('html, body').animate({ scrollTop: 0 }, 'fast');
					this.accent = true;
				
			}
		},
		computed: {
			selected() {
				return this.courses.filter(item => {
					return item.loaded == true;
				});
			},
		},
		data() {
			return {

				courses: [
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
						description: 'This cours eis the best way to bring your PM skills to new heights!',
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