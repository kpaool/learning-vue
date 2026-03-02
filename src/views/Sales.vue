<script setup>

    import { reactive, ref, onMounted, computed, compile, watch, watchEffect } from "vue"
    import SalesTableRow from "../components/SalesTableRow.vue"
    import StatsCard from "@/components/ui/StatsCard.vue"
    const sales = ref([])
    const isLoading = ref(true)


    const permissions = reactive([
        {userRole:"sales-agent",actions:["create:sale","update:sale","delete:sale"]},
        {userRole:"manager",actions:["update:sale","delete:sale"]}    
    ])

    const totalSales = computed(()=>{
        return sales.value.reduce((total,sale)=>total+sale.balance,0)
    })

    const customerToCall = computed(()=>{
        sales.value.sort((a,b)=>b.balance-a.balance)
        return sales.value[0]?.customer ?? "No customer to call"
    })

    onMounted(()=>{
        let _data = [
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
        ]
        
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            sales.value = _data
            isLoading.value=false
        });
        
    })

    watch(customerToCall,(newValue,oldValue)=>{
        //implement your logic for watchng
        console.log(newValue,oldValue)
        // alert(`Customer to call has changed from ${oldValue} to ${newValue}`)
    })

    watchEffect(()=>{
        //implement your logic for watchng
        console.log(customerToCall.value,"is with watch effect")
    })

    const props = defineProps({
        userRole:{
            type: String,
            default:'guest'
        },
    })

    const userRole = ref(props.userRole)

    // setTimeout(()=>{
    //     userRole.value = "manager"
    // },5000)

    const deleteSale = (data)=>{
        console.log(data)
        sales.value = sales.value.filter(sale=>sale.id !== data.id)
        alert(`Sales id ${data.id} has been deleted`)
    }

    const updateSale = (data)=>{
        console.log(data)
        alert(`Sales id ${data.id} has been updated`)
    }

</script>

<template>

    <div class="loading" v-if="isLoading">
        <div>
            Loading data from the server...
        </div>
    </div>

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
        <div v-if="permissions.find(p=>p.userRole===userRole).actions.includes('create:sale')">
            <a href="addsale.html" class="addsale-btn">Add Sale</a>
        </div>
        <div v-else>
            You need to be a sales agent to add a sale
        </div>

        <!-- <div>
            <a href="addsale.html" class="addsale-btn user-indicator-yes" :class="{'user-indicator-no':userRole==='manager'}">Add Sale</a>
        </div> -->

        <div class="stats-grid">
            <StatsCard title="Total Cash Sales" description="UGX 4,500,000" />
            <StatsCard title="Total Credit Sales" description="UGX 820,000" />
            <StatsCard title="Customer to Call" :description="customerToCall" />
        </div>


        <!-- <div>
            <p>Customer to call: {{ customerToCall }}</p>
        </div> -->

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
                        <th>Actions</th>
                    </tr>
                    <SalesTableRow 
                    v-for="(sale,index) in sales" 
                    :key="sale.id" 
                    :sale="sale" 
                    :index="index"
                    @delete-sale="deleteSale"
                    @update-sale="updateSale"
                     />
                    <tr>
                        <td colspan="4">Balances</td>
                        <td colspan="2"><strong>{{ totalSales }}</strong></td>
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

    .loading{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        color: white;
        font-size: 40px;
        font-weight: bold;
    }

    .user-indicator-yes{
        background-color: green;
    }

    .green{
        background-color: green;
    }

    .red{
        background-color: red;
    }

    .user-indicator-no{
        background-color: red;
        display: none;
    }
</style>