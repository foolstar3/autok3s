import request from '@/utils/request'


// 获取集群列表
export function fetchList() {
  return request({
    url: '/clusters',
    method: 'get',
  });
}

// 通过id获取集群
export function fetchById(id) {
  return request({
    url: `/clusters/${id}`,
    method: 'get',
  });
}

// 通过id删除集群
export function remove(id) {
  return request({
    url: `/clusters/${id}`,
    method: 'delete',
  });
}

//
export function fetchNodes(id) {
  return request({
    url: `/clusters/${id}?link=nodes`,
    method: 'get',
  });
}

// 添加集群
export function createCluster(data) {
  return request({
    url: '/clusters',
    method: 'post',
    data,
  });
}

export function joinNode(data) {
  return request({
    url: `/clusters/${data.id}?action=join`,
    method: 'post',
    data,
  });
}

export function fetchContextList() {
  return request({
    url: `/config`,
    method: 'get',
  });
}

export function disableExplorer(data) {
  return request({
    url: `/clusters/${data.id}?action=disable-explorer`,
    method: 'post',
    data,
  });
}
export function enableExplorer(data) {
  return request({
    url: `/clusters/${data.id}?action=enable-explorer`,
    method: 'post',
    data,
  });
}
