<template>
  <div class="mt-4">
    <div class="row">
    <form class="col s9" @submit.prevent="addEmployee">
      <div class="row">
        <div class="input-field col s6">
          <input id="icon_prefix" type="text" class="validate" v-model="employeeInfor.emp_id">
          <label for="icon_prefix">Your Id</label>
        </div>
        <div class="input-field col s6">
          <input id="icon_telephone" type="text" class="validate" v-model="employeeInfor.name">
          <label for="icon_telephone">Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="icon_prefix" type="text" class="validate" v-model="employeeInfor.position">
          <label for="icon_prefix">Position</label>
        </div>
        <div class="input-field col s6">
          <input id="icon_telephone" type="text" class="validate" v-model="employeeInfor.company">
          <label for="icon_telephone">Company</label>
        </div>
      </div>
      <div class="row">
        <div class="col s3">
          <button class="btn green">Add Employee</button>
        </div>
      </div>
    </form>
  </div>
  </div>
</template>
<script>
import db from '../firebasedb/firebaseInit'
import { collection, setDoc,doc } from "firebase/firestore"; 

export default ({
  name:'AddEmployee',
  data(){
    return{
      employeeInfor:{
        emp_id:null,
        name:null,
        position:null,
        company:null
      }
    }
  },
  methods:{
     addEmployee(){
            const employeesRef = collection(db, "employees");
             setDoc(doc(employeesRef), this.employeeInfor);
             this.$router.push("/")
            
        },
  }
})
</script>


