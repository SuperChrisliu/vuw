/**
 * Created by Chris on 2017/3/21.
 * Site: www.chrisliu.top
 */
import post from '../../api/post'
import * as types from '../mutation-types'

// initial state
const state = {
  cachedPostCards: [],
  cachedPosts: {},
  currentPost: null,
  currentPostCards: [],
  currentPage: 1,
  checkoutStatus: null
}

// getters
const getters = {
  checkoutStatus: state => state.checkoutStatus,
  currentPostCards: state => state.currentPostCards
}

// actions
const actions = {
  getSinglePost ({ commit }, id) {
    if (!state.cachedPosts.hasOwnProperty(id)) {
      post.getSinglePost(id)
        .then(function (response) {
          commit(types.ADD_SINGLE_POST, response)
          commit(types.CHANGE_CURRENT_POST, id)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  getPostCards ({ commit }, data) {
    post.getPostCards(data)
      .then(function (response) {
        commit(types.CHANGE_CURRENT_POSTCARDS, response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

// mutations
const mutations = {
  [types.ADD_SINGLE_POST] (state, { data }) {
    // Object.assign({}, this.someObject, { a: 1, b: 2 })
    // Object.assign(this.someObject, { a: 1, b: 2 })
    state.cachedPosts[data.id] = data
  },
  [types.CHANGE_CURRENT_POSTCARDS] (state, { data }) {
    // state.postList.push(data)
    state.currentPostCards = data
  },
  [types.CHANGE_CURRENT_POST] (state, id) {
    state.currentPost = state.cachedPosts[id]
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
