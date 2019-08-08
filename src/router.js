import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Project from "./views/Project.vue";
import Team from "./views/Team.vue";
import PageNotFound from "./views/PageNotFound.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    // {
    //   path: "/team",
    //   name: "team",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // },
    {
      path: "/project",
      name: "project",
      component: Project
    },
    {
      path: "/team",
      name: "team",
      component: Team
    },
    {
      path: '*',
      redirect: "/pagenotfound",
      component: PageNotFound
    },
  ]
});
