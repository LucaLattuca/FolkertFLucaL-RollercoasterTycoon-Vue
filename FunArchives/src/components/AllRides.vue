<script>
import Ride from './Ride.vue'
import axios from 'axios';
import Navigation from './Navigation.vue';

export default {
    components : {
        Navigation,
        Ride
    },
    data() {
        return {
            allCategories: [{
                categoryId: 0,
                categoryName: 'All Categories'
            }],
           rides: [],
           selected :'All Categories',
           error: "Ride not found"
        }
    },
    created() {
        this.getRides();
        this.getCategories();
    },
        methods : {
            refreshPage(){
                // function resets age after option has been clicked. 
                // then it only shows the rides with a certain category
            },
            async getRides() {
                try {
                    const response = await axios.get('http://localhost:9000/attractions');
                    this.rides = response.data;
                    // console.log(JSON.stringify(this.rides, null, 2));
                    this.rides.forEach(ride => {
                        // console.log(ride.name);
                        // console.log(ride.speed);
                        // console.log("categories :");
                        ride.categories.forEach(category => {
                            // console.log(category.categoryName);
                        })
                        // console.log(ride.price);
                        // console.log(ride.height);
                        // console.log("----------------");
        })
                    this.rides = response.data.map(ride => ({
                        rideID: ride.id,
                        rideName: ride.name,
                        rideImg: ride.image,
                        categories: ride.categories,
                        description: ride.description

                        // console.log(ride.name);
                        // console.log(ride.speed);
                        // console.log(ride.price);
                        // console.log(ride.height);
                        // console.log("---------------");
                    }))
                    
                }catch(error){
                    this.error = 'failed to fetch rides';
                    console.log(error);
                }
            },
            async getCategories(){
                try {

                    const response = await axios.get('http://localhost:9000/categories');
                    this.allCategories = response.data;
                    // console.log(JSON.stringify(this.allCategories, null, 2));
                    this.allCategories.forEach(category => {
                        console.log(this.allCategories);
                        console.log(category.id);
                        console.log(category.categoryName);
                        console.log('---------------------------');

                    })
                    this.allCategories = response.data.map(category => ({
                        categoryId: category.id,
                        categoryName: category.categoryName
                    }))
                }catch(error){
                    this.error = "categories failed to fetch";
                    console.log(error);
                }
            },
            navigateToAddRide() {
                this.$router.push({name: 'AddRide'});
            }

        
    },
    computed: {
        filteredRides() { 
            if(this.selected === 'All Categories') {
                return this.rides;
            }else {
                return this.rides.filter(ride =>
                    ride.categories.some(category => category.categoryName === this.selected)
                );
            }
        }
    },
    mounted() {
        console.log('Allrides Mounted');

    }
    
}
</script>

<template>
    <Navigation/>
    
    <h1 id="sectionTitle" >Our Rides</h1>
    <main>
        <div class="filter">
            <h1>Filter by</h1>
            <div class="categories" >
                <select v-model="selected" @change="refreshPage" >
                    <option selected value>All Categories</option>
                    <!-- TODO add all categories to filter  -->
                     <option v-for="category in this.allCategories" :value="category.categoryName">{{category.categoryName}}</option> 
                </select>
            </div>
            <button @click="navigateToAddRide"><p>Add Ride</p><img src="/src/assets/addIcon.svg" alt=""></button>
        </div>
        <!-- TODO add rides to display  -->
        <ul class="rides">
            
           <Ride v-for="ride in filteredRides" :key="ride.rideID" :ride="ride"  />
         
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