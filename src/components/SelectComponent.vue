<template>
  <div>
    <multiselect v-model="value" :options="options"></multiselect>
  </div>
</template>
<script>
export default {
  // OR register locally
  //   components: { Multiselect },
  props: {
    selected: {
      default: null
    },
    maxLength: {
      default: 10
    }
  },
  data() {
    return {
      value: null,
      options: []
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.value = this.selected;
      this.fillData();
    });
  },
  methods: {
    fillData() {
      for (let i = 0; i < this.maxLength; ++i) {
        this.options.push(i);
      }
    }
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>