export type Users = {
  firstName: string | null,
  lastName: string,
  email: string | null,
  password: string | null,
  confirmPassword: string,
  gender: string,
  age: number,
  phoneNumber: string,
  address: {
    street: string,
    city: string,
    state: string,
    zipCode: number
  }
}