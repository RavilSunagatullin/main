
// object ================================================================================================
// type typeUser = {
//     name:string
//     age: number
// }
// type TypeAddress = {
//     city: string,
//     country:string
// }

// const user:typeUser = {
//     age: 24,
//     name: 'max'
// }
// const address:TypeAddress = {
//     city: 'string',
//     country:'string'
// }

// let common:typeUser, TypeAddress

// common =  {
//     ...user, ...address
// }

// array ======================================================================================================

// let array:string[]

// array = ['1', '2']

// const numbers:ReadonlyArray<number> = [0, 1, 2]

// type typeArray = [number, string, null]

// const newArray:typeArray = [1, '2', null]

// function ==============================================================================================================

// function getName(name:string):nameReturn{
//     return {name}
// }

// type nameReturn = {
//     name:string
// }
// type typeNameFunc = (name:string) => nameReturn

// const getNameTwo:typeNameFunc = (name)=> {
//     return {name}
// }

// class ========================================================================================================

// class car {
//     name: string
//     price: number

//     constructor(name:string, price:number){
//         this.name = name,
//         this.price = price
//     }

//     getInfo():string{
//         return `${this.name}: $${this.price}`
//     }
// }

// new car('bmw', 134242).getInfo()

// interface ========================================================================================================

// interface iUser extends iUserAge {
//     name:string,
//     email:string
// }
// interface iUserAge {
//     age:number
// }
// const user:iUser = {
//     email: '432',
//     name: 'pop',
//     age:32
// }

// enum ========================================================================================================
// enum EnumRoles{
//     admin = 0, user, guest
// }
// const enum EnumColors {
//     white, black, red
// }
// interface iUser {
//     role: EnumRoles,
//     color: EnumColors
// }
// const user:iUser = {
//     role: EnumRoles.admin,
//     color: EnumColors.black
// }
// generic ========================================================================================================
// function entity <T>(args:T){
//     return args
// }
// entity<Number>(2)

// class chanel<T>{
//     private name: T

//     constructor(name: T) {
//         this.name = name
//     }
//     getName():T {
//         return this.name
//     }
// }
// new chanel<string>('yuy')
// new chanel<number>(2)

// type typeLength = {
//     length: number
// }

// function log<T extends typeLength>(entity: T):number {
//     return entity.length
// }

// log('sfd')
// log([2, 2,33])
// ===============================================================================================================
// interface iCar {
//     id: number,
//     name:string,
//     price:number,
//     yearBuild: number
// }
// interface iCarCreate extends Omit<iCar , 'id'>{ }
// interface iCarId extends Pick<iCar , 'id'>{ }
// interface iCarOption extends Partial<iCar>{ }
// interface iCarReadOnly extends Readonly<iCar>{ }
// type iCarRecord = Record<'name' | 'price', string | number>

// type Any = Extract<'max' | 'bob', 'bob'| 'don'>

// ========================================================================================================================================================================
