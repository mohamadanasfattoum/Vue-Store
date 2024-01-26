<template>
<div class="row mt-5">
  <div class="col-lg-3" v-for="course in courses" :key="course.id">
    <div class="card">
      <img :src="course.image" class="card-img-top img-fluid" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ course.name }}</h5>
        <p>{{ course.category }}</p>
        <RouterLink class="btn btn-primary" to="/course-detail">Course Detail</RouterLink>

      </div>
    </div>
  </div>

</div>
</template>



<script>

  import { courses } from '../tem-data'

  export default {
    name: 'CourseList',
    data(){
      return{
        courses: courses
      }
    }
  }
</script>