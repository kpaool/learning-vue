

<template>

    <header>
        <nav class="top-nav">
            <div class="user-info">
                <span>Logged in as: <strong id="fullName">Alex Mwangi</strong></span>
                <span class="role-badge" id="userRole">Sales Agent</span>
            </div>
            <a href="login.html" class="logout-btn">Logout</a>

            <div id="nav-links">
                <a href="sales.html">Sales Dashboard</a>
                <a href="manager.html">Manager Dashboard</a>
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