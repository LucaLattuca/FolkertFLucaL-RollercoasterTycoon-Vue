<script>
    export default {
        props: {
            rideName: String,
            rideImg: String
        }
    }
</script>

<template>
    <h1>I am GetiInfo</h1>
    <p class="ride">
        <p class="rideName">{{ rideName }}</p>
        <p class="rideImg">{{ rideImg }}</p>
    </p>
</template>

<style scoped>
    #rideInfo{
        font-size: 30px;
    }
</style>
