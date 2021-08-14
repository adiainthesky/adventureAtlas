import React, { useState } from 'react'
import './InfoModal.css'

const InfoModal = () => {
    const [modalState, setModalState] = useState(false);
    const toggleModalState = () => setModalState(!modalState)

    return (
        <div>
            <div className={`modalBackground modalShowing-${modalState}`}>
                <div className="modalInner">
                    <div className="modalImage">
                        <img src="https://images.unsplash.com/photo-1628802882005-68aedd740df1?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNjV8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="open suitcase" />
                    </div>
                    <div className="modalText">
                        <h2>Information about the site</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam modi delectus vero nostrum accusantium perspiciatis atque ad aliquid incidunt a corrupti quo quam necessitatibus enim saepe, corporis iure consectetur neque? </p>
                        <form action="">
                            <button>Unnecessary button</button>
                        </form>
                    </div>
                </div>
            </div>
            <button onClick={() => toggleModalState()}>Open modal</button>
        </div>
    )
}

export default InfoModal

