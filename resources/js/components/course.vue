<template>
	<section class="text-gray-700 ">
		<pr_course_intro :course="course.intro"></pr_course_intro>

		<pr_course_statment class="px-8 sm:px-1" :statments="course.statments"></pr_course_statment>

		<pr_course_content :content="course.content"></pr_course_content>

		<h2 class="text-2xl text-gray-800 mt-4 mb-8 text-center">Related courses:</h2>
	</section>
</template>
<script>
	import pr_course_statment from './pr_course_statment.vue';
	import pr_course_intro from './pr_course_intro.vue';
	import pr_course_content from './pr_course_content.vue';
	export default {
		name: 'course',
		components: {pr_course_statment, pr_course_intro, pr_course_content,},
		data() {
			return {
				course: {
					intro: {
						title: 'Full Product Course',
						subtitle: 'How to become a Product Manager',
						description: "You'll learn how to build digital products from end to end, lead cross-functional teams and land your next product job or promotion. Get certified and propel your product management career forward with our full online course. This course is created by product managers from Booking, Google, PayPal, and more. <p>We will help you to get a Job as a Product Manager.</p>",
						url: 'https://www.dl.dropboxusercontent.com/s/5f828j7cioyms42/ps1.mp4?dl=0',
						lessons: [
							{'duration': '2 min', 'topic': 'Introduction', 'url': 'https://www.youtube.com/watch?v=_ZW5B6nZ8Xw',},
							{'duration': '12 min', 'topic': 'User Profile', 'url': 'https://www.youtube.com/watch?v=_ZW5B6nZ8Xw',},
	 					],
	 					students: 241,
	 					totaltime: 186,
					},

					statments: [
						{
							img: 'Frame1.svg',
							title: 'Live Online',
							agenda: [
								'Learn, interact and participate from home!',
							]
						},
						{
							img: 'Frame2.svg',
							title: 'Flexible schedule',
							agenda: [
								'Choose the timing and pace that fits.',
							]
						},
						{
							img: 'Frame3.svg',
							title: 'Top Instructors',
							agenda: [
								'Get trained by Product Experts from world leading companies.',
							]
						},
						{
							img: 'Frame4.svg',
							title: 'Get Certified',
							agenda: [
								'Get certified and propel your product management career forward.',
							]
						},
					],

					content: [
						{
							title: 'Basic Product Manager Skills',
							lessons: [
								'Who is a Product Manager? Product Manager skills and traits',
								'Immersion into an existing product',
								'Product Team processes and working with the Engineering Team',
								'Mockups and User-research',
								'Prioritization',
								'Strategy and global view of the product',
								'Applied analytics',
								'A/B testing',
								'Growth Hacking',
								'Mock interview',
								'Unit Economics',
							],
							comment: '',
							status: 'false'
						},
						{
							title: 'Skills for Mid-level Product Manager',
							lessons: [
								'Product Manager Soft Skills',
								'Product Manager Documents',
								'Differences in working with B2B- and B2C-products',
								'How to quickly form hypotheses and determine the MVP',
								'Offline Business Digitalization',
								'Making the case for your project',
								'Subcontractors',
								'Growth hacking',
								'Reboots / Overhauls',
								'Job Interview',
								'Conclusion / Final',
							],
							comment: '',
							status: 'false'
						},
						{
							title: 'Mobile Products',
							lessons: [
								'Designing a mobile application',
								'How to onboard new users',
								'Setting up mobile analytics and conducting A/B testing',
								'Prototyping a mobile application',
								'Under the hood of mobile applications',
								'How to promote a mobile app to an existing audience',
								'Appstore and Google Play Store Secrets. What you need to know about these platforms',
								'Mobile App Promotion / Marketing + Conclusion / Final',
							],
							comment: '',
							status: 'false'
						},
						{
							title: 'Product Manager Level-up',
							lessons: [
								'Product Managers\' Common Mistakes',
								'Product Vision',
								'OKR and Planning',
								'Working with a Remote Team',
								'International Products',
								'Monetization',
								'Working with budgets',
								'Hiring a team',
								'Competitor Analysis',
								'Market Size and Share Evaluation',
								'AI Product Management',
							],
							comment: '',
							status: 'false'
						},
						{
							title: 'Thesis (Graduation project) and Employment Assistance',
							lessons: [
								'Resume preparation',
								'Preparing for a job interview',
								'Final review and advice',
							],
							comment: '',
							status: 'false'
						},				

					],

				},
			}
		}
	}
</script>