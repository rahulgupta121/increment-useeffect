import React from 'react'

const DropDownMenu = () => {
    const ClickMe =()=>{
        var click = document.getElementById("myDropdown");  
         if (click.style.display === 'none'){
             click.style.display = 'grid';
         } else{
            click.style.display = 'none';
         }
    }

    const ClickMe2 =()=>{
        var click = document.getElementById("myDropdown2");  
         if (click.style.display === 'none'){
             click.style.display = 'grid';
         } else{
            click.style.display = 'none';
         }
    }

    const ClickMe3 =()=>{
        var click = document.getElementById("myDropdown3");  
         if (click.style.display === 'none'){
             click.style.display = 'grid';
         } else{
            click.style.display = 'none';
         }
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
         
        <ul id="myDropdown" class="dropdown-content">
            <li className='myDropdown-li'> <a href="#option1">Option 1</a></li>
            <li className='myDropdown-li'><a href="#option2">Option 2</a> </li>
            <li className='myDropdown-li'><a href="#option3">Option 3</a> </li>
        </ul>
        
        <div className='btn-clickMe-div'>
                <button onClick={ClickMe2} className='btn-clickMe'>CLICK ME</button>
            </div>   
        
         
            <ul id="myDropdown2" class="dropdown-content">
            <li className='myDropdown-li'> <a href="#option1">Option 1</a></li>
            <li className='myDropdown-li'><a href="#option2">Option 2</a> </li>
            <li className='myDropdown-li'><a href="#option3">Option 3</a> </li>
        </ul>

        <div className='btn-clickMe-div'>
                <button onClick={ClickMe3} className='btn-clickMe'>CLICK ME</button>
            </div>   
        
         
            <ul id="myDropdown3" class="dropdown-content">
            <li className='myDropdown-li'> <a href="#option1">Option 1</a></li>
            <li className='myDropdown-li'><a href="#option2">Option 2</a> </li>
            <li className='myDropdown-li'><a href="#option3">Option 3</a> </li>
        </ul>
        </div>
        </>
    )
}

export default DropDownMenu;
