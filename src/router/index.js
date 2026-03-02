import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../views/Login.vue"
import SalesComponent from "../views/Sales.vue"
import SaleComponent from "../views/Sale.vue"
import ProcurementComponent from "../views/Procurement.vue"
import DashboardLayout from "../layout/Dashboard.vue"

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:"/login",
            name:"login",
            component:LoginView,
        },
        {
            path:"/",
            name:'dashboard',
            component:DashboardLayout,
            children:[
                {
                    path:"/",
                    name:"sales",
                    component:SalesComponent,
                },
                {
                    path:"/sale/:id",
                    name:"sale",
                    component:SaleComponent,
                },
                {
                    path:"/procurement",
                    name:"procurement",
                    component:ProcurementComponent,
                }
            ]
        },
        
    ]
})

export default router