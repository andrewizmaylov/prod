<template>
	<div>
		<section class="container lg:w-4/5 w-full mx-auto">
			<div class="lg:flex inline-block mx-auto">
				<div class="container flex flex-col lg:w-1/3 md:w-2/3 w-5/6 mx-auto m-4 px-8" v-for="item in cards">
					<img :src="'/img/'+item.img" alt="" class="w-48 h-48 mx-auto">
					<div class="text-center my-2">{{item.title}}</div>
					<ul v-for="i in item.agenda" class="text-left ">
						<li class="list-disc text-xs text-gray-700">{{i}}</li>
					</ul>
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
							'Laptop or desktop with Internet',
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