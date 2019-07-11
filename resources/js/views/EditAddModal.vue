<template>
<form v-on:submit.prevent="submitPosition()" class="col s12 l6 float-right">
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark class="waves-effect waves-light btn grey darken-1" v-on="on">Добавить позицию</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Добавить позицию</span>
          
        </v-card-title>
        <v-divider></v-divider>
          <v-container grid-list-md>
            <v-layout >
              <v-flex xs12 sm6 md12>
                <div class="input-field ">
                    <input id="name" type="text" v-model="posts.name">
                    <label for="name">Позиция</label>
                </div>
                    <v-divider></v-divider>
                <div class="input-field ">
                    <input id="price" type="number" v-model="posts.price">
                    <label for="name">Цена</label>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Отмена</v-btn>
          <v-btn color="blue darken-1" flat>Сохранить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  </form>
</template>

<script>
  export default {
    data: function() {
    return {
      posts: {
          name:'',
          price:'',
      },
      dialog: false,
      errors: []
    }
  },
    methods:{
    submitPosition() {

      console.log(7987)
    axios.post(`/add-category`, this.posts)
    .then(response => {
        this.$router.push({path:'/categories'})
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    }) 
  }
  },
  }
</script>
