<template>
	<div class="bg-gray-100 w-full">
		<section class="container px-5 py-12 mx-auto lg:w-5/6 lg:flex block">
			<div class="flex flex-col mx-auto" :class="isAdmin ? 'w-full' : 'lg:w-1/2 md:w-4/5 w-full '">
				<span class="text-lg text-gray-800 my-4 pl-6" v-if="content.length>0">Course content:</span>
 
				<div v-for="item in content">
					<div class="mb-6 bg-white p-4 rounded border border-indigo-200" style="box-shadow: rgb(67 110 167 / 9%) 4px 7px 13px 1px;">
						<div class="flex items-center justify-between" :class="!item.status ? '' : 'mb-3'" >
							<span class="flex items-center" @click="selectChapter(item)">
								<svg class="fill-current text-gray-400 h-3 w-3 mx-3" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path v-show="!item.status" d="M14.545 6.495H9.508V1.458c0-1.943-3.013-1.943-3.013 0v5.037H1.458c-1.942 0-1.942 3.013 0 3.013h5.037v5.037c0 1.943 3.013 1.943 3.013 0V9.508h5.037c1.942 0 1.942-3.013 0-3.013z" />
									<path v-show="item.status" d="M13.694 11.563L10.13 8.001l3.563-3.562c1.373-1.373-.757-3.504-2.13-2.13L8 5.871 4.44 2.309C3.066.936.936 3.066 2.31 4.439l3.562 3.562-3.562 3.562c-1.373 1.374.757 3.504 2.13 2.13l3.562-3.562 3.562 3.562c1.374 1.374 3.504-.756 2.13-2.13z" /></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs>
								</svg>
								<h2 class="text-lg text-gray-800 ml-2 pr-4 ">{{item.title}}</h2>
							</span>
<!-- edit chapter icon  or chron data -->
							<svg class="h-4 w-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" @click="editChapter(item)" v-show="isAdmin">
							  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
							</svg>
							
						</div>
						<div v-show="item.status">
							<div class="mt-1 mb-4 pl-4 text-xs text-gray-600 ">
								<span v-for="i in lessons" class="flex justify-between items-center">
									<span class="flex items-center">
										<svg class="h-4 w-4 text-main-color mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										  <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z" clip-rule="evenodd" />
										</svg>
										{{i.title}}
									</span>
									<div>
										<span v-show="!isAdmin">{{i.duration}}</span>
										<svg class="h-4 w-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" @click="editLesson(i)" v-show="isAdmin">
										  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
										</svg>
									</div>
								</span>
							</div>
							<span class="py-2 px-6 mt-2 text-main-color" @click='addLesson(item.id)' v-show="isAdmin">add lesson</span>
						</div>
					</div>
				</div>

			</div>
			<div class="flex flex-col lg:w-1/2 md:w-4/5 w-full mx-auto p-8 text-sm items-center" v-show="!isAdmin">
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
		props: ['content', 'isAdmin'],
		data() {
			return {
				lessons: [],
			}
		},
		methods: {
			selectChapter(item) {
				let status = item.status;
				this.content.filter(item => item.status = false);
				item.status = !status;
				this.lessons = axios.get('/lessons/'+item.id)
				    .then(response => {
				    	this.lessons = response.data;
				    	this.$emit('chapterSelected', item);
				    })
				    .catch(error => {
				        console.log(error);
				    });
			},
			addLesson(id) {
				let chapter = this.content.filter(chapter => chapter.id == id);
				this.$emit('newLesson', chapter);
			},
			editLesson(lesson) {
				this.$emit('editLesson', lesson);
			},
			editChapter(chapter) {
				this.$emit('editChapter', chapter);
			},
		},

	}
</script>