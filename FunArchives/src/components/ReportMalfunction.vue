<script>
// import AllRides from './AllRides.vue'

    export default {
        props : {
            rides : {
                type: Array,
                default(){
                    return [{
                    rideName: "Ride1",
                    rideImg:  `/src/assets/` + `Rollercoaster1.png`,
                    categories : ["horror","family"],
                    description : "a cool ride 1",
             
                    },
                    {
                    rideName: "Ride2",
                    rideImg:  `/src/assets/` + `Rollercoaster1.png`,
                    categories : ["horror","fun"],
                    description : "a cool ride 2",
             
                    },
                    {
                    rideName: "Ride1",
                    rideImg:  `/src/assets/` + `Rollercoaster1.png`,
                    categories : ["horror","family"],
                    description : "a cool ride 3",
             
                    }];
                }
            }
        },
        data() {
            return {
                malfunction : {
                    rideNamme : '',
                    info : '',
                    time : ''
                }
            }
        },
        methods : {

            // getAllRides()
            handleSubmit() {
                this.$emot('submit-malfunction',this.malfunction);
                this.resetForm();
            },
            resetForm() {
                this.malfunction = {
                    rideName: '',
                    info : '',
                    time: ''
                }
            }
        }

    }

</script>

<template>
    <form class="reportMalfunction" @submit.prevent="handleSubmit">
        <!-- Different options based on what rides were added -->
        <div class="rideName">
            <label for="ride">Ride : </label>
            <select v-model="malfunction.rideName" id="ride" required>
                <option value="" disabled > Select a ride : </option>
                <option v-for="ride in rides" key="ride.rideName">{{ ride.rideName }}</option>
            </select>
        </div>
        <div class="info">
            <!-- info about the malfunction -->
            <label for="malfunction">Malfunction info : </label><br>
            <textarea type="text" name="malfunction" id="malfunction" v-model="malfunction.info"></textarea>
        </div>
            
        <button type="submit">Report</button>
    </form>

</template>

<style scoped>
    
    h1 {
        background-color:aqua ;
    }
    .reportMalfunction {
        position: absolute;
        width: 25%;
        /* margin: auto; */
        padding: 20px;
        margin-top: 30vh;
        margin-left: 30vw;
        border: 4px solid black;
        border-radius: 5px ;
    }

    .rideName {
        display: flex;
        justify-content: left;
        margin-bottom: 20px;
    }
    .rideName label{
        font-weight: 500;
        font-size: 30px;
        margin-right: 20px;
    }
    .rideName select{
        border: 2px solid black;
        height: 40px;
        width: 150px;
        font-size: 25px ;
        text-align: center;
        border-radius: 5px;
    }
    .rideName select option {
        font-size: 20px;
    }

    .info label{
        font-weight: 600;
        font-size: 28px;

    }
    .info textarea {
        border: 2px solid black;
        margin: 10px 0px 10px 0px;
        border-radius: 5px;
        font-size: 18px;
    }
    
    .reportMalfunction button {
        height: 50px;
        width: 150px;
        
        border: 2px solid black;
        border-radius: 5px;
        font-weight: bold;
        font-size: 20px;
    }

    
    button:hover {
        cursor: pointer;
    /* background-color: black; */
    /* color: whitesmoke; */
    border: 4px solid black;
    background-color: rgb(255, 255, 255);
    }

    
</style>