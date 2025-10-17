import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, User } from 'firebase/auth';
import { getDatabase } from "firebase/database";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import firebaseConfig from './firebaseConfig';


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db= getDatabase(app);
const firestore = getFirestore(app);
export { app, auth, db, firestore };


  export const deslogar = async (): Promise<void> => {
    try {
      await signOut(auth);
      console.log("Usuário deslogado com sucesso!");
    } catch (error: any) {
      console.error("Erro ao deslogar:", error.message);
    }
  }

export async function signInComContaGoogle() : Promise <User>{
  try{
  const provider = new GoogleAuthProvider();

  const result = await signInWithPopup(auth, provider);
  
    return result.user
  }catch(error:any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    throw error;
  }
}

export async function signInComEmail(email: string, senha: string): Promise<User> {
  try {

   const userCredential= await signInWithEmailAndPassword(auth, email, senha);
    console.log('Usuário autenticado com sucesso:', userCredential.user);
    return userCredential.user;
  } catch (error: any) {
    console.error(error.code);
    console.error(error.message)
    throw error;
  }
}

export async function cadastroUsuario(
  email: string, 
  senha: string,
  nome: string,
  cpf: string,
  telefone: string,
  dataNascimento: string
): Promise<User | void> {
  try {
    
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
    const user = userCredential.user;

    // Salvar dados adicionais no Firestore
    await setDoc(doc(firestore, 'users', user.uid), {
      nome,
      cpf,
      telefone,
      email,
      dataNascimento,
      criadoEm: new Date().toISOString(),
    });

    console.log('Usuário cadastrado com sucesso!');
    return user;
  } catch (error: any) {
    console.error(error.code);
    console.error(error.message);
    throw error;
  }
}