<template>
	<div class="flex flex-col lg:w-1/4 md:w-1/2 sm:w-2/3 mx-auto my-6 p-2 items-center" >
        <form enctype="multipart/form-data" v-show="isAdmin">
        	<label for="file">
        	    <img :src="'/img/'+data.img" class="w-48 h-48 mx-auto" />
        	</label>

        	<input id="file" type="file" ref="myFiles" @change="changeImage('statment')" class="hidden" />
        </form>
		<img :src="'/img/'+data.img" alt="" class="w-48 h-48 mx-auto" v-show="!isAdmin">
		<div class="text-center my-4 font-medium">{{data.definition}}</div>
		<div class="mx-2">
			<ul class="mb-1 px-4">

				<li class="list-none text-center text-sm text-gray-700">{{data.description}}</li>
				<!-- <li v-for="i in data.description" class="list-none text-center text-sm text-gray-700">{{i}}</li> -->
			</ul>	
		</div>
        <div class="mt-4 mb-6" v-show="isAdmin" @click="editStatment">
            <span class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 main-color">Edit Statment
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              		<path d="M5 12h14"></path>
              		<path d="M12 5l7 7-7 7"></path>
            	</svg>
            </span>
        </div>
	</div>
</template>
<script>
	export default {
		name: 'pr_course_statment',
		props: ['data','isAdmin'],
		methods: {
			changeImage(data) {
				alert(data);
				let formData = new FormData();

				formData.append('file', this.$refs.myFiles.files[0]);

				axios.post('/change_image', formData, {
			        headers: {
			          'Content-Type': 'multipart/form-data'
			        }
				})
					.then(response => {
						// window.location.reload();
						console.log(response.data.new_image);
						this.img = response.data;
						console.log(this.img.new_image);

						// window.location.replace('/#/account/info');
					})
			},
			editStatment() {
				this.$emit('editStatment');
			}
		}
	}
</script>