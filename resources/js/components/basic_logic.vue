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
			}
		},
		created() {
			axios.get('/admin/course_get')
			    .then(response => {
				    this.courses = response.data;
			    })
			    .catch(error => {
			        console.log(error);
			    });
		},

		methods: {
			loadCourse(input_data) {
				if(input_data.id) {
					// this.initialize(input_data, 'course');
			    	this.course = input_data;
			    	this.edit_mode = true;
			    	this.updateModels();
			    	// this.course.lessonsCount = this.lessonsCount;
			    	// this.course.duration = this.durations;
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