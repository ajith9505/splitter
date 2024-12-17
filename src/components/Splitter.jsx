import React, { useState } from 'react'
import Split from './Split'

const Splitter = () => {
    //state for handle the clik on the box
    const [click, setClick] = useState(false);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h2>Box-Splitter</h2>
            {/* outer obx */}
            <div className='outer-box' onClick={() => setClick(true)}>
                {click && <Split />}
                {
                    !click && <div className='click'>Click Me!</div>
                }
            </div>
        </div>
    )
}

export default Splitter