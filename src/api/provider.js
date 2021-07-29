import request from '@/utils/request'

// 获取providers列表
export function fetchList() {
  return request({
    url: '/providers',
    method: 'get',
  });
}