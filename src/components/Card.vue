<template>
  <v-card
    class="mx-auto mx-1"
    max-width="500px"
    elevation="0"
    clas="rounded-0"
    flat
  >
    <v-toolbar 
      color="indigo lighten-1 rounded-0 px-1" 
      dark
    >
      <router-link :to="'/'" class="text-decoration-none">
        <v-toolbar-title 
          class="white--text"
        >
          To-do
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <router-link :to="'/search'" class="text-decoration-none">
        <v-btn 
          class="ml-3" 
          close-delay="232" 
          open-delay="252" 
          icon>
          <v-icon>
            mdi-magnify
          </v-icon>
        </v-btn>
      </router-link>
    </v-toolbar>
    <v-spacer></v-spacer>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            class="mt-6 ml-6 mb-4 font-weight-bold"
          >
            Qual tarefa você quer incluir?
          </v-list-item-title>
          <v-text-field
            label="Digite aqui sua atividade"
            color="indigo darken-1 "
            v-model="msg"
            type="input"
            @keyup.enter="action()"
            class="mr-6 ml-6"
          ></v-text-field>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-row>
      <v-col>
        <v-menu
          ref="menuDate"
          v-model="menuDate"
          :close-on-content-click="false"
          min-width="280"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateFormatted"
              label="Data"
              color="indigo darken-1 "
              prepend-icon="mdi-calendar"
              v-bind="attrs"
              v-on="on"
              class="mr-10 ml-10"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            @input="menuDate = false"
            color="indigo darken-1 "
          >
          </v-date-picker>
        </v-menu>
        <div 
          class="d-flex justify-center" 
          elevation="0">
          <v-btn
            color="indigo lighten-1 "
            @click="action()"
            class="px-10 py-5 my-3 white--text "
          >
            Enviar
          </v-btn>
        </div>

          <div class="text-center">
            <v-snackbar
              v-model="snackbar"
              :multi-line="multiLine"
              color="indigo lighten-1"
            >
              {{ text }}

              <template v-slot:action="{ attrs }">
                <v-btn
                  color="red"
                  v-bind="attrs"
                  @click="snackbar = false"
                  text
                >
                  Fechar
                </v-btn>
              </template>
            </v-snackbar>
          </div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <div class="d-flex justify-center my-6">
      <router-link :to="'/'" class="text-decoration-none">
        <v-btn 
          class="ml-4 white--text" 
          color="indigo lighten-1"
        >
          Todas
        </v-btn>
      </router-link>

      <router-link :to="'/active'"  class="text-decoration-none">
        <v-btn 
          class="ml-3 white--text" 
          color="amber lighten-1"
        >
          Ativas
        </v-btn>
      </router-link>

      <router-link :to="'/done'" class="text-decoration-none">
        <v-btn 
          class="ml-3 white--text" 
          color="light-green"
        >
          Realizadas
        </v-btn>
      </router-link>
    </div>
  </v-card>
</template>

<script>
export default {
  data: (vm) => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menuDate: false,
    msg: "",
    multiLine: true,
    snackbar: false,
    text: "",
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
    doneToDo() {
      return this.$store.getters.doneTodos;
    },
    activeTodos() {
      return this.$store.getters.activeTodos;
    },
    items() {
      return this.$store.state.todos;
    },
    dateTodos() {
      return this.$store.getters.dateTodos;
    },
    itemTodos() {
      return this.$store.getters.itemTodos;
    },
  },

  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    },
  },

  methods: {
    action() {
      if (this.msg != "" && this.dateFormatted != "") {
        var incluirTarefa = {
          todo: this.msg,
          data: this.dateFormatted,
          status: false,
          };
        this.items.push(incluirTarefa);
        this.msg = "";
        this.text = "ATIVIDADE ADICIONADA";
        this.snackbar = true;
      } else {
        this.text = "ATIVIDADE E/OU DATA ESTÃO VAZIOS";
        this.snackbar = true;
      }
    },

    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
  },
};
</script>

