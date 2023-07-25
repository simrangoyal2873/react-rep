// import React,{useState} from 'react'




// export default function Textform(props) {

//     const handleuperecase =()=>{
//       const newtext= text.toUpperCase();
//       setext(newtext);
//     }
//     const handleonchange=(event)=>{
//      setext(event.target.value);
//     }
//     const textclear=()=>{
//         const newtt= " ";
//         setext(newtt);
//     }

//     const [text, setext] = useState("enter the text");

//   return (
//     <>
//     <h1  classname= "hary" style={{color: props.mode==='dark?'white':'dark'}}>{props.heading}</h1>
//  <div>
//       <label htmlfor="exampleDataList" classNAME="form-label">Enter text here</label>
// <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." value={text} onChange={handleonchange} style={{background: props.mode==='dark'?'grey':'dark'}}  />
  

//     <button onClick={handleuperecase} > convert to uppercase</button>
//     <button className={"ni mx-2"} onClick={textclear}>clear text</button>
//     {/* <button  onClick={changemode}>apply dark mode</button> */}
//     <h1>your summary</h1>
//     <br/>

//     {text.split(" ").length} words and {text.length} character
//     { 0.008 * text.length}time required to read
//    <div>
//     <h1 className= "ftestt" style={{color: props.mode==='dark'?'dark':'white'}}>preview</h1>
//     <p className= "ftestt" style={{color: props.mode==='white'?'dark':'white'}} >{text}</p>
//    </div>


//     </>
//   )

// }
