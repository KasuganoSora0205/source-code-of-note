import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        articleList: [{
            title: 'Alicization',
            content: `10月7日，万众瞩目改编自川原砾原作、abec插画的同名轻小说动画《刀剑神域Alicization篇》（刀剑三）将在B站开播，B站小伙伴提供了多数观影须知，详情如下：
            1、请不要携带各种剑、投剑、光学/实弹枪械、等离子手榴弹、长/短弓、法杖、神器、等危险物品观影；
            2、请SAO玩家.ALO玩家.GGO玩家和UW居民到自己指定区域观影，不要串场；
            3、请正常从手机/电视/电脑等观看，不要使用NERvGear、AmuSphere、Augma还有STL；
            4、禁止剑士cos进行1VS1对决；
            5、为了安静观影请GGO玩家不要使用卫星扫描；
            6、观影结束以后，二楼或者三楼的ALO玩家请不要信仰之跃，此地禁止飞行；
            7、如果您有信心可以使用传送水晶和回廊水晶前来观看，则免大会员，如果被B站的工作人员当场抓住则GAME OVER；
            8、请ALO的玩家不要说出那个人的名字以免引起群众暴怒。例如须乡……
            9、请大家不要随意进行对决，毕竟这里是水晶无效化区域你打完架后没有药水和回复水晶；
            10、请勿攻击NPC，这里属于圈内有“禁止犯罪指令”；
            11、严禁UW居民骑自家飞龙进入观影院，被抓到者将被化学阉割（指龙）；
            12、请不要打开史提西亚之窗来看进度条的剩余天命；
            13、观影期间禁止使用一切剑技、魔法、神圣术；
            14、院内有楼梯，不许使用翅膀或心意技飞行；
            15、院内的任何看似箱子的东西不许开，更不许用脚踹，里面没东西；
            16、电影院前人界整合骑士们和黑暗界骑士们禁止斗殴，更不能互开无双，否则会被警察叔叔抓走噢；
            17、请轻小说穿越玩家请勿剧透，保证良好观影环境，谢谢合作；
            18、最后，这虽然是游戏但可不是闹着玩的；`,
            favorite: false
        }],
        beChecked: null,
    },
    mutations: {
        checked(state, { list, index }) {
            if (list === 'articleList') {
                state.beChecked = state[list][index];
            } else {
                state.beChecked = list[index];
            }
        },
        newArticle(state) {
            state.articleList.push({ title: '无标题笔记', content: '', favorite: false })
            state.beChecked = state.articleList[this.getters.len];
        },
        saveTitle(state, title) {
            if (title == '') {
                title = '无标题笔记';
            }
            state.beChecked['title'] = title;
        },
        saveContent(state, content) {
            state.beChecked['content'] = content;
        },
        favorite(state) {
            if (state.beChecked) {
                state.beChecked.favorite = !state.beChecked.favorite;
            }
        },
        del(state) {
            if (state.beChecked) {
                let index = state.articleList.indexOf(state.beChecked);
                state.articleList.splice(index, 1);
                if(state.articleList[index - 1]){
                    state.beChecked = state.articleList[index - 1];
                }else{
                    state.beChecked = null;

                }
            }
        }
    },
    getters: {
        len(state) {
            return state.articleList.length - 1
        }
    }
})