<template>
  <ul class="collection with-header">
    <li class="collection-header"><h4>{{name}}</h4></li>
    <li class="collection-item">Employee ID#: <b>{{employee_id}}</b></li>
    <li class="collection-item">Position#: {{position}}</li>
    <li class="collection-item">Company#: {{company}}</li>
  </ul>
  <router-link to="/" class="btn grey">Back</router-link>
</template>

<script>
import db from '../firebasedb/firebaseInit'
import {query,collection, where, getDocs,getDoc, deleteDoc, doc} from 'firebase/firestore'
export default {
  name:'VeiwEmployee',
  data(){
    return{
      employee_id:null,
      name:null,
      position:null,
      company:null,
      employee_doc_id:null
    }
  },
    beforeRouteEnter(to, from, next){
        const q = query(collection(db, "employees"), where("emp_id", "==", to.params.id));
        const querySnapshot =  getDocs(q);
        querySnapshot.then(item=>item.docs.forEach(emp=>{
          next(vm=>{
            vm.employee_id=emp.data().emp_id
            vm.name=emp.data().name
            vm.position=emp.data().position
            vm.company=emp.data().company
          })
        }))
    },
    watch:{
      '$route':'fetchData'
    },
    methods:{
      fetchData(){
        const q = query(collection(db, "employees"), where("emp_id", "==", this.$route.params.id));
        const querySnapshot =  getDocs(q);
        
        querySnapshot.then(item=>item.docs.forEach(emp=>{
          this.employee_id=emp.data().emp_id
          this.name=emp.data().name 
          this.position=emp.data().position
          this.company=emp.data().company
        }))
      },
    }
}
</script>
