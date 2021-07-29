<template>
  <div>
    <k-notification group="example"></k-notification>
    <page-header>
      <template #title>Deploy</template>
    </page-header>
    <k-select label="select deployment" v-model="selectedValue">
      <k-option v-for="item in items" :key="item.id" :value="item.value" :label="item.value"></k-option>
    </k-select>
    <div class="deploy-actions">
      <button @click="showModal" class="role-primary">部署</button>
    </div>
    <k-modal v-model="visible" show-close>
      <template #title>开始部署</template>
      <template #default>
        确定部署{{this.selectedValue}}
      </template>
      <template #footer>
        <k-button class="role-primary" @click="confirmDeploy(selectedValue)">确认</k-button>
        <k-button class="role-secondary" @click="showModal">取消</k-button>
      </template>
    </k-modal>
  </div>
</template>

<script>
import {ref, reactive, toRefs, inject } from 'vue'
import PageHeader from '@/views/components/PageHeader.vue'
import axios from 'axios'
export default {
  components: {
    PageHeader
  },
  setup() {
    const store = inject('notificationStore')
    const state = reactive({
      items: [],
    })
    const selectedValue = ref('')
    const visible = ref(false)
    const showModal = () => {
      if (selectedValue.value !== null) {
        visible.value = !(visible.value)
      } else {
        addNotify('error')
      }
    }
    const confirmDeploy = (v) => {
      axios.post('http://10.6.5.191:7300/mock/61012613dc4a4100206c0399/example/confirmDeploy',{value: v})
      .then((res)=>{
        if(res.status == '200') {
          showModal()
          if(res.data.data.boolean === true) {
            addNotify('success','部署','部署成功')
          } else {
            addNotify('warn','部署','部署失败')
          }
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    const addNotify = ( type , title, content ) => {
      store.action.notify({
        group: 'example',
        type,
        title,
        content,
      })
    }
    axios.get('http://10.6.5.191:7300/mock/61012613dc4a4100206c0399/example/fetchDeployList')
      .then((res)=>{
        state.items = res.data.data.items
      })
      .catch((err)=>{
        console.log(err);
      })
    return {
      visible,
      ...toRefs(state),
      selectedValue,
      showModal,
      confirmDeploy,
      addNotify
    }
  }
}
</script>

<style>
.deploy-actions {
  margin-top: 20px;
  float: right;
}
</style>