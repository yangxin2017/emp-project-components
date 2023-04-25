<template>
  <div>
    <h1>Base App</h1>
    <img :src="require('./logo.png')" alt="logo" />
    <Content />
  </div>
</template>

<script>
import Content from "./components/Content";
export default {
  components: {
    Content,
  },
};
</script>

<style scoped>
img {
  width: 200px;
}

h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 60px;
}
</style>
