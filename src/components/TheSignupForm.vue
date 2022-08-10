<template>
           <form @submit.prevent="handlerSubmit">
          <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="text-white px-6 py-8 rounded shadow-md  w-full">
                    <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        class="block border border-grey-light text-black w-full p-3 rounded mb-4"
                        v-model="name"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full text-black p-3 rounded mb-4"
                        name="email"
                        v-model="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light text-black w-full p-3 rounded mb-4"
                        name="password"
                        v-model="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                    
                        class="block border border-grey-light  text-black w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        class="w-full text-center py-3 hover:bg-black hover:text-white  bg-white rounded bg-green text-black h focus:outline-none my-1"
                    >Create Account</button>

                    <div class="text-center text-sm text-white mt-4">
                        By signing up, you agree to the 
                        <a class="no-underline border-b text-white text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a class="no-underline border-b text-white text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
            </form>
</template>
<script>
import { ref} from 'vue'
import axios from 'axios'
import {  useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
        const name = ref('');
           const email = ref('');
              const password = ref('');

      const handlerSubmit = async  ()=>{
        console.log("request enter in handler");
        try{
                const data = {
                   name:name.value,
                   email:email.value,
                   password:password.value 
                } 
                 
                const res = await axios.post('http://localhost:3000/v1/signup',data)
                console.log(res);
                router.push('/login');
                       
        }
        catch{
                  console.log("Error in SignUp Form");      
                           }
      }
  
    return {
          name,
          email,
          password,
          handlerSubmit
      
    }
  }
}
</script>
