<template>
	<div>
		<span class="text-2xl">Course description</span>
		<form class="w-4/5 mx-auto mb-16" method="POST" @submit.prevent="addCourse">
			<input class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="New Course title" v-model="course.title">
			<input class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subtitle" type="text" placeholder="Subtitle" v-model="course.subtitle">
			<textarea name="description" rows="9" class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" v-model="course.description">Say something about the New Course...</textarea>
			<button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">Create New Course</button>	
		</form>

		<span class="text-2xl">Statments</span>
		<form class="w-4/5 mx-auto mb-16" method="POST" @submit.prevent="addStatment">
			<input class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Statment definition" v-model="statment.definition">
			<textarea name="agenda" rows="2" class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="agenda" v-model="statment.description">...</textarea>
			<button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">Add Statment</button>
		</form>

		<span class="text-2xl">Chapter</span>
		<form class="w-4/5 mx-auto mb-16" method="POST" @submit.prevent="addChapter">
			<input class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Chapter title" v-model="chapter.title">
			<input class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Chapter description" v-model="chapter.description">
			<button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">Add Statment</button>
		</form>

		<span class="text-2xl">Lessons</span>
		<form class="w-4/5 mx-auto mb-16" method="POST" @submit.prevent="addLesson">
			<input class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Lesson number" v-model="lesson.number">
			<input class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Lesson title" v-model="lesson.title">
			<textarea name="agenda" rows="2" class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" v-model="lesson.description">...</textarea>
			<input class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Lesson url" v-model="lesson.url">
			<input class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="duration" v-model="lesson.duration">
			
			<button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">Add Statment</button>
		</form>

	</div>
</template>
<script>
	export default {
		name: 'describe',
		data() {
			return {
				course: new Form ({}),
				statment: new Form({}),
				chapter: new Form({}),
				lesson: new Form({}),
			}
		},
		methods: {
			addCourse() {
				axios.post('/admin/create_course', this.course)
				    .then(response => {
				        console.log(response);
				    })
				    .catch(error => {
				        console.log(error);
				    });
				 
			},
			addStatment() {
				axios.post('/admin/create_statment', this.statment)
				    .then(response => {
				        console.log(response);
				    })
				    .catch(error => {
				        console.log(error);
				    });
				 
			},
			addChapter() {
				axios.post('/admin/create_chapter', this.chapter)
				    .then(response => {
				        console.log(response);
				    })
				    .catch(error => {
				        console.log(error);
				    });
				 
			},
			addLesson() {
				axios.post('/admin/add_lesson', this.lesson)
				    .then(response => {
				        console.log(response);
				    })
				    .catch(error => {
				        console.log(error);
				    });
				 
			},
		}
	}
</script>