import React from "react";
import Icons from "../../../components/layout/icons";
import { sectionOne } from "../style";

const Converter = () => {
    const [size, setSize] = React.useState(16)
    const [rem, setRem] = React.useState(null)
    const [pixel, setPixel] = React.useState(null)
    const remValue = React.useRef(null)
    const pixelValue = React.useRef(null)
    const rootSize = React.useRef(null)

    React.useEffect(() => {
        rootSize.current.oninput = event => {
            let rootSizeValue = event.target.value.slice(0, 2)
            setSize(rootSizeValue)
            pixelValue.current.value = (remValue.current.value === "" ? "" : remValue.current.value * rootSizeValue) 

        }
        pixelValue.current.oninput = event => {
            let r = parseFloat ((event.target.value / size).toFixed(3) )
            if (!isNaN(event.target.value) && !(event.target.value === null)){
                setPixel (event.target.value )
                remValue.current.value = (pixelValue.current.value ==="" ? "" : parseFloat(r))
            }

        }
        remValue.current.oninput = event => {
            let p = event.target.value * size
            if (!isNaN(event.target.value) && !(event.target.value === null)){
                setRem(event.target.value)
                pixelValue.current.value = (remValue.current.value ==="" ? "" : parseFloat(p))    
            }
      
        }
    
},[size,rem,pixel])
    return (
        <section css={sectionOne}>
            <div className="contain">
                <h1>px to rem</h1>
                <div>
                    <Inputfield ref={pixelValue} defaultValue={null} name={"px"} className={"input"} type="number"/>
                    <div>
                        <Icons
                            icon={"arrow-left-right"}
                            size= {25}
                        />
                    </div>
                    <Inputfield ref={remValue} defaultValue={null} name={"rem"} className={"input"} type="number"/>
                </div>
                <p>Calculation based on a root font-size
            <ToastTop text={"add two number"}/>
            <input type="text" ref={rootSize} defaultValue={size}  inputmode="numeric" maxLength={2}/>
            <Icons
                icon={"pencil-square"}
                size={13}
            />
            of pixel.
            </p>
            </div>
            <ScrollAnimate/>
        </section>
    )
}

export default Converter

export const Inputfield = React.forwardRef ((props, ref) => {
    return (
        <div className={props.className}>
            <input ref={ref} defaultValue={props.defaultValue} type={props.type}/>
            <span>{props.name}</span> 
        </div>
    )
}
)
export const ToastTop = ({active, text}) => {
    return <span className={active}>{text}</span>
}

export const ScrollAnimate = () => {
    return (
        <div>
            <span>scroll</span>
        </div>
    )
} 