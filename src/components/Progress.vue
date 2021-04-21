<template>
    <div>
      

      <v-row
      class="my-4 px-6 text-center"
    >
      <v-progress-linear
        :value="progress"
        class="mx-6 my-4"
        color="indigo lighten-1"
        height="12"
        rounded
      ></v-progress-linear>
    </v-row>


    <v-dialog
      v-model="dialog"
      transition="dialog-top-transition"
      max-width="500"
      
    >
      <v-card color="indigo lighten-1" >
        <v-card-title class="indigo lighten-1 white--text" >
          {{msg}}
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red"
            text
            @click="dialog = false"
          >
           Voltar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
</template>
<script>
export default {

  data: () => ({
    tarefas: null,
    dialog:false,
    msg: " Parabéns, atividades concluídas!",
  }),
 
 
 computed: {
    progress() {
      return this.$store.getters.progress;
    },  
 },
 watch:{
   progress(i) {
   if (i == 100) {
     this.dialog = true;
   } else {
     this.tarefas = ""
   }
   
 },

 },
  
 
}
</script>