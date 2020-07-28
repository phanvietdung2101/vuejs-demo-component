<template>
  <div id="App" :style="{ fontSize: postFontSize + 'em'}">
    <div>
      <my-component></my-component>
      <my-component></my-component>
      <my-component></my-component>
    </div>
    <div>
      <blog-component v-for="post of posts" :key="post" :post="post"></blog-component>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      posts: [
        { id: 1, title: "Giới thiệu về Vue" },
        { id: 2, title: "Các khái niệm trong Vue" },
        { id: 3, title: "Vue căn bản và vô cùng nâng cao" },
      ],
      postFontSize: 1
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
