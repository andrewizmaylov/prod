<template>
	<div>
		<section class="">
			<div class="md:flex md:w-4/5 sm:w-full sm:block mx-auto">
				<div class="flex flex-col md:w-1/3 sm:w-2/3 mx-auto mt-6" v-for="item in cards">
					<img :src="'/img/'+item.img" alt="" class="w-48 h-48 mx-auto">
					<div class="text-center my-4 font-medium">{{item.title}}</div>
					<div class="mx-2">
						<ul class="mb-1 px-4">
							<li v-for="i in item.agenda" class="md:text-left md:list-outside text-center list-inside list-disc text-sm text-gray-700">{{i}}</li>
						</ul>	
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
	export default {
		name: 'pr_statment',
		data() {
			return {
				cards: [
					{
						img: 'image01.svg',
						title: 'Who is this course for:',
						agenda: [
							'Startups interested in no-code apps for user management',
							'Founders who want to learn how to integrate user management features in their apps'
						]
					},
					{
						img: 'image02.jpeg',
						title: 'What are the requirements:',
						agenda: [
							'Thirst for knowledge',
							'Laptop or desktop with Internet access',
							'Account at Bubble'
						]
					},
					{
						img: 'image03.jpeg',
						title: 'What you\'ll learn:',
						agenda: [
							'How to start building a no-code app to manage the individuals and use roles to specify what different users can do',
							'How to create sign up, user roles and an admin dashboard'
						]
					},
				]
			}
		}
	}
</script>