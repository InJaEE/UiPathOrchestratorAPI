import { instance, authInstance } from './index';


function loginAPI(userData){
    return instance.post('/api/Account/Authenticate', userData);
}

function getRobots(){
    return authInstance.get('/odata/Robots');
}

function getProcess(){
    return authInstance.get('/odata/Processes');
}

function getReleaseProcess(){
    return authInstance.get('/odata/Releases');
}

function getUsers(){
    return authInstance.get('/odata/Users');
}

function getLibraries(){
    return authInstance.get('/odata/Libraries');
}

function startJob(startInfo){
    return authInstance.post('/odata/Jobs/UiPath.Server.Configuration.OData.StartJobs', startInfo);
}

export { loginAPI, getRobots, getProcess, getReleaseProcess, getUsers, getLibraries, startJob };