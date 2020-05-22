<template>
  <div class="about">
    <RandomDog />
  </div>
</template>

<script>
// @ is an alias to /src
import RandomDog from "@/components/RandomDog.vue";

export default {
  name: "About",
  components: {
    RandomDog
  }
};
</script>

