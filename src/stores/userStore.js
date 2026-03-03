import { defineStore } from "pinia";
import { ref,reactive } from "vue";

export const useUserStore = defineStore("user",()=>{

    const user = reactive({
        username:"",
        role:"",
        token:""
    })

    function setUser(username,role,token){
        user.username = username
        user.role = role
        user.token = token
    }

    return { user,setUser }
},{
    persist:true
})