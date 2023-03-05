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


function ProSize(props){
  function optionSize(){
    // const sizes = window.data.allSize;
    // console.log(size)
   return props.sizes.map((item, index)=>{
      return (<option value={item} key={index}>{item}</option>)
    })
  }
  

function onSizeChange(event){
  // console.log(event.target.value)
  props.hSizeChange(event.target.value)
}
  return(
    <>
    <p className="filed">
    <label htmlFor="size">size:</label>
    <select 
    defaultValue={props.size}
    onChange={onSizeChange}
    id="size">

      {/* <option value="">값</option> */}
      {optionSize()}
    </select>
    </p>
    </>
  )
}


function ProColor(props){
  // 반복문 
  function optionColor(){
    // const colors=window.data.allColor;
    // console.log(colors)
    return props.colors.map((item,index)=>{
      return (<option value={item} key={index}>{item}</option>)
    })
  }
  
  function onColorChange(event){
    props.hColorChange(event.target.value)
  }

  return(
    <>
    <p className="filed">
    <label htmlFor="color">color:</label>
    <select 
    defaultValue={props.color}
    onChange={onColorChange}
    id="color">
      {/* <option value="">값</option> */}
      {optionColor()}
    </select>

    </p>
    </>
  )
}




function App(){


  const [size,setSize] = React.useState('10');
  const [color,setColor] = React.useState('blue');
  
  const [sizes,setSizes] = React.useState(window.data.allSize);
  const [colors,setColors] = React.useState(window.data.allColor);


  function hSizeChange(selectSize){
    let ableColors= window.data.bySize[selectSize]
    setColors(ableColors)
    setSize(selectSize)
  }




  function hColorChange(selectColor){
    let ableSizes =window.data.byColor[selectColor]
    setSizes(ableSizes);
    setColor(selectColor);
  }
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
          hSizeChange={hSizeChange}
/>
        <ProColor
                  size={size}
                  sizes={sizes}
                  color={color}
                  colors={colors}
                  hColorChange ={hColorChange}

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