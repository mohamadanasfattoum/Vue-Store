<template>
  <div class="row mt-5">
    <div class="col-lg-3 mt-4" v-for="course in courses" :key="course.id">
      <Card style="overflow: hidden">
        <template #header>
          <img alt="user header" :src="course.image" class="image" />
        </template>
        <template #title>{{ course.name }}</template>
        <template #subtitle>{{ course.category }}</template>
        <template #content>
          <p class="m-0">
            {{ course.subtitle }}
          </p>
          <p>{{ course.price }} $</p>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <Button label="Course Detail" class="w-full" />
          </div>
        </template>
      </Card>

    </div>

  </div>
</template>



<script>
  export default {
    name: 'CourseList',
    props: ['courses']
  }
</script>

<style>
  .image {
    width: 300px;
    height: 150px;
  }
</style>