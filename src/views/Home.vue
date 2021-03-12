<template>
  <div class="home">
    <div align="center">
  <b-card border-variant="warning" text-variant="Dark"
    :title="name"
    :img-src="photoUrl"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{email}}
    </b-card-text>

    <b-button href="#" variant="warning" @click="logout">Logout</b-button>
  </b-card>
  </div>
  </div>
</template>

<script>
import { auth } from "@/main.js";
export default {
  name: "Home",
  data() {
    return {
      name:"",
      email:"",
      photoUrl:""
    }
  },
  beforeCreate() {
    auth.onAuthStateChanged((user) => {
      if (user != null) {
        this.name = user.displayName;
        this.email = user.email;
        this.photoUrl = user.photoURL;
        
      } else {
        this.$router.replace('/login')
      }
    });
  },
  methods: {
    logout() {
      auth
        .signOut()
        .then(() => {
          console.log("signOut Complete");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

