<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Courses</RouterLink>
        <RouterLink to="/course-detail">Course Detail</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>


