import fb from '../config/firebase'

const db = fb.firestore()

export const findUserByEmail = (email) => {
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
          let user = doc.data()
          user.uid = doc.id
          resolve(user)
        })
      })
      .catch(e => { reject (e) })
    })
}

export const updateUser = (user) => {
  const userObj = {}
  Object.keys(user).forEach(key => {
    userObj[key] = user[key]
  })

  return new Promise((resolve, reject) => {
    db.collection("users")
    .doc(user.uid)
    .set(userObj, { merge: true })
    .then(docRef => {
      resolve(docRef)
    })
    .catch(e => reject(e))
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
        .add(userObj) 
        .then(docRef => {
          resolve(docRef)
        })
        .catch(e => reject(e))
    })
    
  } 
}