<script>
	export default {
		data() {
			return {
				courses: [],
				statments: [],
				chapters: [],
				lessons: [],

				lessonsCount: '',
				duration: '',
				students: 256,

				course: new Form ({}),
				statment: new Form({}),
				chapter: new Form({}),
				lesson: new Form({}),

				selected: [], // for users side determ which module is currently selected
			}
		},
		created() {
			axios.get('/admin/course_get')
			    .then(response => {
				    this.courses = response.data;
				    this.courses.filter(course => course.loaded = false)
				    this.init();
			    })
			    .catch(error => {
			        console.log(error);
			    });
		},
		mounted() {

		},
		methods: {
			init(id) {
				if (id) {
					this.courses.filter(course => {
						if (course.id == id) {
							this.course = course;
						}
					})
				} else {
					this.course = this.courses[0];
				}
				this.course.loaded = true;
				this.selected = this.courses.filter(course => course.loaded == false);

		    	this.updateModels();
			},

			loadCourse(input_data) {
				if(input_data.id) {
			    	this.course = input_data;
			    	this.edit_mode = true;
			    	this.updateModels();
				} else {
					this.newCourse();
				}
			},
			updateModels() {
				axios.get('/course/'+this.course.id)
				    .then(response => {
				    	this.statments = response.data[0];
				    	this.chapters = response.data[1];
				    	this.lessonsCount = response.data[2];
				    	this.duration = response.data[3];
				    	// this.students = this.students;
				    })
				    .catch(error => {
				        console.log(error);
				    });
			},
		}
	}
</script>