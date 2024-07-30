const Card =(props)=>
{
    return(
        <div style={{backgroundColor:props.bg}} className="px-10 py-5 border rounded-md flex-grow">
          <h1>{props.title}</h1>
          <p>{props.subtitle}</p>
        </div>
    )
}
export default Card