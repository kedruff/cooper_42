
<template>
  <h3>{{ text }} </h3>
</template>


<script>
export default {
  name: "question-detail",
  props: {
    text: String
  }
}
</script>

<style scoped>
  h3 { 
    font-size: 1.25rem;
    font-weight: bold;
    color: dodgerblue;
  }
</style>