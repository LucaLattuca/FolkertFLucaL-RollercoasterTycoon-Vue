<script setup>

// import the root component App from a single-file component.
// import App from './App.vue'


// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import AllRides from './components/AllRides.vue'
import Navigation from './components/Navigation.vue'
import Ride from './components/Ride.vue';
import ReportRide from './components/ReportMalfunction.vue';
import ReportMalfunction from './components/ReportMalfunction.vue';

</script>

<template>
  <Navigation/>
  
  <main>
    <AllRides/>
    <!-- <ReportMalfunction/> -->
    <!-- <Ride/> -->
  </main>
  
<footer>

</footer>
</template>

<style >

</style>
