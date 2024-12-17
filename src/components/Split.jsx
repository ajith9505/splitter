import { useState } from "react"

const Split = () => {
    //state for handle click on eack inner boxes
    const [click1, setClick1] = useState(false);
    const [click2, setClick2] = useState(false);
    const [click3, setClick3] = useState(false);
    const [click4, setClick4] = useState(false);

    return (
        <div id='split'>
            <div id="box-1" className='inner-box' onClick={() => setClick1(true)}>
                {/* split component called regressively when the box is clicked */}
                {click1 && <Split />}
            </div>
            <div id="box-2" className='inner-box' onClick={() => setClick2(true)}>
                {/* split component called regressively when the box is clicked */}
                {click2 && <Split />}
            </div>
            <div id="box-3" className='inner-box' onClick={() => setClick3(true)}>
                {/* split component called regressively when the box is clicked */}
                {click3 && <Split />}
            </div>
            <div id="box-4" className='inner-box' onClick={() => setClick4(true)}>
                {/* split component called regressively when the box is clicked */}
                {click4 && <Split />}
            </div>
        </div>
    )
}

export default Split