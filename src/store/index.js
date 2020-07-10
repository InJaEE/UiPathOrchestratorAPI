import vue from 'vue';
import vuex from 'vuex';
import { loginAPI, getRobots, getProcess, getReleaseProcess, startJob, getUsers, getLibraries } from '../api/api';


vue.use(vuex);

export default new vuex.Store({
    state: {
        userInfo: '',
        bearerToken: '',
    },
    getters: {
        getUserInfo: state => state.userInfo,
        getBearerToken: state => state.bearerToken,
    },
    mutations: {
        SET_BEARER_TOKEN(state, data){
            state.bearerToken = data;
        }
    },
    actions: {
        async login({ commit }, userData){
            const result = await loginAPI(userData);
            console.log(result);
            commit('SET_BEARER_TOKEN', result.data.result);
            if(result.data.success){
                return true;
            }
            return false;
        },
        async getRobots(context){
            const result = await getRobots();
            console.log(result);
            return result.data;
        },
        async getProcesses(context){
            const result = await getProcess();
            return result.data;
        },
        async getReleaseProcess(context){
            const result = await getReleaseProcess();
            return result.data;
        },
        async getUser(){
            const result = await getUsers();
            return result.data;
        },
        async getLibraries(){
            const result = await getLibraries();
            return result.data;
        },
        async startJob(context, data){
            const startInfo = {
                startInfo: {
                    ReleaseKey: data.releaseKey,
                    Strategy: 'Specific',
                    // RobotIds: data.RobotIds,
                    RobotIds: [2],
                    JobsCount: 0,
                    Source: 'Manual',
                }
            }
            const result = await startJob(startInfo);
        },
    }
})