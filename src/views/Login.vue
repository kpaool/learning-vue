<script setup>

    import { reactive, ref, watchEffect } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter()

    const credentials = reactive({
        username:"abraham",
        password:"password"
    })

    const usernames = reactive(["kitsa","hana","samson"])

    const error =reactive({
        username:"",
        password:"",
        general:""
    })


    watchEffect(()=>{
        if(credentials.password.length < 6){
            error.password = "Password must be at least 6 characters long"
        }else{
            error.password = ""
        }

    })

    function login(event,userRole){

        if(!credentials.username || !credentials.password){
            error.general = "Please enter username and password"
            return
        }

        error.general = ""

        fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            
            username: credentials.username,
            password: credentials.password,
            expiresInMins: 30, // optional, defaults to 60
        }),
        })
        .then(res => res.json())
        .then((data)=>{
            console.log(data)

            if(data.message=="Invalid credentials"){
                error.general = "Invalid credentials"
            }else{
                router.push("/")
            }

        });


    }

    function updateUsername(event){
        credentials.username = event.target.value
        if(!usernames.includes(credentials.username)){
            error.username = "Username not found"
        }
    }

</script>

<template>

  <div class="login-card">
        <div class="logo-circle">KGL</div>
        <h1>Welcome Back</h1>
        <p>Please enter your details to login</p>

        <form id="login-form" @submit.prevent="event=>login(event,'sales-agent')" >
            <div class="form-group">
                <label for="username">Username</label>
                <input 
                 :value="credentials.username"
                 @blur="updateUsername"
                 @focus="error.username=''"
                type="text" id="username" name="username" placeholder="Enter your username" required>
                <div v-if="error.username" style="color:red">{{ error.username }}</div>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input v-model="credentials.password" type="password" id="password" name="password" placeholder="••••••••">
                <div v-if="error.password" style="color:red">{{ error.password }}</div>
            </div>

            <button type="submit" id="login-btn" class="btn-login">Login to System</button>

            <div v-if="error.general" style="color:red">{{ error.general }}</div>
        </form>


        <div class="footer-links">
            <a href="#">Forgot Password?</a>
            <p style="margin-top: 15px; color: #999;">KGL Groceries POS v1.0</p>
        </div>
    </div>

</template>

<style scoped>   

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .login-card {
            background: var(--white);
            width: 100%;
            max-width: 400px;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .login-card h1 {
            color: var(--primary);
            margin-bottom: 5px;
            font-size: 1.8rem;
        }

        .login-card p {
            color: var(--text-muted);
            margin-bottom: 30px;
            font-size: 0.9rem;
        }

        .form-group {
            text-align: left;
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #444;
            font-size: 0.9rem;
        }

        input {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-sizing: border-box;
            font-size: 1rem;
            transition: border-color 0.3s;
        }

        input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.1);
        }

        .btn-login {
            width: 100%;
            padding: 12px;
            background-color: var(--primary);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            margin-top: 10px;
            transition: background 0.3s;
        }

        .btn-login:hover {
            background-color: var(--primary-dark);
        }

        .footer-links {
            margin-top: 20px;
            font-size: 0.85rem;
        }

        .footer-links a {
            color: var(--primary);
            text-decoration: none;
        }

        .footer-links a:hover {
            text-decoration: underline;
        }

        /* Shop Logo Placeholder */
        .logo-circle {
            width: 60px;
            height: 60px;
            background-color: var(--primary);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 1.5rem;
            font-weight: bold;
        }
</style>