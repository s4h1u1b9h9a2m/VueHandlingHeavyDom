<template>
  <div class="row">
    <div class="item">{{index}}</div>
    <div class="item">Hey</div>
    <div class="item">
      <!-- <SelectComponent :selected="selectedValue(index)" :maxLength="maxSelectLength"/> -->
    </div>
  </div>
</template>
<script>
import SelectComponent from "./SelectComponent";
export default {
  components: {
    SelectComponent
  },
  props: ["item", "index"],
  data() {
    return {
      maxSelectLength: 1000
    };
  },
  methods: {
    selectedValue(number) {
      return number % 100;
    }
  }
};
</script>
<style scoped>
.row {
  display: flex;
  flex-direction: row;
  width: 100%;
  /* background: #eee; */
}
.row:nth-child(even) {
  background: #eee;
}
.item {
  flex: 1;
  border: 1px solid gray;
}
</style>


