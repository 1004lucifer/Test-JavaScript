<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"><br />
    <button @click="test1">test1</button><br />
    <button @click="test2">test2</button><br />
    <button @click="test3">test3</button><br />
    <button @click="test4">test4</button><br />
    <button @click="test5">test5</button><br />
    <button @click="test6">test6</button><br />
    <button @click="test7">test7</button><br />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: function() {
    return {
      testData1: 'testData1',
      testData2: 'testData2'
    }
  },
  created() {
    console.log('created');
  },
  mounted: function() {
    this.test1();
    this.test2();
    this.test3();
    this.test4();
    this.test5();
    this.test6();
    this.test7();
  },
  methods: {
    test1: function() {
      // eslint-disable-next-line no-debugger
      debugger;
      console.log('test1: ', this);
    },
    test2: async function() {
      // eslint-disable-next-line no-debugger
      debugger;
      console.log('test2: ', this);
    },
    test3() {
      // eslint-disable-next-line no-debugger
      debugger;
      console.log('test3: ', this);
    },
    async test4() {
      // eslint-disable-next-line no-debugger
      debugger;
      console.log('test4: ', this);
    },
    test5: () => {
      // eslint-disable-next-line no-debugger
      debugger;
      console.log('test5: ', this);
    },

    callbackTest: function(obj) {
      // eslint-disable-next-line no-debugger
      debugger;
      obj.callback(obj.data);
    },
    test6: function() {
      this.callbackTest({
        data: this.testData1,
        callback: function(res) {
          // eslint-disable-next-line no-debugger
          debugger;
          console.log(res, this);
        }
      });
    },
    test7: function() {
      this.callbackTest({
        data: this.testData2,
        callback: (res) => {
          // eslint-disable-next-line no-debugger
          debugger;
          console.log(res, this);
        }
      });
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
