
<script>
import Ride from './Ride.vue'
import axios from 'axios';


export default {
  methods: {
    navigateToAllRides() {
                this.$router.push({name: 'AllRides'});
            }
  },
}
</script>

<template>
  <header>
    <div class="logo">
      <h1>Fun&#8202;</h1><img src="/src/assets/FunLogo.svg" alt="" width="90px" height="90px"><h1>&#8202;Archives</h1>
    </div>

    <div class="nav">
      <h2 @click="navigateToAllRides"><a id="funIcon" href="">All Rides</a></h2><img src="/src/assets/FunLogo.svg" alt="logoIcon" width="32px" height="32px">
      <h2><a id="warningIcon" href="">Report a malfunction</a></h2><img src="/src/assets/warningIcon.svg" alt="warningIcon" width="40px" height="40px">
      <h2><a id="infoIcon" href="">About</a></h2><img src="/src/assets/infoIcon.svg" alt="infoIcon" width="40px" height="40px">
    </div>
  </header>

  <main>
  </main>
  

</template>

<style scoped>

header{
 display: flex; 
 flex-wrap: nowrap;
 justify-content: space-between; 
 
}
header div{
  display: flex;
  /* border: 2px solid black; */
}
.logo  {
  text-decoration: underline 5px ;
  padding: 10px 0px 10px 20px;

  font-size: 25px;
}
.logo img {
    transition: transform 20s ease;
    
}
.logo img:hover {
    transform: rotate(360deg);
}
.logo h1 {
    margin-top: 10px;
}
.logo:hover {
    
    cursor: pointer;
}
.logo * {
  margin: 0px;
  padding: 0; 
}
.nav{
  /* width: 50%; */
  align-items: center;
}
.nav a {
  padding-right: 8px;
  font-size: 30px;
  text-decoration: underline solid transparent;
  transition: text-decoration 0.3s ease;
  white-space: nowrap;
}
.nav a:hover {
  text-decoration: underline solid currentColor;

}
.nav img {
  padding-right: 100px;
}

h2 a{
  text-decoration: none;
  color: black;
}

</style>


<style>
</style>