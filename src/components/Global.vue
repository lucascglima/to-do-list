<template>
  <v-card class="mx-auto" max-width="500">
    <Card></Card>
    <div class="d-flex justify-center" color="indigo darken-1 ">
      <h3>TAREFAS</h3>
    </div>
      <Progress></Progress>
    <v-divider class="mb-4"></v-divider>
    <v-list three-line>
      <v-list-item-group>
        <v-list-item v-for="(item, i) in items" :key="item + [Math.random()]">
          <template>
            <v-list-item-content>
              <v-list-item-title>
                <div
                  class="
                  d-inline-flex 
                  indigo lighten-1 
                  px-2 py-1 
                  rounded-pill text-al
                  text-center
                  "
                >
                  <h6 class="
                    white--text 
                    font-weight-regular"
                  >
                    {{ item.data }}
                  </h6>
                </div>

                <h3 class="
                  mt-3 ml-2 
                  font-weight-medium"
                >{{ item.todo }}
                </h3>
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action class="mt-6">
              <v-btn 
                color="red lighten-2" 
                text icon
                @click="removeItem(i)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <v-switch
                v-model="item.status"
                color="indigo lighten-1"
                hide-details
                @click="updateStatus(item.status)"
              ></v-switch>
            </v-list-item-action>
          </template>
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
        </v-list-item>
      </v-list-item-group>
    </v-list>
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
  }),

  components: {
    Card,
    Progress,
  },


  computed: {
    items() {
      return this.$store.state.todos;
    },
    doneToDo() {
      return this.$store.getters.doneTodos;
    },
    itemTodos() {
      return this.$store.getters.itemTodos;
    },
  },

  methods: {
    removeItem(item) {
      this.$store.commit("removeTodo", item);
      this.snackbar = true;
      this.text = "ATIVIDADE EXCLUÍDA";
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
