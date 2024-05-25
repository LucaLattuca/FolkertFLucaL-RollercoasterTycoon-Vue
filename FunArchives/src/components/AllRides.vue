<script>
import Ride from './Ride.vue'

export default {
    components : {
        Ride
    },
    data() {
        return {
            selected: 'All Rides',
            rides: [ 
                {
                    rideName : String,
                    rideImg : String,
                    categories : [],
                    description : String,

                }
            ]
        }
    },methods : {
        methods : {
        getRides(){
            const self = this;
            fetch("https://localhost:9000/users")
            .then(function (response) {
                return response.json();
            }).then(function (rides){
                self.rides = rides
            })
        }
    }
    }
}
</script>

<template>
    
    
    <h1 id="sectionTitle" >Our Rides</h1>
    <main>
        <div class="filter">
            <h1>Filter by</h1>
            <div class="categories">
                <select v-model="selected">
                    <option selected>All Rides</option>
                    <!-- TODO add all categories to filter  -->
                    <option >Spooky</option>
                    <option>Thrill</option>
                    <option>Family</option>
                </select>
            </div>
            <button><p>Add Ride</p><img src="/src/assets/addIcon.svg" alt=""></button>
        </div>
        <!-- TODO add rides to display  -->
        <ul class="rides">

         <Ride v-for="ride in rides" : />
         
        </ul>
    </main>

</template>

<style scoped>

/* align rides  */
main {
    margin: 10px 100px 0px 100px;

    /* border: 1px dashed blue; */
}
#sectionTitle{
    font-size: 3em;
    padding: 0px 0px 0p 0px;
    margin: 20px 0px 20px 50px;
    
}
  /* List elements */

.rides  .ride:nth-child(odd) {
    /* border-right: 2px solid black; */
    
}
.rides {
    border: 1px solid blue;
    display: flex;
    justify-content: left;
    padding: 10px 10px 10px 10px;
    flex-wrap: wrap;
    
}



/* Filter section  */
.filter {
    display: flex;
    border-bottom: 3px solid black;
    
}
.filter * {
    text-decoration: none;
    padding-right: 20px;
    margin: 10px 10px 10px 10px ;
    display: flex;
}
.filter h1,.categories,button {
    border-right: 2px solid black;
}
/* h1 styling within filter */
.filter h1 {
    font-size: 2.5em;
}

/* Select box */
.categories{
    align-items: center;
}

.categories select{
    height: 43px;
    width: 170px;
    margin:0px 20px 0px 20px ;
    border: 3px solid black;
}
.categories select:hover {
    cursor: pointer;
    border: 4px solid black;
}
/* Add ride button */
.filter button {
    align-self: center;
    color: black;
    border: 3px solid black;
    height: 45px;
    width: 150px;

    padding: 0px 0px 0px 5px;
    display :flex ;
    justify-content: space-around;
    
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    
}
.filter button:hover{
    cursor: pointer;
    /* background-color: black; */
    /* color: whitesmoke; */
    border: 4px solid black;
    background-color: rgb(255, 255, 255);
    
}
.filter button p {

    padding: 0px;
    margin: 0px;
}
.filter img {
    height: 40px;
    width: 40px;
    padding: 0;

    margin: 0;
}

</style>