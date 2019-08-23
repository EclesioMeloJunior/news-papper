import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

var firebaseConfig = {
	apiKey: "AIzaSyBg6JKNpahk_qSQk2RQN7khT4ie1g3gga0",
	authDomain: "newspapper-437c2.firebaseapp.com",
	databaseURL: "https://newspapper-437c2.firebaseio.com",
	projectId: "newspapper-437c2",
	storageBucket: "",
	messagingSenderId: "299772203483",
	appId: "1:299772203483:web:a8592ad8716508d1"
};

firebase.initializeApp(firebaseConfig);

if (process.env.NODE_ENV === "development") {
	firebase.functions().useFunctionsEmulator("http://localhost:5000");
}
export default firebase;
