<script setup>

    import { reactive, ref } from "vue"

    const sales = reactive([
        {
            id:3234,
            customer:"Aksanti",
            items:"Maize",
            dueDate:new Date().toISOString().split("T")[0],
            balance:0,
            status:"Partial"
        },
        {
            id:23455,
            customer:"Baharawe",
            items:"Milk",
            dueDate:new Date("2026-01-17").toISOString().split("T")[0],
            balance:5000,
            status:"Partial"
        },
        {
            id:234325,
            customer:"Baraka",
            items:"Cassava",
            dueDate:new Date().toISOString().split("T")[0],
            balance:1000,
            status:"Paid"
        }
    ])

    const permissions = reactive([
        {userRole:"sales-agent",actions:["create:sale","update:sale","delete:sale"]},
        {userRole:"manager",actions:["update:sale","delete:sale"]}    
    ])

    const userRole = ref("sales-agent")

    // setTimeout(()=>{
    //     userRole.value = "manager"
    // },5000)

</script>

<template>
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

    <div class="container">
        <header>
            <h1>KGL Groceries Dashboard</h1>
            <p style="color: #666;">Sales Overview - January 23, 2026</p>
        </header>
        <!-- <div v-if="permissions.find(p=>p.userRole===userRole).actions.includes('create:sale')">
            <a href="addsale.html" class="addsale-btn">Add Sale</a>
        </div>
        <div v-else>
            You need to be a sales agent to add a sale
        </div> -->

        <div>
            <a href="addsale.html" class="addsale-btn user-indicator-yes" :class="{'user-indicator-no':userRole==='manager'}">Add Sale</a>
        </div>

        <div class="stats-grid">
            <div class="card">
                <h3>Total Cash Sales</h3>
                <span class="amount" id="totalSales">UGX 4,500,000</span>
            </div>
            <div class="card credit">
                <h3>Total Credit Sales</h3>
                <span class="amount" id="totalCreditSales">UGX 820,000</span>
            </div>
            <div class="card" style="border-left-color: var(--secondary);">
                <h3>Pending Collections</h3>
                <span class="amount" id="pendingSales">12 Orders</span>
            </div>
        </div>

        <div class="table-container">
            <h2>Recent Credit Transactions</h2>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Customer</th>
                        <th>Items</th>
                        <th>Due Date</th>
                        <th>Balance</th>
                        <th>Status</th>
                    </tr>
                     <tr v-for="(sale,index) in sales" :key="sale.id">
                        <td>{{index + 1}}</td>
                        <td>{{sale.customer}}</td>
                        <td>{{sale.items}}</td>
                        <td>{{sale.dueDate}}</td>
                        <td><strong>{{ sale.balance }}</strong></td>
                        <td><span class="status-badge partial">{{sale.status}}</span></td>
                    </tr>
                    <tr>
                        <td colspan="4">Balances</td>
                        <td colspan="2"><strong>{{ sales.reduce((total,sale) => total + sale.balance,0).toLocaleString() }}</strong></td>
                    </tr>
                </thead>
                <tbody id="data-table">

                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
    /* .addsale-btn{
        background-color:red
    } */

    .user-indicator-yes{
        background-color: green;
    }

    .user-indicator-no{
        background-color: red;
        display: none;
    }
</style>