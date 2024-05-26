// code recieved from chatgpt
// src/router.js
import { createRouter, createWebHistory } from "vue-router";
import AllRides from "../components/AllRides.vue";
import AddRide from "../components/AddRide.vue";

const routes = [
	{
		path: "/",
		name: "AllRides",
		component: AllRides,
	},
	{
		path: "/AddRide",
		name: "AddRide",
		component: AddRide,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
