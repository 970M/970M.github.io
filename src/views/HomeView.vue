<template>
  <div class="home">
    <NavBar />

    <header>
      <PresentationCard />
      <div class="hepta-box">
        <img class="hepta" src="/assets/image-0.png" alt="hepta" />
      </div>
    </header>

    <WorksView />
    <SkillsView />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import PresentationCard from "../components/PresentationCard.vue";
import WorksView from "./WorksView.vue";
import SkillsView from "./SkillsView.vue";

export default {
  name: "HomeView",
  components: { NavBar, PresentationCard, WorksView, SkillsView },
};
</script>
