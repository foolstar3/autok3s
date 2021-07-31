<template>
  <div>
    <input ref="inputRef" type="file" :action="action" :disabled="disabled" />
    <button class="role-primary" type="submit">{{content}}</button>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'KUpload',
  props: {
    action: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: '提交'
    }
  },
  setup() {
    const inputRef = ref(null)
    return {
      inputRef,
    }
  },
});
</script>