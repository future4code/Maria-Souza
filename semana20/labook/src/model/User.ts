export type authenticationData = {
  id: string
}

export type userCredentials ={
  email: string
  password: string
}

export interface user extends authenticationData, userCredentials{
  name:string
}

