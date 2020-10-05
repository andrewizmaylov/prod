<template>
	<div>
		<span class="text-2xl">Course description</span>
		<form class="w-4/5 mx-auto mb-16" method="POST" @submit.prevent="addCourse">
			<input class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="New Course title" v-model="course.title">
			<input class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subtitle" type="text" placeholder="Subtitle" v-model="course.subtitle">
			<textarea name="description" rows="9" class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" v-model="course.description">Say something about the New Course...</textarea>
			<button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">Create New Course</button>	
		</form>

		<span class="text-2xl" @click="statments++">Statments</span>
		<form class="w-4/5 mx-auto">
			<section v-for="i in statments">
				<input class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Statment definition" v-model="statment.title">
				<textarea name="agenda" rows="2" class="mb-6 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="agenda" v-model="statment.agenda">...</textarea>
				<button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Add Statment</button>
			</section>
			
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
				statments: 1,
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
				 
			}
		}
	}
</script>