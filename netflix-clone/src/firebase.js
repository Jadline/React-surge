
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC-VM0WhRzqGQc7HVdEImYSzcBH_3OUfKw",
  authDomain: "netflix-clone-c4d93.firebaseapp.com",
  projectId: "netflix-clone-c4d93",
  storageBucket: "netflix-clone-c4d93.firebasestorage.app",
  messagingSenderId: "575840823113",
  appId: "1:575840823113:web:b6376d64b251b7c5c49c98",
  measurementId: "G-98SMXPKLN6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

async function signup(name,email,password){
    try{
        const response = await createUserWithEmailAndPassword(auth,email,password)
        const user = response.user;
        await addDoc(collection(db,'user'),{
            uid: user.uid,
            name,
            authProvider : 'local',
            email
        })
    }
    catch(error){
        console.log(error)
        alert(error)

    }

}
async function login(email,password){
    try{
        await signInWithEmailAndPassword(auth,email,password)

    }
    catch(error){
        console.log(error)
        alert(error)

    }
}
function logout(){
    signOut(auth);

}
export {auth,db,login,signup,logout}