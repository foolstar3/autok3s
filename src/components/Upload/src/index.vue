<template>
  <div>
    <input type="file" :action="action" :disabled="disabled" />
    <button type="submit">{{content}}</button>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
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
  setup() {},
});
</script>