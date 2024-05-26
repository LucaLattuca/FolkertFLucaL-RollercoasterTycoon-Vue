<script>
import GetRide from './GetRide.vue';
export default {
    data() {
        return {
            rides: []
        }
    },
    methods: {
        async getData() {
            try {
                const response = await fetch("http://localhost:9000/attractions");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const rides = await response.json();
                this.rides = rides;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    },
    mounted() {
        console.log("I am getInfo");
        this.getData();
    },
    components: {
        GetRide
    }
}
</script>

<template>
    <GetRide v-for="(ride, index) in rides" :key="index" :rideName="ride.rideName" :rideImg="ride.rideImg" />
    


</template>


<style>

#postInfo {
    font-size:20px;
}
</style>