<template>
  <div class="hello2">
    <h1>{{this.counter}}</h1>
    <input :value="counter" @click="onClick" type="button" />
  </div>
</template>

<script>
export default {
  name: "HelloWorld2",
  props: {
    condition: { type: Boolean, default: true },
    num: { type: Number, default: 0 }
  },
  data() {
    return {
      counter: this.num
    };
  },
  methods: {
    onClick() {
      this.counter += 1;
    }
  }
};
</script>

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