import { createRouter, createWebHistory } from "vue-router";
import Index from "@/components/Index.vue";
import About from "@/components/About.vue";
import Reference from "@/components/Reference.vue";
import Contact from "@/components/Contact.vue";

const routes = [
  { path: "/index", component: Index },
  { path: "/about", component: About },
  { path: "/reference", component: Reference },
  { path: "/contact", component: Contact }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
