<template>
  <v-card class="mx-auto" max-width="500">
    <Card></Card>
    <div class="d-flex justify-center" color="indigo darken-1 ">
      <h3>BUSCAR POR DATAS</h3>
    </div>
    <Progress></Progress>
    <v-list three-line>
      <v-col cols="11">
        <div class="d-flex ml-4 my-4 ">
          <router-link :to="'/search'" class="text-decoration-none">
            <v-btn
              class=" text-center mb-4  white--text"
              color=" indigo lighten-1 "    
              small
              elevation="4"

            >
              <v-icon>mdi-magnify</v-icon>
              Pesquisar por Título
            </v-btn>
          </router-link>
        </div>
        <v-text-field
          label="Pesquisar tarefa pela Data"
          type="text"
          class="ml-4"
          v-model="search"
          prepend-icon="mdi-calendar"
          cols="6"
          color="indigo lighten-1"
        >
        </v-text-field>

        <v-list-item v-for="(item, i) in filtredDates" :key="i">
          <template>
            <v-list-item-content>
              <v-list-item-title>
                <div
                  class="d-inline-flex indigo lighten-1 px-2 py-1 rounded-pill text-altext-center"
                >
                  <h6 class="white--text font-weight-regular">
                    {{ item.data }}
                  </h6>
                </div>

                <h3
                   class="mt-3 ml-2 font-weight-medium"
                >
                  {{ item.todo }}
                </h3>
              </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action class="mt-6">
              <v-switch
                v-model="item.status"
                color="indigo lighten-1"
                hide-details
              ></v-switch>
            </v-list-item-action>
          </template>
        </v-list-item>
      </v-col>
    </v-list>
  </v-card>
</template>

<script>
import Card from "../components/Card";
import Progress from "../components/Progress"

export default {
  data: () => ({
    search: "",
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
    itemTodos() {
      return this.$store.getters.itemTodos;
    },
    dateTodos() {
      return this.$store.getters.dateTodos;
    },
    //Filtrando items
    filtredDates() {
      // Função para comparar items por data
      function compare(a, b) {
        if (a.data < b.data) return -1;
        if (a.data > b.data) return 1;
        return 0;
      }
      return this.items
        .filter((list) => {
          return list.data.toLowerCase().includes(this.search.toLowerCase());
        })
        .sort(compare);
    },
  },
};
</script>

<style></style>
