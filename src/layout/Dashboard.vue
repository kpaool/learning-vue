<script setup>
     import { useUserStore } from '@/stores/userStore'
     import { onMounted } from 'vue';
     import { useRouter } from 'vue-router';

     const user = useUserStore()
     const router = useRouter()

     onMounted(()=>{
        if(!user.user.token){
            router.push("/login")
        }
     })



</script>

<template>

    <header>
        <nav class="top-nav">
            <div class="user-info">
                <span>Logged in as: <strong id="fullName">{{user.user.username}}</strong></span>
                <span class="role-badge" id="userRole">{{user.user.role}}</span>
            </div>
            <a href="login.html" class="logout-btn">Logout</a>

            <div id="nav-links">
                <RouterLink to="/">Sales Dashboard</RouterLink>
                <RouterLink to="/procurement">Procurement Dashboard</RouterLink>
                <RouterLink to="/products">Products</RouterLink>
            </div>
        </nav>
    </header>

    <nav></nav>

    <main>
        <RouterView/> 
    </main>

    <footer>
        <p>Copyright &copy; 2026 KGL Groceries POS</p>
    </footer>

</template>