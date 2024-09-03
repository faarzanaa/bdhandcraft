import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Navigation = () => {

    const [isopenSidebarVal, setisopenSidebarVal] = useState(false);


    return(
        <nav>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-2 navPart1'>
                               <div className='catWrapper'>
                                    <Button className='allCatTab align-items-center' onClick={()=>setisopenSidebarVal(!isopenSidebarVal)}>
                                       <span className='icon1 mr-2'><IoIosMenu/></span>
                                       <span class="text" ml-2>ALL CATEGORIES</span>
                                       <span className='icon2'><FaAngleDown/></span>
 
                                    </Button>

                                    <div className={`sidebarNav ${isopenSidebarVal===true ? 'open' : ''}`}>
                                        <ul>
                                            <li><Link to="/"><Button>Jute</Button></Link></li>
                                            <li><Link to="/"><Button>Seagrass</Button></Link></li>
                                            <li><Link to="/"><Button>Date Leaf</Button></Link></li>
                                            <li><Link to="/"><Button>Palm Fiber</Button></Link></li>
                                            <li><Link to="/"><Button>Wood</Button></Link></li>
                                            
                                        </ul>



                                    </div>

                               </div>
                            </div>

                            <div className='col-sm-10 navPart2 d-flex align-items-center'>
                                <ul className='list list-inline ml-auto'>
                                    <li className='list-inline-item'><Link to="/"><Button>Home</Button></Link></li>
                                    <li className='list-inline-item'>
                                        <Link to="/"><Button>Jute</Button></Link>
                                            <div className='submenu shadow'>
                                              <Link to="/"><Button>Baskets</Button></Link>
                                              <Link to="/"><Button>Bags</Button></Link>
                                              <Link to="/"><Button>Floor Mats</Button></Link>
                                            </div>
                                        
                                        </li> 
                                    <li className='list-inline-item'>
                                        <Link to="/"><Button>Seagrass</Button></Link>
                                            <div className='submenu shadow'>
                                              <Link to="/"><Button>Baskets</Button></Link>
                                              <Link to="/"><Button>Bags</Button></Link>
                                              <Link to="/"><Button>Floor Mats</Button></Link>
                                              <Link to="/"><Button>Trays</Button></Link>
                                            </div>
                                        
                                        </li>
                                    <li className='list-inline-item'>
                                        <Link to="/"><Button>Date Leaf</Button></Link>
                                            <div className='submenu shadow'>
                                              <Link to="/"><Button>Baskets</Button></Link>
                                              <Link to="/"><Button>Placemats</Button></Link>
                                              <Link to="/"><Button>Trays</Button></Link>
                                            </div>
                                        
                                        </li>
                                    <li className='list-inline-item'>
                                        <Link to="/"><Button>Palm Fiber</Button></Link>
                                            <div className='submenu shadow'>
                                              <Link to="/"><Button>Baskets</Button></Link>
                                              <Link to="/"><Button>Placemats</Button></Link>
                                            </div>
                                        
                                        </li>
                                    <li className='list-inline-item'>
                                        <Link to="/"><Button>Wood</Button></Link>
                                            <div className='submenu shadow'>
                                              <Link to="/"><Button>Chopper Board</Button></Link>
                                              <Link to="/"><Button>Trays</Button></Link>
                                              
                                            </div>
                                        
                                        </li>
                                    <li className='list-inline-item'>
                                        <Link to="/"><Button>Contact Us</Button></Link>
                                        
                                        </li>




                                </ul>
                            </div>
                        </div>

                    </div>
                </nav>
    )

}

export default Navigation;