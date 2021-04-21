<template>
  <v-card 
    class="mx-auto" 
    max-width="500">
    <Card></Card>
    <div 
      class="d-flex justify-center" 
      color="indigo darken-1 "
    >
      <h3>TAREFAS ATIVAS</h3>
    </div>
    <Progress></Progress>
    <v-spacer></v-spacer>
    <v-list three-line>
      <v-list-item-group>
          <v-list-item v-for="(item,i) in doneTodos" :key=" i + item +[Math.random()]">
          <template> 
            <v-list-item-content>
              <v-list-item-title>
                <div
                  class="
                  d-inline-flex 
                  indigo lighten-1 
                  px-2 py-1 
                  rounded-pill text-al
                  text-center"
                >
                  <h6 class="white--text font-weight-regular">
                    {{ item.data }}
                  </h6>
                </div>

                <h3 class="mt-3 ml-2 font-weight-medium">
                  {{ item.todo }}
                </h3>
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action class="mt-6">
              <v-btn 
                color="red lighten-2" 
                text 
                icon 
                @click="removeItem(i)"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            
              <template>
                <v-container
                class="px-0"
                fluid
              >

              <v-switch
                color="indigo lighten-1"
                hide-details
                @click="updateStatus(item.status)"
                v-model="item.status"
              ></v-switch>

              </v-container>
              </template>
              
            </v-list-item-action>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>

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
  </v-card>
</template>

<script>
import Card from "../components/Card";
import Progress from "../components/Progress"

export default {
  data: () => ({
    multiLine: true,
    snackbar: false,
    text: "",
    status: false,
  }),

  components: {
    Card,
    Progress,
  },

  computed: {
    activeTodos() {
      return this.$store.getters.activeTodos;
    },
    items() {
      return this.$store.state.todos;
    },
    doneTodos() {
      return this.$store.getters.doneTodos;
    },
    
  },

  watch: {
    activeTodos(i) {
      console.log(i);
    },
  },

  methods: {
    removeItem(item) {
      this.text = `ATIVIDADE EXCLUÍDA`;
      this.snackbar = true;
      this.$store.commit("removeTodo",item);
    },

    updateStatus(i) {
      if (i == false) {
        this.snackbar = true;
        this.text = "ATIVIDADE ATIVA";
      } else {
        this.snackbar = true;
        this.text = "ATIVIDADE REALIZADA";
      }
    },
  },
};
</script>

<style></style>
