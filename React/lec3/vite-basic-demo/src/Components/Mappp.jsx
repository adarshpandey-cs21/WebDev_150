
function Mappp() {
    let arr=[1,2,4,6,7];
  return (
    <div>
        <h3>Array</h3>
        {arr.map((el,idx)=>{
            return <h2 >{el}</h2>
        })}
    </div>
  )
}

export default Mappp;