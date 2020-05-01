<template>
  <div id="app">
    <img alt="42" src="./assets/jackiejersey.jpg" width="200px" />

    <router-view></router-view>
    <div class="content-card">
      <HelloWorld msg="A tribute to Jackie Robinson #42" />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-image: url("./assets/Robinson-Jackie-3102-93_Bat_CSU.jpg");
  background-position: -25rem 0;
  background-repeat: no-repeat;
}

.content-card {
  border: 1px solid dodgerblue;
  background: dodgerblue;
  opacity: 90%;
  padding: 0.5rem;
  width: 37.5rem;
  margin: 0 auto;
  color: rgb(50, 450, 255);
}
</style>
