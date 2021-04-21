<template>
  <v-card class="mx-auto" max-width="500">
    <Card></Card>
    <div class="d-flex justify-center" color="indigo darken-1 ">
      <h3>BUSCA POR DATAS</h3>
    </div>
    <Progress></Progress>
    <v-list three-line>
      <v-col cols="11">
        <div class="d-flex ml-4 my-4 ">
          <router-link :to="'/search'">
            <v-btn
              class="
                  text-center
                  indigo lighten-1 
                  white--text"
            >
              <v-icon>mdi-magnify</v-icon>
              Buscar por Título
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

        <v-list-item v-for="(item, i) in filteredAndSorted" :key="i">
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

                <h3
                  class="
                  mt-3 ml-2 font-weight-regular"
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
    filteredAndSorted() {
      // function to compare items
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
