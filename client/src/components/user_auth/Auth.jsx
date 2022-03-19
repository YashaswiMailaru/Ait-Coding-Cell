import React, { useEffect, useState } from "react";
import firebaseConfig from "./Config";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    const [profile, setProfile] = useState(null);

    const fetchProfile = async (user) => {
      await firebaseConfig.firestore().collection("users").doc(user.uid).get().then((item) => {
        setProfile(item.data());
      });
      setLoading(false);
    }
    
    useEffect(() => {
        firebaseConfig.auth().onAuthStateChanged((user) => {
          setCurrentUser(user);
          if(user){
            fetchProfile(user);   
          }
          else{
            setLoading(false);
          }
        });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    
    return (
        <AuthContext.Provider value={{ currentUser, profile }}>
          {children}
        </AuthContext.Provider>
    );

};