"use client";
export default function Challenge({params}){
  console.log(params)
  return(
    <div>
      <h1>Challenge details</h1>
      {/* <h3>Name: {params.challenge}</h3> */}
      <h3>Name: {params.challenge.replaceAll("%20", " ")}</h3>
    </div>
  )
}
