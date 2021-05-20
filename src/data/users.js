import fb from '../config/firebase'

export const findUserByEmail = (email) => {
  const db = fb.firestore()
  return new Promise((resolve, reject) => {
    db.collection("users")
      .where("email", "==", email)
      .limit(1)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          resolve(null)
          return
        }

        querySnapshot.forEach(doc => {
          resolve(doc.data())
        })
      })
      .catch(e => { reject (e) })
    })
}

export const addUser = (user) => {
  const userObj = {
    address: user.address,
    displayName: user.displayName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    photoURL: user.photoURL,
    providerId: user.providerId,
    uid: user.uid,
  }
  const db = fb.firestore()
  if (user.uid) {
    return new Promise((resolve, reject) => { 
      db.collection("users")
        .doc(user.uid)
        .set(userObj, { merge: true })
        .then(docRef => {
          resolve(docRef)
        })
        .catch(e => reject(e))
    })

  } else {
    return new Promise((resolve, reject) => { 
      db.collection("users")
        .add(userObj, { merge: true }) 
        .then(docRef => {
          resolve(docRef)
        })
        .catch(e => reject(e))
    })
    
  } 
}