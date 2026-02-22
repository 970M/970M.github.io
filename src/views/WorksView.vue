<template>
  <div class="works">
    <NavBar />
    <div class="works-container">
      <div class="work-xp" v-for="xp in xps" :key="xp.id">
        <h3>{{ xp.id }}</h3>
        <p>{{ xp.description }}</p>
        <ul>
          <li v-for="skill in xp.skills" :key="skill">{{ skill }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import { xps } from "../data/xps.js";

export default {
  name: "WorksView",
  components: { NavBar },
  data() {
    return { xps };
  },
};
</script>
