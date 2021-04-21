import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
    ],
  },
  mutations: {

    // Altera Status  do objeto pelo pelo index
    updateStatus(state, index) {
      state.todos[index].status = !state.todos[index].status;
    },

    // Inlcluir o Array Todos
    uptadeTodo(state, item) {
      state.todos.push(item)
    },

    // Remove apenas um item do Array
    removeTodo(state, i) {
      state.todos.splice(i, 1);
    },

    // Limpa todos os items dos Array
    clearAllItems(state) {
      state.todos = []
    },


  },

  getters: {


    //Atividades realizadas
    doneTodos: state => {
      return state.todos.filter(done => done.status == true)
    },

    // Progresso de atividades
    progress: state => {
      return state.todos.filter(done=> done.status).length / state.todos.length * 100
    },

    //Atividades que ainda não foram realizadas
    activeTodos: state => {
      return state.todos.filter(active => active.status == false)
    },

    // Buscando atributo todo no array todos
    itemTodos: (state) => {
      var items = [];
      state.todos.forEach(item => {
        items.push(item.todo);
      });
      return items;
    },

    dateTodos: (state) => {
      var items = [];
      state.todos.forEach(item => {
        items.push(item.data);
      });
      return items;
    },

    statusTodos: (state) => {
      var item = [];
      state.todos.forEach(item =>  {
        this.todos.push(item.status);
      });
      return item;
    }
  },
});