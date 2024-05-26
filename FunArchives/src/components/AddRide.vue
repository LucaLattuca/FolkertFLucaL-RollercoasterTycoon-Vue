<script>
    export default {
        ride: {
            rideName : '',
            rideImg : '',
            description: '',
            categories: '',

        },
        methods: {
            addRide(){
                const self = this;
                fetch('https://localhost:9000/attractions' ,{
                    method: "Post",
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        ride : {
                            rideName : this.rideName,
                            rideImg: this.rideImg,
                            categories : [],
                            rideCapacity: this.rideCapacity,
                            rideSpeed: this.rideSpeed,
                            rideDuration: this.rideDuration,
                            rideBuildyear: this.rideBuildyear,
                            rideVideo: this.rideVideo,
                            requiredHeight : this.requiredHeight
                        }
                    }) 
                }).then(function (response) {
                    console.log(response);
                    if(!response.error){
                        self.$emit('rideSubmitted')
                    }
                })
            }
        }
    }
</script>

<template>
    <main>
        <h1>Request to add a ride to the park</h1>
        <form class="addRide"  @submit.prevent="addRide">
            <div class="rideName">
                <div>
                    <label for="ride.rideName">Ride Name : </label>
                    <input type="text" name="rideName" id="">
                </div>
                <div>
                    <label for="ride.rideImg"> ride Image : </label>
                    <input type="file" id="rideImg" accept="image/png, image/jpeg"/>
                </div>
            </div>

            <div class="categories">
                <label for="categories">Select catgory : </label>
                <div id="categoryBox">
                    <!-- add v-for to display added categories-->
                    <input type="checkbox" id="category1" value="Horror">
                    <label for="category1">Horror</label>

                    <input type="checkbox" id="category2" value="Kids">
                    <label for="category2">Kids</label>

                    <input type="checkbox" id="category3" value="Family">
                    <label for="category3">Family</label>

                    <input type="checkbox" id="category4" value="Adult">
                    <label for="category4">Adult</label>
                    
                </div>
            </div>
                <div class="rideInfo1" >
                    <div>
                        <label for="ride.rideCapacity">Capacity : </label>
                        <input type="number" name="" id="rideCapacity" placeholder=" # people "> 
                    </div> 
                    <div>
                        <label for="ride.rideSpeed">Speed : </label>
                        <input type="number" name="" id="rideSpeed" placeholder=" km/h"> 
                    </div>
                    <div>
                        <label for="ride.rideDuration">Duration : </label>
                        <input type="text" name="" id="rideDuration" placeholder="minutes">
                    </div>                   
                </div>

                <div class="rideInfo2">
                    <div>

                        <label for="ride.rideBuildYear">Build Year : </label>
                        <input type="number" name="" id="rideBuildYear">
                    </div>
                    <div >

                        <label for="ride.requiredHeight">Required Height : </label>
                        <input type="number" name="" id="requiredHeight">
                    </div>
                </div>
                <div class="rideVideo">

                    <label for="ride.rideVideo">Onride video : </label>
                    <input type="text" name="" id="rideVideo" placeholder="ex. &#34;https://www.youtube.com/watch?v=dQw4w9WgXcQ&#34; ">
                </div>

            <button type="submit">Submit Ride</button>
        </form>
    </main>
</template>

<style scoped>
    h1{
        font-size: 30px;
        /* text-align: center; */
        margin-left: 120px;
    }
    form {
        /* border: 2px solid black; */
        height: 450px;
    }
    label {
        font-size: 20px;
        font-weight: 600;
    }
    input {
        border: 2px solid black;
        height: 30px;
        margin-right: 20px;
    }
    .addRide {
        /* border: 2px solid black; */
        width: 80%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly
    }
    
    .rideName {
        display: flex;
        /* justify-content: space-evenly; */
        /* border: 1px solid black; */
    }

    .rideInfo1 {
        display: flex;

    }
    .rideInfo2 {
        display: flex;

    }

    .rideVideo {
    }
    /* :not(:checked) and :checked  : nice to have*/ 
    .categories {
        display: flex;
    }

    .categories > label{
        margin-right: 20px;
    }
    #categoryBox {
     border: 3px solid black;
     width: 200px;
     border-radius: 5px   
    }

    .addRide button{
        width: 100px;
        margin-left: 10px;
        border: 3px solid black;
        height: 50px;
        width: 150px;
        font-size: 20px;
        font-weight: 600;
        border-radius: 5px;
    }
    .addRide button:hover {
        border: 4px solid black ;
        cursor: pointer;
    }


    </style>