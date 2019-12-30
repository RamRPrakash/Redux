export const increment =(a)=>{
return {
  type : 'INCREMENT' ,
  payload : a
}
}
export const decrement =()=>{
  return {
    type : 'DECREMENT'
  }
  }