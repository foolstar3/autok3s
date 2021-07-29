import request from '@/utils/request'

// 获取证书列表
export function fetchList() {
  return request({
    url: '/credentials',
    method: 'get',
  });
}

// 创建新的证书
export function createCredential(data) {
  return request({
    url: '/credentials',
    method: 'post',
    data,
  });
}

// 更新证书
export function updateCredential(provider, data) {
  return request({
    url: `/credentials/${provider}`,
    method: 'put',
    data,
  });
}

// 通过id获取证书
export function fetchById(id) {
  return request({
    url: `/credentials/${id}`,
    method: 'get',
  });
}

// 删除证书
export function remove(id) {
  return request({
    url: `/credentials/${id}`,
    method: 'delete',
  });
}
