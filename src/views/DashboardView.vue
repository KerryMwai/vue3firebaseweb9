<template>
    <div id="dashboard">
        <h4 class="">All Employees</h4>
        <div v-if="employees.length">
            <table>
                <thead>
                <tr>
                    <th>ID#</th>
                    <th>Name</th>
                    <th>Company Name</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                    
                        <tr v-for="employee in employees" :key="employee.id">
                            <td class="chip">{{employee.employee_id}}</td>
                            <td>{{employee.name}}</td>
                            <td>{{employee.company}}</td>
                            <td>{{employee.position}}</td>
                            <td>
                                <router-link class="secondary-content btn" :to="{name:'ViewEmployee', params:{id:employee.employee_id}}">
                                        View
                                </router-link>
                                <button class="btn red ml-2" @click="deleteEmployee(employee.employee_id)">Delete</button>
                            </td>
                        </tr>
                </tbody>

            </table>
        </div>
        <div v-else-if="employees.length==0" class="card-panel teal">
            <h4>There is no data</h4>
        </div>
        <div v-else>
            <h1 class="green">Loading data...</h1>
        </div>
        
      <!-- <button @click="logEmployees"></button> -->
        <div class="fixed-action-btn">
            <router-link to="/new-employee" class="btn-floating btn-large red">
                <i class="fa fa-plus"></i>
            </router-link>
        </div>
    </div>
</template>
<script>

import db from '../firebasedb/firebaseInit'
import { collection, getDocs, orderBy,query, deleteDoc, doc, where, getDoc } from "firebase/firestore"; 

export default {
    name:'Dashboard',

    data(){
        return{
            employees:[]
        }
    },
     created(){
        this.getEmployees()
        // this.setEmployees()
    },
    methods:{
        getEmployees(){
            
            const q = query(collection(db, "employees"), orderBy("emp_id"));
            const querySnapshot =  getDocs(q);
            
            querySnapshot.then(doc=>{
                doc.forEach(user=>{
                    const userdetails={
                        "id":user.id,
                        "employee_id":user.data().emp_id,
                        "name":user.data().name,
                        "company":user.data().company,
                        "position":user.data().position
                    }
                    this.employees.push(userdetails)
                    
                })
            })
        },

        deleteEmployee(id){
         const q = query(collection(db, "employees"), where("emp_id","==",id));
         const querySnapshot =  getDocs(q);
         querySnapshot.then(item=>{
                item.forEach(user=>{
                    
                    if(confirm("Are sure to delete ?")){
                        
                        deleteDoc(doc(db,"employees", user.id))
                    }          
                })
            })
            
        }
        
    }
}
</script>
