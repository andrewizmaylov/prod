<template>
	<div class="max-w-5xl lg:w-4/5 md:w-5/6 w-4/5 mx-auto mt-12">
		<div v-show="!edit_mode">
			<div class="flex flex-wrap -m-4">
				<pr_module v-for="course in courses" :key="course.id" :module="course" :action="'Edit info'" class="p-4 lg:w-1/3 md:w-1/2 sm:w-2/3 mx-auto" @select="editCourse($event)"></pr_module>
				<pr_module :module="{img: '/img/module_add.svg'}" :action="'Create New Course'" class="p-4 lg:w-1/3 md:w-1/2 sm:w-2/3 mx-auto" @select="editCourse($event)"></pr_module>
			</div>
		</div>
		<section v-show="edit_mode">
			<div class="flex -mx-2">
				<span class="w-1/2 px-6 py-2 bg-main-color mx-2 rounded text-center font-medium text-white" @click="initialize(course, 'course')" v-show="!editable">Edit entry</span>
				<span class="w-1/2 px-6 py-2 bg-main-color mx-2 rounded text-center font-medium text-white" @click="clearCourse" v-show="editable">Cancel</span>
				
				<span class="w-1/2 px-6 py-2 bg-main-color mx-2 rounded text-center font-medium text-white" @click="newCourse">New entry</span>
			</div>
			<!-- describe course section -->
			<pr_course_intro :course="course" v-show="!editable"></pr_course_intro>
			<section class="px-8 py-8 my-6 bg-gray-100">
				<form class="w-4/5 mx-auto mb-16" @submit.prevent="addRecord(course)" v-show="editable">
					<label class="block text-2xl text-gray-800 mb-2 ml-2">Course description</label>
					<input class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="New Course title" v-model="course.title">
					<input class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subtitle" type="text" placeholder="Subtitle" v-model="course.subtitle">
					<textarea name="description" rows="9" class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" v-model="course.description">Say something about the New Course...</textarea>

					<button class="shadow bg-main-color hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">{{btn}} Course</button>	
				</form>
			</section>

			<form class="w-4/5 mx-auto mb-16" @submit.prevent="addRecord(statment)">
				<label class="block text-2xl text-gray-800 mb-2 ml-2">Statments</label>
				<input class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Statment definition" v-model="statment.definition">
				<textarea name="agenda" rows="2" class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="agenda" v-model="statment.description">...</textarea>

				<button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">{{btn}} Statment</button>
			</form>

			<form class="w-4/5 mx-auto mb-16" @submit.prevent="addRecord(chapter)">
				<label class="block text-2xl text-gray-800 mb-2 ml-2">Chapter</label>
				<input class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Chapter title" v-model="chapter.title">
				<input class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Chapter description" v-model="chapter.description">

				<button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">Add Statment</button>
			</form>

			<form class="w-4/5 mx-auto mb-16" @submit.prevent="addRecord(lesson)">
				<label class="block text-2xl text-gray-800 mb-2 ml-2">Lessons</label>
				<input class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Lesson number" v-model="lesson.number">
				<input class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Lesson title" v-model="lesson.title">
				<textarea name="agenda" rows="2" class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" v-model="lesson.description">...</textarea>
				<input class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Lesson url" v-model="lesson.url">
				<input class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="duration" v-model="lesson.duration">
				
				<button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">Add Statment</button>
			</form>
		</section>
	</div>
</template>
<script>
	import pr_module from './pr_module.vue';
	import pr_course_intro from './pr_course_intro.vue';

	export default {
		name: 'describe',
		components: {pr_module, pr_course_intro},
		data() {
			return {
				course: new Form ({}),

				statments: [],
				chapters: [],
				lessons: [],

				statment: new Form({}),
				chapter: new Form({}),
				lesson: new Form({}),

				model_name: '', //model name for define the axios route (course, statment etc)
				method: '',
				path: '', // path for axios call
				btn: '',

				edit_mode: false,
				editable: false,
				courses: [],
			}
		},
		created(){
			axios.get('/admin/course_get')
			    .then(response => {
			        console.log(response);
				    this.courses = response.data;
			    })
			    .catch(error => {
			        console.log(error);
			    });
		},
		methods: {
			editCourse(input_data) {
				if(input_data.id) {
			    	this.course = input_data;
			    	this.edit_mode = true;
			    	axios.get('/course/'+input_data.id)
			    	    .then(response => {
			    	    	this.statments = response.data[0];
			    	    	this.chapters = response.data[1];
			    	    })
			    	    .catch(error => {
			    	        console.log(error);
			    	    });
				} else {
					this.newCourse();
				}
				
			},
			newCourse() {
				this.clearCourse();
				this.edit_mode = true;
				this.editable = true;
				this.path = '/admin/create_course';
			},
			clearCourse() {
				this.course = {};
				this.statments = [];
				this.chapters = [];
				this.lessons = [];
				this.edit_mode = false;
				this.editable = false;
				this.path = '';
				this.model = '';
				this.btn = '';
			},
			initialize(model, model_name) {
				this.model_name = model_name;
				this.editable = true;
				if(model.id) {
					this.path = '/admin/update_'+this.model_name+'/'+model.id;
					this.btn = 'Update ';
				} else {
					this.path = '/admin/create_'+this.model;
					this.btn = 'Create New ';
				}			
			},
			addRecord(data) {
				axios.post(this.path, data)
				    .then(response => {
				        console.log(response);
				        // this.clearForm();
				    })
				    .catch(error => {
				        console.log(error);
				    });
			},

		}
	}
</script>