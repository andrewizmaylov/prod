<template>
	<div class="px-8 py-8 my-6 bg-gray-100">
		<div class="container mx-auto lg:w-4/5 mx-auto flex flex-wrap">
			<section class="lg:w-3/5 w-full lg:pr-4 lg:py-6 md:px-8 sm:px-1 mb-6 lg:mb-0">
		        <h6 class="text-sm title-font text-gray-500 tracking-normal">
		        	<router-link :to="{name: 'courses'}">Courses</router-link> > {{course.title}}
		        </h6>
		        <h1 class="main-color text-3xl title-font font-medium">{{course.title}}</h1>
		        <h1 class="text-2xl title-font font-medium mb-4">{{course.subtitle}}</h1>

		        <p class="leading-relaxed mb-8 lg:pr-8 md:pr-0" v-html="course.description"></p>
		        <div class="flex items-center mt-2">
			        <svg class="h-4 w-4 fill-current main-color" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			        	<path d="M30.3 7.35L24 10.9V6a2 2 0 00-2-2H4a4 4 0 00-4 4v16a4 4 0 004 4h18a2 2 0 002-2v-4.92l6.3 3.55a1.1 1.1 0 001.7-.86V8.2a1.1 1.1 0 00-1.7-.85z" />
			        </svg>
			        <span class="ml-2 text-xs text-gray700">50 lessons</span>
		        </div>
	            <div class="flex items-center mt-2">
			        <svg class="h-4 w-4 fill-current main-color" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			        	<path d="M11.91 0v2.56h8.18V0h-8.18zM16 3.84c-8.268 0-15 6.32-15 14.08S7.734 32 16 32c8.268 0 15-6.32 15-14.08 0-3.735-1.55-7.155-4.09-9.68l2.343-2.2-1.962-1.842-2.468 2.322C22.259 4.772 19.169 3.833 16 3.84zm0 2.56c6.79 0 12.273 5.146 12.273 11.52S22.79 29.44 16 29.44c-6.79 0-12.273-5.146-12.273-11.52S9.21 6.4 16 6.4zm-1.364 2.56v6.76c-.815.445-1.363 1.254-1.363 2.2 0 .945.548 1.755 1.363 2.2v1.64h2.728v-1.64c.815-.445 1.363-1.254 1.363-2.2 0-.945-.548-1.755-1.363-2.2V8.96h-2.728z" />
			        </svg>
	    	        <span class="ml-2 text-xs text-gray-700">{{course.totaltime}} minutes</span>
	            </div>
		        <div class="flex items-center mt-2">
			        <svg class="h-4 w-4 fill-current main-color" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			        	<path d="M32 30.667c0 .36-.099.673-.297.937-.198.264-.432.396-.703.396-.27 0-.505-.132-.703-.396a1.519 1.519 0 01-.297-.937V13.125L18.969 20.5c-.834.556-1.823.833-2.969.833s-2.135-.277-2.969-.833L1.22 12.625C.406 12.069 0 11.41 0 10.645c0-.763.406-1.409 1.219-1.937L13.03.833C13.865.278 14.854 0 16 0s2.135.278 2.969.833L30.78 8.708c.709.473 1.104 1.056 1.188 1.75.02.028.031.084.031.167v20.042zm-12.031-9.5L26 17.125V25c0 1.194-.974 2.215-2.922 3.063-1.948.847-4.307 1.27-7.078 1.27-2.77 0-5.13-.423-7.078-1.27C6.974 27.215 6 26.194 6 25v-7.875l6.031 4.042c.834.555 2.156.833 3.969.833 1.813 0 3.135-.278 3.969-.833z" />
			        </svg>
	    	        <span class="ml-2 text-xs text-gray-700">2000 students enrolled this course all over the world</span>
	            </div>
	        </section>
	        <section class="lg:w-2/5 w-full mx-auto h-auto lg:py-12 md:py-2 py-1 mb-6 lg:mb-0">
	        	<div class="relative pb-9/16 ">
	        		<iframe class="absolute w-full h-full md:px-8 sm:px-1 lg:p-0" src="https://player.vimeo.com/video/463168822" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	        	</div>
			    
		        <div class="flex mt-8 justify-center">
					<button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" @click="$router.push({name: 'enroll'})">Enroll Now</button>
		        </div>
			</section>
	    </div>
	</div>
</template>
<script>
	export default {
		name: 'pr_course_intro',
		props: ['course'],
	}
</script>