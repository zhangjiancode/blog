/*
 * @Description: 数据模型
 * @Author: 张健66
 * @Date: 2021-08-07 09:47:58
 * @LastEditTime: 2021-08-07 09:56:30
 * @LastEditors: 张健66
 */
class BaseModel {
  constructor(data, msg) {
    if (typeof data === 'string') {
      this.message = data
      data = null
      msg = null
    }
    if (data) {
      this.data = data

    }
    if (msg) {
      this.message = msg
    }
  }
}

class SuccessModel extends BaseModel {
  constructor(data, msg) {
    super(data, msg)
    this.code = 0
  }
}

class ErrorModel extends BaseModel {
  constructor(data, msg) {
    super(data, msg)
    this.code = -1
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}