import * as jose from 'jose'
import { handlerAxios } from './fetcher'

type User = {
  apple_id: string
  email: string
  token: string
}

const verify = (url: string, data: User, callback: Function) => {
  // we extract the JWT
  const { token } = data
  // we configure jose
  const {
    JWKS,  // JSON Web Key Set (JWKS)
    JWT,   // JSON Web Token (JWT)
    errors // errors utilized by jose
  } = jose
  // we request the public keys from apple
  handlerAxios({
    method: 'post',
    url,
    data,
  })
    .then((req: any) => {
      console.log(req);
/* 
      const key = jose.JWKS.asKeyStore(body)
      try {
        // jose works it's magic and verifies the token
        // side-note: at this point, you can check the user's email here if it's the same one from verified, for an extra layer of security
        const verified = jose.JWT.verify(token, key)
        if (verified) {
          callback()
        }
      } catch (e) {
        callback(e)
      }
       */
    })
    .catch((err: any) => { callback(err) })
}

export { verify }