/**
 * 用户相关的 action 类型
 */

export enum UserActionTypes {
  // 用户登录
  ACTION_LOGIN = 'ACTION_LOGIN',
  // 重置token
  ACTION_RESET_TOKEN = 'ACTION_RESET_TOKEN',
  // 获取用户信息
  ACTION_GET_USER_INFO = 'ACTION_GET_USER_INFO',
  // 改变角色
  ACTION_CHANGE_ROLES = 'ACTION_CHANGE_ROLES',
  // 用户登出
  ACTION_LOGIN_OUT = 'ACTION_LOGIN_OUT'
}
