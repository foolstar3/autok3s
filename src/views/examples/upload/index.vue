<template>
  <k-upload content="确认提交" action=""></k-upload>
  <button @click="decrease">-</button>
  <k-progress type="inline" :percent="percent"></k-progress>
  <button @click="increase">+</button>
</template>
<script>
import { provide, ref } from "vue"
export default{
  props: {
    percent: {
      type: Number,
    }
  },
  setup() {
    const percent = ref(0)
    provide('percent',percent)
    const increase = () => {
      percent.value += 10
    }
    const decrease = () => {
      percent.value -= 10
    }
    return {
      percent,
      increase,
      decrease,
    }
  },
};
</script>