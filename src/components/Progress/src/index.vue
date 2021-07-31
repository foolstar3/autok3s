<template>
  <div class="k-progress" :percent="percent" :type="type">
    {{percent}}
    <div v-if="type === 'inline'" class="k-progress-inline">
      <div class="k-progress-inline-status" :style="{width: inlineProgress + 'px'}"></div>
    </div>
    <div v-else-if="type === 'circle'" class="k-progress-circle">
      <!-- <div class="k-progress-circle-outer"></div> -->
      <div class="left-wrapper">
        <div class="left-circle"></div>
      </div>
      <div class="right-wrapper">
        <div class="right-circle"></div>
      </div>
      <!-- <div class="k-progress-circle-status"></div> -->
    </div>
    <div v-else-if="type === 'dashboard'">{{type}}</div>
  </div>
</template>

<script>
import { computed, defineComponent, ref, inject, watch } from 'vue';
export default defineComponent({
  name: 'KProgress',
  props: {
    percent: {
      type: Number,
    },
    type: {
      type: String,
      default: 'inline'
    },
    inlineProgress: {
      type: Number,
    }
  },
  setup() {
    // 从父组件中获取进度
    const percent = inject('percent')
    // console.log(percent,type);

    // 计算当前进度
    const inlineProgress = computed(()=> {
      console.log(percent.value);
      return percent.value*3
    })
    watch(percent,()=> {
      console.log(percent);
    })
    return {
      inlineProgress,
      percent,
      // type
    }
  }
})
</script>

<style>
.k-progress {
  box-sizing: border-box;
  width:300px;
  height:300px;
}
.k-progress-circle {
  position: relative;
  width: 100%;
  height: 100%;
  /* border-radius: 50%;
  background: var(--primary); */
}
.left-wrapper {
  overflow: hidden;
  position: absolute;
  width: 50%;
  height: 100%;
  left: 0;
}
.right-wrapper {
  overflow: hidden;
  position: absolute;
  width: 50%;
  height: 100%;
  right: 0;
}
.left-circle {
  width: 200%;
  height: 100%;
  border: 10px solid var(--primary);
  border-left: 10px solid green;
  border-top: 10px solid green;
  border-radius: 50%;
  left: 0;
}
.right-circle {
  width: 200%;
  height: 100%;
  border: 10px solid var(--primary);
  border-right: 10px solid green;
  border-bottom: 10px solid green;
  border-radius: 50%;
  right: 0;
}
/* .k-progress-circle-outer {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--primary);
} */
/* .k-progress-circle-status {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 10px solid var(--primary);
} */
.k-progress-inline {
  width:300px;
  height: 10px;
  border-radius: 5px;
}
.k-progress-inline-status {
  height: 100%;
  background: var(--primary);
  border-radius: 5px;
  transition: width .4s ease-in-out;
  animation: inline 3s ease-in;
}
@keyframes inline {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>