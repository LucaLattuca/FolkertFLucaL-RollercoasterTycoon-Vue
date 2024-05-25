<script>

export default {
    props : {
        ride : {
            type: Object,
            default() {
            return {
                    rideName: String,
                    rideImg:  String,
                    categories : Array,
                    description : String,
                    
               };
            },
        },
    }
};  
    
</script>

<template>
     <li class="ride">
                <div class="basicInfo">
                    <h2>{{ride.rideName}}</h2>
                    <img :src="ride.rideImg" >
                </div>
                <div class="moreInfo">
                    <div class="tags"><li v-for="category in ride.categories">{{ category }}</li></div>
                    <p class="description">{{ride.description}}</p>
                    <div class="rideActions">
                        <button class="viewRide">
                            View Ride
                        </button>
                        <div class="reportButton"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" ><path d="m40-120 440-760 440 760H40Zm115.33-66.67h649.34L480-746.67l-324.67 560ZM482.78-238q14.22 0 23.72-9.62 9.5-9.61 9.5-23.83 0-14.22-9.62-23.72-9.61-9.5-23.83-9.5-14.22 0-23.72 9.62-9.5 9.62-9.5 23.83 0 14.22 9.62 23.72 9.62 9.5 23.83 9.5Zm-33.45-114H516v-216h-66.67v216ZM480-466.67Z"/></svg>
                            <p>Report a malfunction</p>
                        </div>
                    </div>
                </div>
        </li>
        <li class="ride">
                
                <div class="basicInfo">
                    <h2>The Dalton Terror</h2>
                    <img src="/src/assets/Rollercoaster1.png" alt="ride1" >
                </div>
                <div class="moreInfo">
                    <div class="tags"><p>Horror</p><p>Family</p></div>
                    <p class="description">this ride is freaking awesome. it was made in 'year' and was located in 'country'. it held up to 'maxPeople' and weighed 'weight' in total. </p>
                    <div class="rideActions">
                        <button class="viewRide">
                            View Ride
                        </button>
                        <div class="reportButton"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" ><path d="m40-120 440-760 440 760H40Zm115.33-66.67h649.34L480-746.67l-324.67 560ZM482.78-238q14.22 0 23.72-9.62 9.5-9.61 9.5-23.83 0-14.22-9.62-23.72-9.61-9.5-23.83-9.5-14.22 0-23.72 9.62-9.5 9.62-9.5 23.83 0 14.22 9.62 23.72 9.62 9.5 23.83 9.5Zm-33.45-114H516v-216h-66.67v216ZM480-466.67Z"/></svg>
                            <p>Report a malfunction</p>
                        </div>
                    </div>
                </div>
        </li>
</template>

<style scoped>


.ride {
    display: flex;
    padding: 0px 0px 0px 0px;
    
    padding: 2px 2px 2px 2px;
    width: 600px;
    height: 250px;
    border: 3px solid black;
    border-radius: 10px;
    list-style: none;
    margin: 10px;

}
.ride:hover{
    cursor:pointer;
    background-color: rgb(233, 233, 233);
    
} 
/* Ride name + Image */
.ride .basicInfo {
   padding-top: 7px;
}
.basicInfo h2 {
    padding :0px 0px 20px 20px;
    margin: 0px;
}


.basicInfo img{
    width: 280px;
    margin-left: 5px;
}
/* moreInfo */
.ride .moreInfo {
    margin: 0px 0px 0px 10px;
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: space-between;
}

/* Tags */
.ride .tags {

    display: flex;
    flex-wrap: wrap;
    padding: 8px 5px 5px 0px;
}
.tags li{
    border: 3px solid black;
    border-radius: 5px;
    margin: 2px 2px 2px 2px;
    padding: 2px 5px 2px 5px;
    background-color: lightyellow;
    font-weight: 600;
}

/* description */
.description {

    height: 100%;
    padding: 0px 5px 5px 5px;
    margin: 5px 0px 0px 0px;
    font-weight: 700;
}

/* report button */
.rideActions {
    display: flex;
    justify-content: space-between;
    
    align-items: center;
    padding: 0px 0px 5px 0px;
    height: 60px;
}
.rideActions .viewRide {

    height: 85%;
    width: 40%;
    border-radius: 10px;
    font-size: 19px;
    padding-right: 5px;
    font-weight: bold;
    transition: background-color 0.2s ease ;
    
}
.viewRide:hover {
    cursor: pointer;
    color: whitesmoke;
    background-color: black;
}
/* Report Button */
.reportButton {
    display: flex;
    padding-right: 2px;
    
}
.reportButton p {
    text-wrap: nowrap;
}
.reportButton:hover {
    color: red;
    font-style: bold;
    fill: red   ;
}
.reportButton svg {
    width: 30px;
    margin-right: 1px;
    margin-top: 6px;
}


</style>