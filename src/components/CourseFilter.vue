
<template>
  <div class="container">
    <h3>CourseFilter</h3>
    <form>
      <div class="mt-3">
        <label for="" class="my-2">Filter By Category </label>
        <div class="flex align-items-center my-2" v-for="cat in category" :key="cat.id">
          <Checkbox v-model="selectedCategory" class="me-2 " :inputId="cat.id" name="pizza" :value="cat.id" />
          <label :for="cat.id" class="ml-2 "> {{ cat.name }} </label>
        </div>
      </div>
    </form>
  </div>

</template>

<script>

  export default {
    name: 'CourseFilter',
    data(){
      return{
        category:[
          {id:1, name:'Web Development'},
          {id:2, name:'Mobile Development'},
          {id:3, name:'AI Development'},
          
        ],
        selectedCategory: []
      }
    },
    watch:{
      selectedCategory(){
        this.$emit('category-updated', this.selectedCategory)
      }
    }
  }

</script>