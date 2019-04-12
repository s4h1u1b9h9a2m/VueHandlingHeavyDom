<template>
  <div class="list">
    <virtual-list :size="40" :remain="8">
      <row v-for="(item, index) in data" :item="item" :index="index" :key="index"/>
    </virtual-list>
  </div>
</template>
<script>
import virtualList from "vue-virtual-scroll-list";
import row from "./row";
export default {
  name: "List",
  data() {
    return {
      length: 900,
      data: []
    };
  },
  components: {
    row,
    "virtual-list": virtualList
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      for (let i = 0; i < this.length; ++i) {
        this.data.push(i);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  display: flex;
  flex-direction: column;
  max-height: 400px;
  /* width: 100px; */
  overflow: scroll;
  border: 2px solid #ccc;
}
</style>
