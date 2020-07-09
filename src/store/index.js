import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userProfile:{}
  },
  mutations: {
    // 写入profile（vuex和sessionStore）
    setUserProfile: (state, payload) => {
      window.sessionStorage.setItem("userProfile", JSON.stringify(payload.data))
      state.userProfile = {
        username: payload.data.username,
        userid: payload.data.userid,
        usertoken: payload.data.token
      }

    }
  },
  getters:{
    // 获取保存在sessStore的信息
    getUserProfile: state =>{
      if (!state.userProfile.username){
        let userProfile = window.sessionStorage.getItem("userProfile")
        if (!userProfile){
          state.userProfile = {
            username: userProfile.data.username,
            userid: userProfile.data.userid,
            usertoken: userProfile.data.token
          }
        }
      }
      return state.userProfile
    }

  }
})

export default store;
