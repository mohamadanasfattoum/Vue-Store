
<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-3">
        <CourseFilter />
      </div>
      <div class="col-lg-9">
        <CourseList />
      </div>

    </div>
  </div>

</template>


<script>

  import CourseList from '@/components/CourseList.vue';
  import CourseFilter from '@/components/CourseFilter.vue';

  export default {
    name: 'CoursesPage',
    components: {
      CourseList,
      CourseFilter
    }
  }
</script>