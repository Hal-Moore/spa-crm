<template>
  <main class="content">
    <form v-on:submit.prevent="submitUpdateCategory()" class="col s12 l12">
    <div class="page-title">
        <h4>
            <router-link to="/categories">Категории</router-link>
            <i class="material-icons">keyboard_arrow_right</i>
            Редактировать категорию
        </h4>
        <button class="btn btn-small red right col s1 l1" v-on:click="submitCategoryDelete()">
                    <i class="material-icons">delete</i>
        </button>
    </div>

    <div class="row">
        
            <div class="col s12 l3">
                <div class="input-field ">
                    <input id="name" type="text" v-model="posts.name">
                    <label for="name">Название</label>
                    <div class="file-field input-field">
                        <div class="btn">
                            <span>Загрузить изображение</span>
                            <input type="file" v-on:change="onFileChange">
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text">
                        </div>
                    </div>
                    
                </div>

                <div>
                    <button class="waves-effect waves-light btn">
                    Сохранить изменения
                    </button>
                </div>
            </div>
            <div class="col s12 l3 center">
                <div v-if="!posts.image">
                    <img src="/images/No_image.png" style="height: 200px"/>
                
                </div>
                <div v-else>
                    <img :src="posts.image" style="height: 200px"/>
                    <button @click="removeImage" class="btn">Удалить изображение</button>
                </div>
            </div> 
        
        <div class="row">
            <div class="col s12">
                <div class="page-subtitle block='true'">
                    <h4>Позиции:</h4>
                    <div class="right">
                      <EditAddModal></EditAddModal>
                    </div>
                </div>

                <div class="collection col s12">
                    <router-link class="collection-item collection-item-icon">
                        <span>
                            Кофе <strong>20 руб.</strong>
                        </span>
                        <span>
                            <i class="material-icons right">delete</i>
                        </span>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="left" style="margin-left:65px">
          
        </div>
    </div>
    </form>
</main>
</template>
        
<script>
import axios from 'axios';
import EditAddModal from '@/views/EditAddModal'
export default {
  data: function() {
    return {
      posts: {
          name:'',
          image:'',
      },
      errors: []
    }
  },
  components:{
    EditAddModal
  },
  created(){
      let id=this.$route.params.id;
      axios.get('/get-category/' + id)
      .then(response=>{
          this.posts=response.data
      })
      .catch(e => {
        this.errors.push(e)
    })
  },
  methods:{
  submitUpdateCategory() {
    let id=this.$route.params.id;
    axios.post(`/update-category/`  + id, this.posts)
    .then(response => {
        this.$router.push({path:'/category'})
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    }) 
  },
  submitCategoryDelete() {
      if(confirm("Click 'Ok' to delete.")){
    axios.delete('/get-category/' +id)
    .then(response => {
        console.log(response)
        this.$router.push({path:'/'})
    })
    .catch(e => {
      this.errors.push(e)
    }) 
    }
  },
    onFileChange(e) {
    var files = e.target.files || e.dataTransfer.files;
    console.log(files);
    if (!files.length)
        return;
    this.Image(files[0]);
    },
    Image(file) {
      var image = new Image();
      var reader = new FileReader();

      reader.onload = (e) => {
        this.posts.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.posts.image = '';
      e.posts.target.reset();
    }
  }
}
</script>