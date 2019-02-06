<template>
  <div class="list col-xs-3">
    <div class="row">
      <div class="logo col-xs-10 col-xs-push-1">NOTES</div>
    </div>
    <div class="row switch">
      <button
        type="submit"
        @click="flag=true"
        :class="{active:flag}"
        class="col-xs-5 btn btn-default col-xs-push-1"
      >All Notes</button>
      <button
        type="submit"
        @click="flag=false"
        :class="{active:!flag}"
        class="col-xs-5 btn btn-default col-xs-push-1"
      >Favorites</button>
    </div>
    <div v-if="flag">
      <div
        :class="{checked:allNotesCheck === index}"
        class="article col-xs-12"
        v-for="(item,index) in articleList"
        :key="index"
        @click="checked({list:'articleList',index:index})"
      >
        <span class="title">{{ item['title'] }}</span>
        <span v-if="allNotesCheck === index" class="glyphicon glyphicon-pencil"></span>
      </div>
    </div>
    <div v-if="!flag">
      <div
        :class="{checked:favoriteCheck === index}"
        class="article col-xs-12"
        v-for="(item,index) in favoriteList"
        :key="index"
        @click="checked({list:favoriteList,index:index})"
      >
        <span class="title">{{ item['title'] }}</span>
        <span v-if="favoriteCheck === index" class="glyphicon glyphicon-pencil"></span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      flag: true
    };
  },
  computed: {
    ...mapState(["articleList", "beChecked"]),
    favoriteList() {
      return this.articleList.filter(item => {
        return item.favorite === true;
      });
    },
    allNotesCheck() {
      return this.articleList.indexOf(this.beChecked);
    },
    favoriteCheck() {
      return this.favoriteList.indexOf(this.beChecked);
    }
  },
  methods: {
    ...mapMutations(["checked"])
  }
};
</script>
<style scoped>
* {
  user-select: none;
}
.logo {
  text-align: center;
  height: 50px;
  font-size: 30px;
  line-height: 50px;
  color: #424242;
}
.list {
  min-width: 300px;
  background-color: rgb(250, 250, 250);
  height: 100%;
  overflow: auto;
}
.list::-webkit-scrollbar {
  width: 8px;
}
.list::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.2) inset;
  background: rgba(0, 0, 0, 0.2);
}
.list::-webkit-scrollbar-track {
  -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
.glyphicon-pencil {
  position: absolute;
  right: 20px;
  height: 40px;
  line-height: 40px;
}
.btn-default {
  outline: none !important;
}
.article {
  height: 40px;
  width: 100%;
  text-align: center;
  line-height: 40px;
  background-color: #fff;
  overflow: hidden;
}
.title {
  display: inline-block;
  width: 70%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.checked {
  background-color: rgb(51, 122, 183);
  color: #fff;
}
.article:hover {
  background-color: rgb(129, 173, 211);
  color: #fff;
}

.active {
  color: #333;
  background-color: #e6e6e6;
  border-color: #adadad;
}
</style>
