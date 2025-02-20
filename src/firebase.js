


import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBasi7LzwtT-Jh5ng8OkmVcmiUZy8nFLTA",
  authDomain: "streamflix-app-clone-ed7a2.firebaseapp.com",
  projectId: "streamflix-app-clone-ed7a2",
  storageBucket: "streamflix-app-clone-ed7a2.firebasestorage.app",
  messagingSenderId: "833461711472",
  appId: "1:833461711472:web:b7004d7a39e90272a67ab5"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
        try{
        const res = await createUserWithEmailAndPassword(auth,  email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid : user.uid,
            name,
            authProvider: "local",
            email,

        });
        }
        catch(error){
            console.log(error);
            toast.error(error.code.split('/')[1].split('-').join(" "));
        }
}


const login = async (email, password )=>{
    try{
     await signInWithEmailAndPassword(auth, email, password);
    }
    catch(error){
     console.log(error);
     toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}


const logout = ()=>{
    signOut(auth);
}


export {auth, db, signup, login, logout};