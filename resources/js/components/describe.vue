<template>
	<div class="relevant max-w-5xl lg:w-4/5 md:w-5/6 w-4/5 mx-auto mt-12">
		<div v-show="!edit_mode">
			<div class="flex flex-wrap -m-4">
				<pr_module v-for="course in courses" :key="course.id" :module="course" :isAdmin=true :action="'Edit info'" class="p-4 lg:w-1/3 md:w-1/2 sm:w-2/3 mx-auto" @select="loadCourse($event)"></pr_module>
				<pr_module :module="{img: '/module_add.svg'}" :action="'Create New Course'" class="p-4 lg:w-1/3 md:w-1/2 sm:w-2/3 mx-auto" @select="loadCourse($event)"  v-show="!show_form"></pr_module>
			</div>
		</div>

		<section v-show="edit_mode">
			<!-- top set of buttons -->
			<div class="flex -mx-2">
				<span class="w-1/2 px-6 py-2 bg-main-color mx-2 rounded text-center font-medium text-white" @click="initialize(course, 'course')" v-show="!editable">Edit Course</span>
				<span class="w-1/2 px-6 py-2 bg-main-color mx-2 rounded text-center font-medium text-white" @click="clearCourse" v-show="editable">All Courses</span>
				
				<span class="w-1/2 px-6 py-2 bg-main-color mx-2 rounded text-center font-medium text-white" @click="newCourse" :class="editable ? 'hidden' :'' ">New Course</span>
			</div>
			<!-- describe course section -->
			<section class="mt-6">
				<pr_course_intro :course="course" :lessonsCount="lessonsCount" :duration="duration" :students='students' v-show="model_name !== 'course'"></pr_course_intro>
				<form class="w-4/5 mx-auto mb-16" @submit.prevent="addRecord(course)" v-show="model_name == 'course'" @input="setPath($event.target.name)">
					<label class="block text-2xl text-gray-800 mb-2 ml-2">Course description</label>
					<input name="course" class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="New Course title" v-model="course.title">
					<input name="course" class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subtitle" type="text" placeholder="Subtitle" v-model="course.subtitle">
					<textarea name="course" rows="9" class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" v-model="course.description">Say something about the New Course...</textarea>
					<div class="flex" v-show="model_name == 'course'">
						<button class="shadow bg-main-color hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" :disabled="this.model_name !=='course'">{{btn}} Course</button>	
						<span class="text-main-color ml-auto px-4" @click="cancelForm">Cancel</span>
					</div>
				</form>

			</section>

			<!-- describe statment section -->
			<section class="p-8 my-6 bg-gray-100">
				<div class="flex mb-4">
					<span class="block text-2xl text-gray-800 mb-2 " :class="model_name == 'statment' ? 'mx-auto' : 'ml-2'">Statments section</span>
					<span class="text-main-color px-4 ml-auto" @click="addEntry('statment')" v-if="model_name !== 'statment'">New Statment</span>
				</div>
				<div class="flex flex-wrap px-8">
					<pr_course_statment v-for="item in statments" :key="item.id" :data="item" :isAdmin=true class="mb-8" @editStatment="initialize(item, 'statment')" @changeStatmentImg="changeImage($event, item, 'statment')"></pr_course_statment>
				</div>
				<section v-show="!show_form">
					<form class="w-4/5 mx-auto mt-6 mb-16" @submit.prevent="createStatment()" @input="setPath($event.target.name)" v-show="model_name == 'statment'">
						<input name="statment" class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Statment definition" v-model="statment.definition">
						<textarea name="statment" rows="2" class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="agenda" v-model="statment.description">...</textarea>
						<div class="flex">
							<button class="shadow bg-main-color hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" :disabled="!this.course.id" >{{btn}} Statment</button>
							<span class="text-main-color ml-auto px-4" @click="cancelForm">Cancel</span>
							<span class="text-main-color px-4" @click="statment = {}">Clear Statment</span>
						</div>
					</form>
				</section>
			</section>

			<!-- describe shapetrs and lessons section -->
			<section class="px-8 py-8 my-6 bg-gray-100" v-show="!show_form">
				<div class="flex mb-4">
					<span class="block text-2xl text-gray-800 mb-2 " :class="model_name == 'chapter' ? 'mx-auto' : 'ml-2'">Chapters/Lessons section</span>
					<span class="text-main-color px-4 ml-auto" @click="addEntry('chapter')" v-if="model_name !== 'chapter'">New Chapter</span>
				</div>
				<pr_course_content :content="chapters" :isAdmin=true @newLesson="newLesson($event)" @editLesson="editLesson($event)" @editChapter="editChapter($event)" @chapterSelected="chapterSelected($event)" class="-mt-12"></pr_course_content>
				<form class="w-4/5 mx-auto mb-16" @submit.prevent="createChapter()" v-show="model_name == 'chapter'" @input="setPath($event.target.name)">
					<input name="chapter" class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Chapter title" v-model="chapter.title">
					<input name="chapter" class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Chapter description" v-model="chapter.description">
					<div class="flex">
						<button class="shadow bg-main-color hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" :disabled="!this.course.id" >{{btn}} Chapter</button>
						<span class="text-main-color ml-auto px-4" @click="cancelForm">Cancel</span>
						<span class="text-main-color px-4" @click="chapter = {}">Clear Chapter</span>
					</div>
				</form>

				<form class="w-4/5 mx-auto mb-16" @submit.prevent="createLesson()" v-show="model_name == 'lesson'" @input="setPath($event.target.name)">
					<label class="block text-2xl text-gray-800 mb-2 ml-2">Lessons</label>
					<input name="lesson" class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Lesson number" v-model="lesson.number">
					<input name="lesson" class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Lesson title" v-model="lesson.title">
					<textarea name="lesson" rows="2" class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" v-model="lesson.description">...</textarea>
					<input name="lesson" class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Lesson url" v-model="lesson.url">
					<input name="lesson" class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="duration" v-model="lesson.duration">
					<div class="flex">
						<button class="shadow bg-main-color hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" :disabled="!this.chapter.id">{{btn}} Lesson</button>
						<span class="text-main-color ml-auto px-4" @click="cancelForm">Cancel</span>
						<span class="text-main-color px-4" @click="lesson = {}">Clear Lesson</span>
					</div>
				</form>
			</section>

		</section>


<!-- 			<form class="flex justify-center my-4" enctype="multipart/form-data" action="/change_image" method="post" v-show="show_form">
				<input type="file" name="file" id="file" @change="changeImage" class="py-6 px-8 hidden">
				<label for="file" class="flex items-center text-main-color text-sm py-2 px-4">
					<span>Select new Image for {{this.model_name}}</span>
					<svg class="w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
					</svg>
				</label>
				<span class="text-main-color text-sm py-2 px-4" @click="cancelForm">Cancel</span>
			</form> -->

	</div>
</template>
<script>
	import pr_module from './pr_module.vue';
	import pr_course_intro from './pr_course_intro.vue';
	import pr_course_statment from './pr_course_statment.vue';
	import pr_course_content from './pr_course_content.vue';
	
	import basic_logic from './basic_logic.vue';

	export default {
		name: 'describe',
		extends: basic_logic,
		components: {pr_module, pr_course_intro, pr_course_statment, pr_course_content},
		data() {
			return {
				model_name: '', //model name for define the axios route (course, statment etc)
				method: '',
				path: '', // path for axios call
				btn: '',

				edit_mode: false,
				editable: false,

				show_form: false,
				backup: [],
			}
		},
		methods: {
			newCourse() {
				this.backup = this.courses;
				this.clearCourse();
				this.edit_mode = true;
				this.editable = true;
				this.model_name = 'course';
				this.btn = 'Create New ';
				this.path = '/admin/create_course';
			},
			clearCourse() {
				this.course = {};
				this.editable = false;
				this.courses = this.backup;
				this.clearForm();
			},
			clearForm() {
				this.statments = [];
				this.chapters = [];
				this.lessons = [];
				this.duration = '';
				this.lessonsCount = '';
				this.edit_mode = false;
				this.editable = false;
				this.path = '';
				this.model = '';
				this.btn = '';
			},
			clearModel(model) {
				this[model] = {};
				this.setPath(model);
			},
			newLesson(data) {
				this.chapter = data[0];
				this.lesson = {};
				this.model_name = 'lesson';
				this.edit_mode = true;
				this.editable = true;
				this.path = '/admin/create_lesson';
			},
			editLesson(data) {
				this.lesson = data;
				this.model_name = 'lesson';
				this.edit_mode = true;
				this.editable = true;
				this.path = '/admin/update_lesson';
			},

			editChapter(data) {
				this.chapter = data;
				this.model_name = 'chapter';
				this.edit_mode = true;
				this.editable = true;
				this.path = '/admin/update_chapter';
			},

			// activate correspondent filled form to edit already existing row
			initialize(model, model_name) {
				console.log('model.id: ', model.id);
				this.editable = true;
				this.filter(model, model_name);
				// this.edit_mode = true;
				this[model_name] = model;
				this.setPath(model_name);		
			},
			// activate corresponding form to add completely new entry to database
			addEntry(entry) {
				this.model_name=entry;
				this[entry] = {};
				this.filter(this[entry], this.model_name);
			},
			// filter array make only editable show
			filter(model, model_name) {
				let name = model_name+'s';
				this.backup = this[name];
				return this[name] = this[name].filter(i => i.id == model.id);
			},
			// rebuild array after chanceling filter
			rebuild() {
				this[this.model_name] = {};
				this.model_name = '';
				this.editable = false;
				this.btn = 'Create New '
				this.updateModels();
			},

			chapterSelected(data) {
				this.chapter = data;
			},

			setPath(model_name) {
				this.model_name = model_name;
				if(this[model_name].id) {
					this.path = '/admin/update_'+this.model_name+'/'+this[model_name].id;
					this.btn = 'Update ';
				} else {
					this.path = '/admin/create_'+model_name;
					this.btn = 'Create New ';
				}	
			},
			createCourse() {
				axios.post(this.path, this.course)
				    .then(response => {
				    	console.log(response.data);
				        if (!this.course.id) {
				        	this.course.id = response.data.last_insert_id;
				        }
				    })
				    .catch(error => {
				        console.log(error);
				    });
			},
			createStatment() {
				this.statment.course_id = this.course.id;
				this.addRecord(this.statment);
			},
			createChapter() {
				this.chapter.course_id = this.course.id;
				this.addRecord(this.chapter);
			},
			createLesson() {
				this.lesson.chapter_id = this.chapter.id;
				this.addRecord(this.lesson);
			},
			addRecord(data) {
				axios.post(this.path, data)
				    .then(response => {
				    	console.log(response.data);
				    	this.updateModels();
				    	this.clearModel(this.model_name);
				    })
				    .catch(error => {
				        console.log(error);
				    });
			},

			showForm(event, model_name) {
				this.show_form = true;
				this.initialize(event, model_name);
			},
			cancelForm() {
				this.editable = false;
				this.show_form = false;
				let name = this.model_name+'s';
				this[name] = this.backup;
				this.backup = [];
				if(this.model_name == 'course' && !this.course.id) {
					console.log('exit from the form');
					this.edit_mode = false;
				}
				this.model_name = '';
			},
			chmage(item, model_name) {
				console.log(item.id);
				console.log(model_name);			
			},
			changeImage(file_name, item, model_name) {
				console.log(file_name);
				console.log(item);
				console.log(model_name);

				this[model_name] = item;
				this[model_name].img = file_name;
				this.setPath(model_name);
				this.addRecord(this[model_name]);
			},

		}
	}
</script>