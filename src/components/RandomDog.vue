<template>
  <div id="background">
    <div id="dogs">
      <h1>Dog pictures</h1>
      <input :value="image" @click="dogFetch" type="button" />
      <div class="imgbox">
        <br />
        <img class="center-fit" :src="this.image" alt="Awaiting..." />
      </div>
    </div>
    <p>
      <br />
      <br />
      <em>Website by Kristoffer</em>
    </p>
  </div>
</template>

<script>
export default {
  name: "dogPic",
  data() {
    return {
      image: "Fetch Random dogo pic"
    };
  },
  methods: {
    dogFetch() {
      fetch("https://random.dog/woof.json")
        .then(response => response.json())
        .then(result => {
          this.image = result.url;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#background {
  background-image: linear-gradient(rgba(255, 0, 0, 0), rgb(255, 200, 200));
}

#dogs {
  white-space: pre;
  text-align: center;
}

* {
  margin: 0;
  padding: 0;
}

.imgbox {
  display: grid;
  height: 100%;
}

.center-fit {
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
}
</style>
