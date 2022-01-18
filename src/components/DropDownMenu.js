import React from 'react'

const DropDownMenu = () => {
    const ClickMe =()=>{
        alert("i am clicked")
    }
    return (
        <>
        <div className='backGround '>
        <div className='dropMe'>
            <h3 className='headingDropme'> Drop Down Me </h3>
            <div className='btn-clickMe-div'>
                <button onClick={ClickMe} className='btn-clickMe'>CLICK ME</button>
            </div>   
        </div>
         
        </div>
        </>
    )
}

export default DropDownMenu;
