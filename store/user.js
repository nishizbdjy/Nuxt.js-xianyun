//存放用户user数据的
export const state = {
    userInfo: {}
}

//给state赋值的方法
export const mutations = {
    setuserInfo(state, data) {
        state.userInfo = data
    }
}