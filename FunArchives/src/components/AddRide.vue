<script>
import Navigation from './Navigation.vue';
import axios from 'axios';

    export default {
        components : {
        Navigation,
    },
    data(){
        return {
            allCategories: [{
                categoryId: 0,
                categoryName: 'All Categories'
            }],
            categoryInput: {},
            showPopup : true
        }
    },
    created () {
        this.getCategories();
    },
    methods: {
        capitalize(s){
            // https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
            return s && s[0].toUpperCase() + s.slice(1);
        },
        openPopup(){
            this.showPopup = true;
        },
        addCategory() {
                this.showPopup = false;
            },
            postCategory(){
                // fetch('https://localhost:9000/attractions' ,{
                //     method: "Post",
                //     headers:{
                //         "Content-Type": "application/json",
                //     },
                //     body: JSON.stringify({
                      
                //     }) 
                // }).then(function (response) {
                //     console.log(response);
                //     if(!response.error){
                //         self.$emit('rideSubmitted')
                //     }
                // })
            },
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
                            rideVideo: this.rideVideo,
                            requiredHeight : this.requiredHeight,
                            ridePrice : this.ridePrice,
                            rideSpeed: this.rideSpeed,
                            categories : [],
                            rideCapacity: this.rideCapacity,
                            rideDuration: this.rideDuration,
                            rideBuildyear: this.rideBuildyear,
                            rideStatus: this.rideStatus
                        }
                    }) 
                }).then(function (response) {
                    console.log(response);
                    if(!response.error){
                        self.$emit('rideSubmitted')
                    }
                })
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
            styleCategory(category){
            switch (category){
                case 'Horror':
                    // console.log(category);
                    return 'horror';
                case 'Kids':
                    // console.log(category);
                    return 'kids';
                default:
                    return 'default';
                    }
            
        },
        // Function recieved from chatgpt.
        updateCategoryBoxWidth() {
        const categoryCount = this.allCategories.length;
        // Calculate the width based on the number of categories
        // You can adjust this calculation as per your requirements
        const maxWidth = 400; // Set a maximum width to prevent it from becoming too wide
        const minWidth = 250; // Set a minimum width to ensure visibility
        const calculatedWidth = Math.min(maxWidth, Math.max(minWidth, categoryCount * 120));
        this.$refs.categoryBox.style.width = calculatedWidth + 'px';
    }
        },
        mounted() {
            console.log('AddRide Mounted');

            this.$nextTick( () => {
                this.updateCategoryBoxWidth();
            })
        }
            
    }
</script>

<template>
    <Navigation/>
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
                <label for="categories">Select category : </label>
                <div id="categoryBox">
                    <div v-if="this.allCategories.length < 1 ">
                    <p class="noCategories">it seems no categories have been added</p></div>
                    <div v-else  v-for="category in this.allCategories" :key="category.categoryId">
                        <input  :id="'category_' + category.categoryId" type="checkbox" v-model="categoryInput[category.categoryId]" id="categoryInput" >
                        <label  :for="'category_' + category.categoryId" id="categoryLabel" :class="styleCategory(category.categoryName)">{{ category.categoryName }}</label>
                    </div>
                    
                    
                </div>
                <button @click="openPopup">Add Category</button>
                <div v-if="showPopup" class="popupForm">
                    <form>
                        <label for="categoryname">Name : </label>
                        <input type="text">
                        <!-- color picker -->
                        <button id="addCategory">Add Category</button>
                    </form>
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
                    <div>
                        <label for="ride.ridePrice">Price : </label>
                        <input type="number" name="" id="ridePrice">
                    </div>
                </div>
                <div class="rideVideo">

                    <label for="ride.rideVideo">Onride video : </label>
                    <input type="text" name="" id="rideVideo" placeholder="ex. &#34;https://www.youtube.com/watch?v=dQw4w9WgXcQ&#34; ">
                </div>

            <button  type="submit">Submit Ride</button>
        </form>
    </main>
</template>

<style scoped>
.popupForm {
    padding: 10px;
    border-radius: 5px;
    border: 3px solid black;
    margin-left: 80px;
    /* background-color: aqua; */
    height: 50px;
}
#addCategory {
    font-size: 19px;
}
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
    #rideImg {
        border: 0px solid black;

    }
    .noCategories {

       font-size: large; 
        margin: 0px 10px 0px 10px;    
        font-weight: bold;   
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

    .categories {
        display: flex;
    }
    .categories label {
        width: 160px;
    }

    .categories > label{
        margin-right: 20px;
    }

    #categoryBox {
        display: flex;
        flex-wrap:wrap;
        border: 3px solid black;
        /* width: 250px; */
        /* height: auto;  */
        border-radius: 5px;   
        padding: 5px 0px 15px 5px;
    }
    #categoryLabel {
        border: 3px solid black;
        border-radius: 5px;
        padding: 2px 5px 2px 5px;
        font-weight: 600;
        margin-right: 10px;
    }

    input[type="checkbox"] {
        appearance: none;
        visibility: hidden;
        margin: 0;
    }
    input[type="checkbox"]:checked + #categoryLabel {
        border: 4px solid black;
        
        
    }
    #categoryInput {
        /* appearance: none; */
    }

    label {
        
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

     /* ride: {
             rideName: '',
             rideImg: '',
             rideVideo: '',
             requiredHeight: 0,
             ridePrice: 0,
             rideSpeed: 0,
             categories: [],
             rideCapacity: 0,
             rideDuration: '',
             rideBuildyear: 0,
             rideStatus: true

         }, */
/* style categories */
.horror {
    background-color: purple;
    color: rgb(43, 255, 0);
}

.kids {
    background: linear-gradient(45deg, red, orange, rgb(167, 167, 0), green, rgb(42, 42, 255), rgb(167, 76, 231), violet, red);
    color:white  ;
}

.default {
    background-color: white;
}
    </style>