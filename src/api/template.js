import request from '@/utils/request'


// 获取模板列表
export function fetchList() {
  return request({
    url: '/clusterTemplates',
    method: 'get',
  });
}

// 通过id获取模板
export function fetchById(id) {
  return request({
    url: `/clusterTemplates/${id}`,
    method: 'get',
  });
}

// 删除模板
export function remove(id) {
  return request({
    url: `/clusterTemplates/${id}`,
    method: 'delete',
  });
}

// 更新模板
export function update(id, data) {
  return request({
    url: `/clusterTemplates/${id}`,
    method: 'put',
    data,
  });
}

// 创建模板
export function create(data) {
  return request({
    url: '/clusterTemplates',
    method: 'post',
    data,
  });
}