<template>
  <div class="condition">
    <div>
      <input type="checkbox" id="checkbox" v-model="Bool" />
      <label for="checkbox">{{ Bool }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Condition",
  props: {
    Bool: { type: Boolean, default: false }
  },
  Bool: {
    get() {
      return this.$store.state.Bool;
    },
    set(Bool) {
      this.$store.commit("setBoolean", Bool);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
