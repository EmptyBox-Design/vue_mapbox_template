<template>
  <div id="About" class="mt-2 p-6 text-Roboto text-theme-body">
    <div class="headline-hero flex justify-center">
      <img class="hero-img" :src="heroImg" alt="" />
    </div>
    <div class="about-headline">
      <h2 class="font-bold font-Roboto text-title text-purple-500">
        Methodology
      </h2>
      <p class="mt-2 text-subtitle font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        repellendus expedita nisi ipsum distinctio excepturi dolores, iusto
        molestiae aut, perspiciatis dolor voluptatum placeat repudiandae
        voluptate, cupiditate veniam nobis dolorum fugit.
      </p>
    </div>
    <div class="about-box my-4 text-justify">
      <div class="my-4 text-header font-bold text-purple-500">Introduction</div>
      <p class="my-4 text-paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste,
        fuga incidunt aspernatur explicabo dolore cumque magnam molestiae
        accusamus distinctio quae nostrum at tempora error ipsam! Ex error
        quaerat reprehenderit!
      </p>
    </div>
  </div>
</template>

<script setup></script>
<style>
.headline-hero {
  margin-left: -1rem;
  width: 109%;
  padding-left: 1rem;
  padding-right: 1rem;
}
.hero-img {
  height: 250px;
  background-repeat: no-repeat;
  background-size: cover;
}

a {
  text-decoration: underline !important;
}
</style>
