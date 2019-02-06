<template>
  <div class="row main">
    <tools/>
    <list/>
    <edit/>
  </div>
</template>
<script>
import tools from "./components/tools";
import list from "./components/list";
import edit from "./components/edit";

export default {
  components: {
    tools,
    list,
    edit
  }
};
</script>
<style>
body,
html {
  width: 100%;
  height: 100%;
}
.container-fluid {
  height: 100%;
  min-width: 1300px;
}
.main {
  height: 100%;
}
</style>

