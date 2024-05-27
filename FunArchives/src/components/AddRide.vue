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
                categoryName: ''
            }],
            showPopup : false,
            newCategory: {
                categoryName: '',
                attractionsIds: null
            },
            ride : {
                rideName : '',
                rideImg: null,
                rideVideo:  '',
                requiredHeight : '', 
                ridePrice : 0,
                rideSpeed: 0,
                categories : [],
                rideCapacity: 0,
                rideDuration: '',
                rideBuildyear: 0,
                rideStatus: true,

            }
        }
    },
    created () {
        this.getCategories();
    },
    methods: {
        handleImageUpload(event){
            const file = event.target.files[0];
            if(file){
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.ride.rideImg = e.target.result;
                    console.log(this.imageUrl);
                };
                reader.readAsDataURL(file)
            }
        },
        updateImageUrl(event) {
            this.ride.rideImg = event.target.value;
        },
        capitalize(s){
            // https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
            return s && s[0].toUpperCase() + s.slice(1);
        },
        openPopup(){
            this.showPopup = true;
        },
        addCategory() {
                this.showPopup = false;
                this.postCategory();
            },
            postCategory(){
                axios.post('http://localhost:9000/categories', this.newCategory)
                .then(response => {
                    console.log(response.data);
                    this.getCategories();

                    this.newCategory ={
                        categoryName: '',
                        attractionsIds: null
                    }
                })
                .catch(error => {
                    console.error(error);
                })
            },
            postRide(){
                const transformedRide = {
                    name: this.ride.rideName,
                    picture: this.ride.rideImg,
                    video: this.ride.rideVideo,
                    height: this.ride.requiredHeight,
                    price: this.ride.ridePrice,
                    speed: this.ride.rideSpeed,
                    capacity: this.ride.rideCapacity,
                    duration: this.ride.rideDuration,
                    buildYear: this.ride.rideBuildyear,
                    status: this.ride.rideStatus,
                    categoryIds: this.ride.categories
                    

                };
                console.log(JSON.stringify(transformedRide));
                axios.post('http://localhost:9000/attractions', transformedRide)
                .then(response => {
                    console.log(response.data);
                    this.clearRideForm();
                    
                })
                .catch(error => {
                    console.log('Error:', error.response.data);
                })
            },
            
            async getCategories(){
                try {

                    const response = await axios.get('http://localhost:9000/categories');
                    this.allCategories = response.data;
                    // console.log(JSON.stringify(this.allCategories, null, 2));
                    this.allCategories.forEach(category => {
                        // console.log(this.allCategories);
                        // console.log(category.id);
                        // console.log(category.categoryName);
                        // console.log('---------------------------');

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
        <form class="addRide"  @submit.prevent="postRide">
            <div class="rideName">
                <div>
                    <label for="rideName">Ride Name : </label>
                    <input type="text" name="rideName" id="rideName" v-model="ride.rideName">
                </div>
                <div>
                    <label for="rideImg"> ride Image : </label>
                    <input type="text" id="rideImg" placeholder="enter image URL"  @change="updateImageUrl"  /> 
                    <img v-if="ride.rideImg" :src="ride.rideImg" alt="Uploaded Image" width="100px" height="100px" style="position: relative; margin-left: 0px; border: 2px solid black; padding: 1px; border-radius: 2px;"  >
                </div>
            </div>

            <div class="categories">
                <label for="categories">Select category : </label>
                <div id="categoryBox">
                    <div v-if="allCategories.length < 1 ">
                    <p class="noCategories">it seems no categories have been added</p>
                </div>
                    <div v-else  v-for="category in allCategories" :key="category.categoryId">
                        <input  :id="'category_' + category.categoryId" type="checkbox" v-model="ride.categories" :value="category.categoryId" id="categoryInput" >
                        <label  :for="'category_' + category.categoryId" id="categoryLabel" :class="styleCategory(category.categoryName)">{{ category.categoryName }}</label>
                    </div>
                    
                    
                </div>
                <button @click="openPopup" id="addCategory">Add Category</button>
                <div v-if="showPopup" class="popupForm">
                    <form @submit.prevent="addCategory">
                        <div>
                            <label for="newCategory">Name : </label>
                            <input type="text" v-model="newCategory.categoryName">
                        </div>
                        <div>
                            <!-- color picker -->
                            <button type="submit" id="addNewCategory">Add Category</button>
                        </div>
                    </form>
                </div>
            </div>
                <div class="rideInfo1" >
                    <div>
                        <label for="rideCapacity">Capacity : </label>
                        <input type="number" name="" id="rideCapacity" placeholder=" # people " v-model="ride.rideCapacity"> 
                    </div> 
                    <div>
                        <label for="rideSpeed">Speed : </label>
                        <input type="number" name="" id="rideSpeed" placeholder=" km/h" v-model="ride.rideSpeed"> 
                    </div>
                    <div>
                        <label for="rideDuration">Duration : </label>
                        <input type="text" name="" id="rideDuration" placeholder="minutes" v-model="ride.rideDuration">
                    </div>                   
                </div>

                <div class="rideInfo2">
                    <div>

                        <label for="rideBuildYear">Build Year : </label>
                        <input type="number" name="" id="rideBuildYear" v-model="ride.rideBuildyear">
                    </div>
                    <div >

                        <label for="requiredHeight">Required Height : </label>
                        <input type="string" name="" id="requiredHeight" v-model="ride.requiredHeight">
                    </div>
                    <div>
                        <label for="ridePrice">Price : </label>
                        <input type="number" name="" id="ridePrice" v-model="ride.ridePrice">
                    </div>
                </div>
                <div class="rideVideo">

                    <label for="rideVideo">Onride video : </label>
                    <input type="text" name="" id="rideVideo" placeholder="ex. &#34;https://www.youtube.com/watch?v=dQw4w9WgXcQ&#34; " v-model="ride.rideVideo" >
                </div>

            <button  type="submit">Submit Ride</button>
        </form>
    </main>
</template>

<style scoped>
.popupForm {
    display: flex;
    padding: 10px;
    border-radius: 5px;
    border: 3px solid black;
    margin-left: 80px;
    /* background-color: aqua; */
    height: 100px;

}
 #addNewCategory {
    font-size: 19px;
    margin-top: 15px;
    margin-left: 70px;
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