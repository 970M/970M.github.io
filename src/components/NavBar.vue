<template>
  <nav>
    <div class="menu">
      <li>
        <router-link to="/" class="categ">Home</router-link>
      </li>
      <li>
        <router-link to="/works" class="categ">Works</router-link>
        <ul class="sub-menu">
          <router-link to="/works" class="categ">XP</router-link>
        </ul>
        <ul class="sub-menu">
          <router-link to="/tools" class="categ">Tools</router-link>
        </ul>
      </li>
      <li>
        <router-link to="/skills" class="categ">Skills</router-link>
      </li>
      <li>
        <router-link to="/contact" class="categ">Contact</router-link>
      </li>
    </div>
  </nav>
</template>
