<template>
  <div class="col-xs-1 tools">
      <div id="head-shot"></div>
    <span class="add glyphicon glyphicon-plus" @click="$store.commit('newArticle')"></span>
    <span
      class="love"
      :class="{'glyphicon glyphicon-star-empty': !flag,'glyphicon glyphicon-star' : flag}"
      @click="$store.commit('favorite')"
    ></span>
    <span class="delete glyphicon glyphicon-remove" @click="del"></span>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["newArticle", "favorite", "del"])
  },
  computed: {
    ...mapState(["beChecked"]),
    flag() {
      if (this.beChecked != null) {
        return this.beChecked.favorite;
      } else {
        return false;
      }
    }
  }
};
</script>

<style scoped>
.tools {
  min-width: 100px;
  height: 100%;
  text-align: center;
  background: rgb(48, 65, 77);
}
.add,
.love,
.delete {
  display: block;
  margin: 40px 0px;
  font-size: 35px;
  color: rgba(150, 150, 150);
  cursor: pointer;
}
.add:hover,
.love:hover,
.delete:hover {
  color: rgb(118, 118, 118);
}
#head-shot{
    margin-top: 20px;
    width: 80px;
    height: 80px;
    background: url('/static/logo.jpg');
    background-size: 100%;
    border-radius: 50%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}
</style>
