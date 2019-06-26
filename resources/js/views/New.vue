<template>
    <main class="content">
    <div class="page-title">
        <h4>
            <router-link to="/categories">Категории</router-link>
            <i class="material-icons">keyboard_arrow_right</i>
            Добавить категорию
        </h4>
        <span>
            <button class="btn btn-small red">
              <i class="material-icons">delete</i>
            </button>
          </span>
    </div>

    <div class="row">
        <form v-on:submit="submitCategory()" class="col s12 l6">
            <div class="input-field">
                <input id="name" type="text" v-model="posts.name">
                <label for="name">Название</label>
            </div>
            <div>
                <button class="waves-effect waves-light btn orange lighten-2 mb2">
                    <i class="material-icons left">backup</i>
                    Загрузить изображение
                </button>
            </div>

            <div>
                <button class="waves-effect waves-light btn">
                    Сохранить изменения
                </button>
            </div>
        </form>

        <div class="col s12 l4 center">
            <img src="images/barm-02.jpg" class="responsive-img" style="height: 200px" >
        </div>
    </div>
</main>
</template>



<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      posts: {
          name:'',
      },
      errors: []
    }
  },
  methods:{
  submitCategory() {
    axios.post(`/add-category/new`, this.posts)
    .then(response => {
        console.log(response)
        this.$router.push({path:'/'})
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    }) 
  },

  }
}
</script>