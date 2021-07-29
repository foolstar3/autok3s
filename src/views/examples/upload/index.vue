<template>
  <k-upload content="确认提交" action=""></k-upload>
  <quillEditor>123</quillEditor>
</template>
<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
export default{
  components: {
    quillEditor
  },
  setup() {},
};
</script>