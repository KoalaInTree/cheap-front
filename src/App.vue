<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
  }
</script>

<style>
#app {
  font-family: "Microsoft YaHei","Helvetica Neue", Helvetica, STHeiTi, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  word-break:normal;
  white-space:pre-warp;
  width: 95%;
  background-color: #f6f6f6;
  margin: 6vh auto;
}
</style>
