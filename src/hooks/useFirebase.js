import axios from "axios";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication()
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const GoogleLogin = (navigate, redirectUrl) => {
    setAuthLoading(true);
    signInWithPopup(auth, googleProvider)
      .then(() => {
        setAuthError(false);
        navigate(redirectUrl);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(setAuthLoading(false));
  };
  const loginWithEmail = (email, password, navigate, url) => {
    setAuthLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setAuthError(null);
        navigate(url);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setAuthLoading(false));
  };
  const registerWithEmail = (email, password, name, navigate, url) => {
    setAuthLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then((result) => {
            axios
              .post("http://localhost:5000/saveusers", {
                email,
                name,
                role: "user",
              })
              .then((result) => {
                if (result.data.acknowledged) {
                  setAuthError(null);
                  navigate(url);
                  console.log(result);
                }
              })
              .catch((error) => {
                console.log(error);
                setAuthError(error.message);
              });
          })
          .catch((error) => {
            console.log(error);
            setAuthError(error.message);
          });
      })
      .catch((error) => setAuthError(error.message))
      .finally(() => setAuthLoading(false));
  };
  const Logout = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser({});
      }
      setAuthLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);
  useEffect(() => {
    fetch(`http://localhost:5000/getadmin/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, [user, authLoading]);
  return {
    user,
    Logout,
    authLoading,
    GoogleLogin,
    authError,
    admin,
    loginWithEmail,
    registerWithEmail,
  };
};
export default useFirebase;
