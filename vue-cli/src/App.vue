<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for>Username</label>
          <input type="text" class="form-control" v-model="user.userName" />
        </div>
        <div class="form-group">
          <label for>Username</label>
          <input type="email" class="form-control" v-model="user.email"/>
        </div>
        <button class="btn btn-primary" @click="submit()"> Submit </button>
      </div>
    </div>
    <hr>
    <button class="btn btn-success" @click="fetchData()">Get Data</button>
    <ul class="list-group">
        <li class="list-group-item" v-for="(item, index) in users" :key="index"> {{item.userName}} - {{item.email}}</li>
    </ul>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            user:{
                userName: '',
                email: ''
            },
            users:[]
        }
    },
    methods: {
        submit(){
            this.$http.post('https://vuejs-http-1e846.firebaseio.com/data.json', this.user)
                .then(response => {
                    console.log(response);
                }, error=>{
                    console.log(error);
                });
                this.fetchData();
        },
        fetchData(){
            this.$http.get('https://vuejs-http-1e846.firebaseio.com/data.json').then(res=>{
               return res.json();
                
            }).then(data => {
                const arr = [];
                for(let key in data){
                    arr.push(data[key]);
                }
                this.users = arr;
            });
        }
    },
};
</script>

<style>
</style>
