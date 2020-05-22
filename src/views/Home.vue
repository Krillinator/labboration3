<template>
  <div class="home">
    <img
      alt="Vue logo"
      style="width:100px;height:100px"
      src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/lion-fire-logo-design-template-free-89daa14626ac403bd3cf6282036663ff_screen.jpg?ts=1572094154"
    />
    <HelloWorld msg="Lab #3" />
    <HelloWorld2 />
    <TwoWayModel />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import HelloWorld2 from "@/components/HelloWorld2.vue";
import TwoWayModel from "@/components/TwoWayModel.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    HelloWorld2,
    TwoWayModel
  }
};
</script>
