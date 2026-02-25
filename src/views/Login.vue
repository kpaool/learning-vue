<script setup>

    import { reactive, ref } from 'vue';

    const credentials = reactive({
        username:"abraham",
        password:"password"
    })

    const volume =  ref(0)

</script>

<template>

  <div class="login-card">
        <div class="logo-circle">KGL</div>
        <h1>Welcome Back</h1>
        <p>Please enter your details to login</p>

        <form id="login-form">
            <div class="form-group">
                <label for="username">Username</label>
                <input v-model="credentials.username" type="text" id="username" name="username" placeholder="Enter your username" required>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input v-model="credentials.password" type="password" id="password" name="password" placeholder="••••••••" required>
            </div>

                <input type="range" max="100"  min="0" v-model="volume" >

                <span>The current volume is {{ volume }}</span>

            <button type="submit" id="login-btn" class="btn-login">Login to System</button>
        </form>

        <div>
            <div>{{ credentials.username }}</div>
            <div>{{ credentials.password }}</div>
        </div>

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