<script>
const app = Vue.createApp({
    data() {
        return {
            }
    }
,method : {
    addRide(){
        let ride = {
            rideName: this.rideName,
            rideLocation: this.rideLocation,
        }
        this.rides.push(ride)

    }
}
});
app.mount('#app')
</script>

<template>
    <main>
        <div id="app">
            <form>
                <h1>Add a Ride</h1>
                <!-- add info bubbbles -->
                <p>Ride Name <input required type="text" name="rideName" id="rideName"></p>
                <p>Ride Location <input required type="text" name="rideLocation" id="rideLocation"></p>
                <button type="submit">Add Ride</button>
            </form>
        </div>
    </main>
</template>

<style>

</style>