export default function look(){
    const loggedIn = JSON.parse(sessionStorage.getItem('user'))
    if(loggedIn){
        return loggedIn[0]
    }
}