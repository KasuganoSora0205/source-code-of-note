<template>
  <div class="col-xs-8 edit" v-if="beChecked||addAticle">
    <input class="title" type="text" placeholder="无标题笔记" v-model="title">
    <textarea class="edit-area" v-model="content"></textarea>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      title: "",
      content: ""
    };
  },
  methods: {
    ...mapMutations(["saveTitle", "saveContent"])
  },
  computed: {
    ...mapState(["aticleList", "addAticle", "beChecked"])
  },
  watch: {
    beChecked() {
      if (this.beChecked) {
        this.title = this.beChecked.title;
        this.content = this.beChecked.content;
      }
    },
    title() {
      if (this.beChecked) {
        this.saveTitle(this.title);
      }
    },
    content() {
      if (this.beChecked) {
        this.saveContent(this.content);
      }
    }
  }
};
</script>
<style scoped>
.title {
  height: 50px;
  width: 100%;
  border: none;
  padding-left: 20px;
  font-size: 20px;
  outline: none;
  border-bottom: 1px solid rgb(204, 200, 200);
}
.edit-area {
  overflow: hidden;
  resize: none;
  width: 100%;
  height: 600px;
  border: none;
  outline: none;
  padding: 50px;
  font-size: 14px;
}
</style>
