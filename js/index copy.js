(function(){
// 작업
// color 
function ProImg(props){
  return(
    <>
    <img src={`../images/${props.color}.jpg`} 
    alt="상세이미지" />
    </>
  )
}


function ProSize(){
  function optionSize(){
    const size = window.data.allSize;
    // console.log(size)
   return size.map((item, index)=>{
      return (<option value={item} key={index}>{item}</option>)
    })
  }
  

  return(
    <>
    <p className="filed">
    <label htmlFor="size">size:</label>
    <select 
      // defaultValue={props.size}
      // onChange={onSizeChange}
    id="size">

      {/* <option value="">값</option> */}
      {optionSize()}
    </select>
    </p>
    </>
  )
}


function ProColor(){
  // 반복문 
  function optionColor(){
    const colors=window.data.allColor;
    // console.log(colors)
    return colors.map((item,index)=>{
      return (<option value={item} key={index}>{item}</option>)
    })
  }

  return(
    <>
    <p className="filed">
    <label htmlFor="color">color:</label>
    <select 
    // defaultValue={props.color}
    // onChange={onColorChange}
    id="color">
      {/* <option value="">값</option> */}
      {optionColor()}
    </select>

    </p>
    </>
  )
}




function App(){

  const [color,setColor]=React.useState("green");
  const [size,setSize]=React.useState("10");
  const [colors,setColors]=React.useState();
  const [sizes,setSizes]=React.useState();


  return(
    <div className="custom">
      <div className="pic">
        <ProImg
        color={color} 
        />
      </div>
      <div className="selector">
        <ProSize
        size={size}
        sizes={sizes}
        color={color}
        colors={colors}
        />
        <ProColor
        size={size}
        sizes={sizes}
        color={color}
        colors={colors}        
        />
      </div>
      </div>
  )
}






// export 
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
)

})()