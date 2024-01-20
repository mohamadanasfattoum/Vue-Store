
<template>
  <h3>Courses Page</h3>

  <div>
    <CourseFilter />
  </div>

  <div>
    <CourseList />
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