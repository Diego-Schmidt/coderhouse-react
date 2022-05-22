import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, addDoc, query, where, collection, getDocs, Timestamp  } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCjNJ8byRcdPzjX4KgoNdjuo7LYCpTWPQQ",
  authDomain: "habemus-react.firebaseapp.com",
  projectId: "habemus-react",
  storageBucket: "habemus-react.appspot.com",
  messagingSenderId: "555680038106",
  appId: "1:555680038106:web:951ea67c9e7d317a6eb9e3"
};


const app = initializeApp(firebaseConfig);
const fireStoreDb = getFirestore(app);

export default fireStoreDb;

// Obtengo todos los items de la DB

export async function getAllItems() {
    const miColec = collection(fireStoreDb,'items');
    const itemsSnapshot = await getDocs(miColec);

    return itemsSnapshot.docs.map(doc => {
        return {
        ...doc.data(),
        id: doc.id
        }
})};

export async function getItemsByCategory(categoryid){
    const miColec = collection(fireStoreDb,'items');
    const queryItem = query(miColec, where("category", '==', categoryid));
    const itemSnapshot = await getDocs(queryItem);

    return itemSnapshot.docs.map(doc => {
        return {
        ...doc.data(),
        id: doc.id
        }
    
})};

export async function getItem(id){
    const miColec = collection(fireStoreDb,'items');
    const itemRef = doc(miColec, id);
    const itemSnapshot = await getDoc(itemRef);

    
        return {
        ...itemSnapshot.data(),
        id: itemSnapshot.id
        }
    
};

export async function createBuyOrder(orderData){
    const buyTimeStamp = Timestamp.now();
    const orderWithDate = {
        ...orderData,
        date: buyTimeStamp
    };
    const miColec = collection(fireStoreDb,'buyOrders');
    const orderDoc = await addDoc(miColec, orderWithDate);
    console.log("Orden lista con el id ",orderDoc.id);
    return orderDoc.id;   
}