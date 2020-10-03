<template>
	<div class="bg-gray-100 w-full">
		<section class="container px-5 py-12 mx-auto lg:w-4/5 lg:flex block">
			<div class="flex flex-col lg:w-1/2 md:w-4/5 w-full mx-auto">
				<span class="text-lg text-gray-800 my-4 pl-6">Course content:</span>

				<div v-for="item in content">
					<div class="mb-6 bg-white p-4 rounded border border-indigo-200" style="box-shadow: rgb(67 110 167 / 9%) 4px 7px 13px 1px;" @click="item.status=!item.status">
						<div class="flex items-center " :class="item.status ? '' : 'mb-3'  " >
							<svg class="fill-current text-gray-400 h-3 w-3 mx-3" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path v-show="item.status" d="M14.545 6.495H9.508V1.458c0-1.943-3.013-1.943-3.013 0v5.037H1.458c-1.942 0-1.942 3.013 0 3.013h5.037v5.037c0 1.943 3.013 1.943 3.013 0V9.508h5.037c1.942 0 1.942-3.013 0-3.013z" />
								<path v-show="!item.status" d="M13.694 11.563L10.13 8.001l3.563-3.562c1.373-1.373-.757-3.504-2.13-2.13L8 5.871 4.44 2.309C3.066.936.936 3.066 2.31 4.439l3.562 3.562-3.562 3.562c-1.373 1.374.757 3.504 2.13 2.13l3.562-3.562 3.562 3.562c1.374 1.374 3.504-.756 2.13-2.13z" /></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs>
							</svg>
							<h2 class="text-lg text-gray-800 ml-2">{{item.title}}</h2>
							
						</div>
						<ul v-for="i in item.lessons" class="mt-1 pl-16 text-xs text-gray-600 list-disc " v-show="!item.status">
							<li>{{i}}</li>
						</ul>
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
</template>
<script>
	export default {
		name: 'pr_course_content',
		props: ['content']
	}
</script>