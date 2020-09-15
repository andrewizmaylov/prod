<template>
	<section class="text-gray-700 body-font overflow-hidden">
		<div class="px-5 py-8 my-12 bg-gray-100">
			<div class="container mx-auto lg:w-4/5 mx-auto flex flex-wrap">
				<section class="lg:w-1/2 w-full lg:pr-4 lg:py-6 mb-6 lg:mb-0">
			        <h6 class="text-sm title-font text-gray-500 tracking-normal">
			        	<router-link :to="{name: 'courses'}">Courses</router-link> > {{course.title}}
			        </h6>
			        <h1 class="text-indigo-500 text-3xl title-font font-medium mb-4">{{course.title}}</h1>

			        <p class="leading-relaxed mb-8">Integral to all apps, user management is important to get right. In this course we cover sign up/login, user roles and create an admin dashboard.</p>
			        <div class="flex items-center mt-2">
				        <svg class="h-4 w-4 fill-current text-indigo-500" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				        	<path d="M30.3 7.35L24 10.9V6a2 2 0 00-2-2H4a4 4 0 00-4 4v16a4 4 0 004 4h18a2 2 0 002-2v-4.92l6.3 3.55a1.1 1.1 0 001.7-.86V8.2a1.1 1.1 0 00-1.7-.85z" />
				        </svg>
				        <span class="ml-2 text-xs text-gray700">{{course.lessons.length}} lessons</span>
			        </div>
		            <div class="flex items-center mt-2">
				        <svg class="h-4 w-4 fill-current text-indigo-500" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				        	<path d="M11.91 0v2.56h8.18V0h-8.18zM16 3.84c-8.268 0-15 6.32-15 14.08S7.734 32 16 32c8.268 0 15-6.32 15-14.08 0-3.735-1.55-7.155-4.09-9.68l2.343-2.2-1.962-1.842-2.468 2.322C22.259 4.772 19.169 3.833 16 3.84zm0 2.56c6.79 0 12.273 5.146 12.273 11.52S22.79 29.44 16 29.44c-6.79 0-12.273-5.146-12.273-11.52S9.21 6.4 16 6.4zm-1.364 2.56v6.76c-.815.445-1.363 1.254-1.363 2.2 0 .945.548 1.755 1.363 2.2v1.64h2.728v-1.64c.815-.445 1.363-1.254 1.363-2.2 0-.945-.548-1.755-1.363-2.2V8.96h-2.728z" />
				        </svg>
		    	        <span class="ml-2 text-xs text-gray-700">{{course.totaltime}} minutes</span>
		            </div>
			        <div class="flex items-center mt-2">
				        <svg class="h-4 w-4 fill-current text-indigo-500" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
				        	<path d="M32 30.667c0 .36-.099.673-.297.937-.198.264-.432.396-.703.396-.27 0-.505-.132-.703-.396a1.519 1.519 0 01-.297-.937V13.125L18.969 20.5c-.834.556-1.823.833-2.969.833s-2.135-.277-2.969-.833L1.22 12.625C.406 12.069 0 11.41 0 10.645c0-.763.406-1.409 1.219-1.937L13.03.833C13.865.278 14.854 0 16 0s2.135.278 2.969.833L30.78 8.708c.709.473 1.104 1.056 1.188 1.75.02.028.031.084.031.167v20.042zm-12.031-9.5L26 17.125V25c0 1.194-.974 2.215-2.922 3.063-1.948.847-4.307 1.27-7.078 1.27-2.77 0-5.13-.423-7.078-1.27C6.974 27.215 6 26.194 6 25v-7.875l6.031 4.042c.834.555 2.156.833 3.969.833 1.813 0 3.135-.278 3.969-.833z" />
				        </svg>
		    	        <span class="ml-2 text-xs text-gray700">{{course.students}} students enrolled in this course</span>
		            </div>
		        </section>
		        <section class="lg:w-1/2 sm:w-full mx-auto h-auto lg:py-6 mb-6 lg:mb-0">
		        	<iframe class="container p-2 mx-auto" width="560" height="315" src="https://www.youtube.com/embed/_ZW5B6nZ8Xw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				    
			        <div class="flex mt-4 justify-center">
						<button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Enroll Now</button>
						<button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
							<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
								<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
							</svg>
						</button>
			        </div>
				</section>
		    </div>
		</div>

		<pr_statment class="my-4"></pr_statment>

		<!-- course content and template section -->
		<div class="bg-gray-100 w-full">
			<section class="container px-5 py-12 mx-auto lg:w-4/5 lg:flex block">
				<div class="flex flex-col lg:w-1/2 md:w-4/5 w-full mx-auto">
					<span class="text-lg text-gray-800 my-4 pl-6">Course content:</span>
					<div class="text-sm bg-white rounded shadow p-6">
						<div class="flex items-center py-2 border-b border-gray-100" v-for="i in course.lessons">
							<svg class="h-4 w-4 fill-current text-indigo-500" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.803.803 0 010 1.393z" />
							</svg>
							<span class="ml-2 mr-auto">{{i.topic}}</span>
							<span class="">{{i.duration}}</span>
						</div>
					</div>
				</div>
				<div class="flex flex-col lg:w-1/2 md:w-4/5 w-full mx-auto p-8 text-sm items-center">
					<h2 class="text-lg text-gray-800 lg:mt-16 lg:-mb-4">Related template from Product Star</h2>
					<img src="/img/course_template.png" alt="course_template" class="w-3/4 h-auto">
					<div class="bg-white rounded p-4 shadow">
						<h2>ManageMe - User Managment</h2>
						<p class="my-4 text-xs">
							With ManageMe responsive template you can easily build user managment no-code apps with admin dashboard to manage users, their roles and permise...
						</p>
						<button class="border border-2 border-indigo-500 text-indigo-500 py-1 px-6 focus:outline-none hover:bg-indigo-600 hover:text-white rounded">35$</button>
					</div>
				</div>
			</section>
		</div>

		<!-- Related courses block -->
		<div class="mx-6 mt-12">
			<h2 class="text-lg text-gray-800 my-4 text-center">Related courses:</h2>
			<section class="flex flex-wrap -m-4">
				<pr_module v-for="i in 9" :key="i" class="p-4 lg:w-1/3 md:w-1/2 sm:w-full mx-auto"></pr_module>
			</section>
		</div>
	</section>

</template>
<script>
	import pr_statment from './pr_statment.vue';
	import pr_module from './pr_module.vue';
	export default {
		name: 'pr_enroll',
		components: {pr_statment, pr_module},
		data() {
			return {
				course: {
					title: 'User Management App like ManageMe Course',
					lessons: [
						{'duration': '2 min', 'topic': 'Introduction', 'url': 'https://www.youtube.com/watch?v=_ZW5B6nZ8Xw',},
						{'duration': '12 min', 'topic': 'User Profile', 'url': 'https://www.youtube.com/watch?v=_ZW5B6nZ8Xw',},
						{'duration': '5 min', 'topic': 'User & Database', 'url': 'https://www.youtube.com/watch?v=_ZW5B6nZ8Xw',},
						{'duration': '3 min', 'topic': 'Header', 'url': 'https://www.youtube.com/watch?v=_ZW5B6nZ8Xw',},
						{'duration': '7 min', 'topic': 'User SignUp', 'url': 'https://www.youtube.com/watch?v=_ZW5B6nZ8Xw',},
						{'duration': '5 min', 'topic': 'Login', 'url': 'https://www.youtube.com/watch?v=_ZW5B6nZ8Xw',},
						{'duration': '11 min', 'topic': 'Writing to the database', 'url': 'https://www.youtube.com/watch?v=_ZW5B6nZ8Xw',},
						{'duration': '2 min', 'topic': 'Repeating Groups & Users Roles', 'url': 'https://www.youtube.com/watch?v=_ZW5B6nZ8Xw',},
						{'duration': '3 min', 'topic': 'Sorting', 'url': 'https://www.youtube.com/watch?v=_ZW5B6nZ8Xw',},
						{'duration': '6 min', 'topic': 'Responsive', 'url': 'https://www.youtube.com/watch?v=_ZW5B6nZ8Xw',},
 					],
 					students: 241,
 					totaltime: 186
				}
			}
		}
	}
</script>