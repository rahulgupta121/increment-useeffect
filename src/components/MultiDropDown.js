import React from 'react'

const MultiDropDown = () => {
    return (
        <div>
            <header>

            <nav> 
                <ul className='navbar'>
                     {/*content 1 */}
                    <li className='nav-item'>
                        <span  className='dropdown'
                        data-toggle="dropdown"
                        data-target="dropdown-menu"
                        >menu-1</span>
                        <ul className='dropdown-menu' id='dropdown-menu'>
                            <li>
                                menu-1-1
                            </li>
                            <li>
                                menu-1-2
                            </li>
                        </ul>
                    </li>
                 
                    {/*content 2 */}
                 
                    <li className='nav-item'>
                        <span  className='dropdown'
                        data-toggle="dropdown"
                        data-target="dropdown-menu"
                        >menu-2</span>
                        <ul className='dropdown-menu' id='dropdown-menu'>
                            <li>
                                menu-2-1
                            </li>
                            <li>
                                menu-2-2
                            </li>
                        </ul>
                    </li>
                

                {/*content 3 */}
                 
                    <li className='nav-item'>
                        <span  className='dropdown'
                        data-toggle="dropdown"
                        data-target="dropdown-menu"
                        >menu-3</span>
                        <ul className='dropdown-menu' id='dropdown-menu'>
                            <li>
                                menu-3-1
                            </li>
                            <li>
                                menu-3-2
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            </header>
        </div>
    )
}

export default MultiDropDown
