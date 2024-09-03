import HomeBanner from "../../Components/HomeBanner";
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { IoMailOutline } from "react-icons/io5";


const Home =()=>{

    var productSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    return(
        <>
          <HomeBanner />





          <section className="homeProducts">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="banner">
                           <img src="https://www.gitagged.com/wp-content/uploads/2018/07/Bastar-Wooden-Craft-Online-1.jpg" className="cursor w-100"/>

                        </div>

                        <div className="banner mt-4">
                           <img src="https://www.gitagged.com/wp-content/uploads/2017/12/Bastar-Wooden-Handmade-Art-1.jpg" className="cursor w-100"/>

                        </div>
                    </div>



                   <div className="col-md-9 productRow">
                        <div className="d-flex align-items-center">
                            <div className="info w-75">
                                <h3 className="mb-0 hd">Best Seller</h3>
                                <p className="text-light text-sml mb-0">Do not miss the current offers</p>

                            </div>

                            <Button className="viewAllBtn ml-auto">View All <IoIosArrowRoundForward /></Button>

                        </div>


                        <div className="product_row w-100 mt-4">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={0}
                                pagination={true}
                                slidesPerGroup={3}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                
                              

                                <SwiperSlide>
                                   <div className="item productItem">
                                       <div className="imgWrapper">
                                           <img src="https://i.pinimg.com/736x/78/e9/d6/78e9d6edcf239bd359898157c15888ed.jpg" className="w-100" />
                                       </div>

                                      <div className="info">
                                          <h4>Original Woven Wood Basket</h4>
                                            <span className="text-success">in Stock</span>

                                            <div className="d-flex">
                                                <span className="oldPrice">$20.00</span>
                                                <span className="netPrice text-danger ml-2">$14.00</span>

                                            </div>
                                      </div>

                                   </div>
                                
                                </SwiperSlide>


                                <SwiperSlide>
                                   <div className="item productItem">
                                       <div className="imgWrapper">
                                           <img src="https://i.pinimg.com/736x/98/dd/03/98dd03a7663223cd393728f2afdf822f.jpg" className="w-100" />
                                       </div>

                                       <div className="info">
                                          <h4>Original woven Wood Bag</h4>
                                            <span className="text-success">in Stock</span>

                                            <div className="d-flex">
                                                <span className="oldPrice">$20.00</span>
                                                <span className="netPrice text-danger ml-2">$14.00</span>

                                            </div>
                                      </div>

                                   </div>
                                
                                </SwiperSlide>



                                <SwiperSlide>
                                   <div className="item productItem">
                                       <div className="imgWrapper">
                                           <img src="https://i.etsystatic.com/18539852/r/il/8b79a8/1744450217/il_794xN.1744450217_m17d.jpg" className="w-100" />
                                       </div>

                                       <div className="info">
                                          <h4>Original Jute Floor Mats</h4>
                                            <span className="text-success">in Stock</span>

                                            <div className="d-flex">
                                                <span className="oldPrice">$20.00</span>
                                                <span className="netPrice text-danger ml-2">$14.00</span>

                                            </div>
                                       </div>

                                   </div>
                                
                                </SwiperSlide> 

                                <SwiperSlide>
                                   <div className="item productItem">
                                       <div className="imgWrapper">
                                           <img src="https://th.bing.com/th/id/OIP.3TPARMKvU2_jKMVOqFK3KgHaHa?rs=1&pid=ImgDetMain" className="w-100" />
                                       </div>

                                       <div className="info">
                                          <h4>Round Seagrass Tray for Indoor</h4>
                                            <span className="text-success">in Stock</span>


                                            <div className="d-flex">
                                                <span className="oldPrice">$20.00</span>
                                                <span className="netPrice text-danger ml-2">$14.00</span>

                                            </div>

                                      </div>

                                   </div>
                                
                                </SwiperSlide> 


                                <SwiperSlide>
                                   <div className="item productItem">
                                       <div className="imgWrapper">
                                           <img src="https://th.bing.com/th/id/OIP.kAzR9Sty4w861ja_7YFlzgHaGq?rs=1&pid=ImgDetMain" className="w-100" />
                                       </div>

                                       <div className="info">
                                          <h4>Hand Woven Twisted Seagrass Tray</h4>
                                            <span className="text-success">in Stock</span>

                                            <div className="d-flex">
                                                <span className="oldPrice">$20.00</span>
                                                <span className="netPrice text-danger ml-2">$14.00</span>

                                            </div>
                                      </div>

                                   </div>
                                
                                </SwiperSlide> 


                                <SwiperSlide>
                                   <div className="item productItem">
                                       <div className="imgWrapper">
                                           <img src="https://th.bing.com/th/id/OIP.i-2yej-_PNTLQgyhvgCIsgHaHa?rs=1&pid=ImgDetMain" className="w-100" />
                                       </div>

                                       <div className="info">
                                          <h4>Original Woven Seagrass Basket</h4>
                                            <span className="text-success">in Stock</span>

                                            <div className="d-flex">
                                                <span className="oldPrice">$20.00</span>
                                                <span className="netPrice text-danger ml-2">$14.00</span>

                                            </div>
                                      </div>

                                   </div>
                                
                                </SwiperSlide> 

                            </Swiper>


                        </div>





                        <div className="d-flex align-items-center mt-5">
                            <div className="info w-75">
                                <h3 className="mb-0 hd">New Products</h3>
                                <p className="text-light text-sml mb-0">Do not miss the new items</p>

                            </div>

                            <Button className="viewAllBtn ml-auto">View All <IoIosArrowRoundForward /></Button>

                        </div>


                        <div className="product_row w-100 mt-4">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={0}
                                pagination={{
                                   clickable: true,
                                }}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                

                                <SwiperSlide>
                                   <div className="item productItem">
                                       <div className="imgWrapper">
                                           <img src="https://th.bing.com/th/id/R.2fb737bff9612e7689456290ff6aa5a6?rik=9Js8JHk0LpagPQ&pid=ImgRaw&r=0" className="w-100" />
                                       </div>

                                      <div className="info">
                                          <h4> Woven Date Leaf Place Mats</h4>
                                            <span className="text-success">in Stock</span>

                                            <div className="d-flex">
                                                <span className="oldPrice">$20.00</span>
                                                <span className="netPrice text-danger ml-2">$14.00</span>

                                            </div>
                                      </div>

                                   </div>
                                
                                </SwiperSlide> 

                                <SwiperSlide>
                                   <div className="item productItem">
                                       <div className="imgWrapper">
                                           <img src="https://th.bing.com/th/id/OIP.hJiJsUuVGDatiOy38tz23gHaHa?rs=1&pid=ImgDetMain" className="w-100" />
                                       </div>

                                       <div className="info">
                                          <h4>Round Jute Place Mats</h4>
                                            <span className="text-success">in Stock</span>

                                            <div className="d-flex">
                                                <span className="oldPrice">$20.00</span>
                                                <span className="netPrice text-danger ml-2">$14.00</span>

                                            </div>
                                       </div>

                                   </div>
                                
                                </SwiperSlide> 

                                <SwiperSlide>
                                   <div className="item productItem">
                                       <div className="imgWrapper">
                                           <img src="https://th.bing.com/th/id/R.9d433ace4c281455eddadd0984e0bc21?rik=sYF8xzqcXctttA&pid=ImgRaw&r=0" className="w-100" />
                                       </div>

                                       <div className="info">
                                          <h4>Hand Crafted Palm Fiber Basket or Tray</h4>
                                            <span className="text-success">in Stock</span>


                                            <div className="d-flex">
                                                <span className="oldPrice">$20.00</span>
                                                <span className="netPrice text-danger ml-2">$14.00</span>

                                            </div>

                                      </div>

                                   </div>
                                
                                </SwiperSlide> 


                                <SwiperSlide>
                                   <div className="item productItem">
                                       <div className="imgWrapper">
                                           <img src="https://i.pinimg.com/originals/02/d7/c7/02d7c7f04a2d53ebb5a7a21a5a5fc436.jpg" className="w-100" />
                                       </div>

                                       <div className="info">
                                          <h4>Banana Fiber Round Tray With Braided Handles Large</h4>
                                            <span className="text-success">in Stock</span>

                                            <div className="d-flex">
                                                <span className="oldPrice">$20.00</span>
                                                <span className="netPrice text-danger ml-2">$14.00</span>

                                            </div>
                                      </div>

                                   </div>
                                
                                </SwiperSlide> 


                                <SwiperSlide>
                                   <div className="item productItem">
                                       <div className="imgWrapper">
                                           <img src="https://th.bing.com/th/id/OIP.zXgCKYFVPgYtNRb53EtLSQHaHa?rs=1&pid=ImgDetMain" className="w-100" />
                                       </div>

                                       <div className="info">
                                          <h4>Flexible vegetable fibre basket storage basket</h4>
                                            <span className="text-success">in Stock</span>

                                            <div className="d-flex">
                                                <span className="oldPrice">$20.00</span>
                                                <span className="netPrice text-danger ml-2">$14.00</span>

                                            </div>
                                      </div>

                                   </div>
                                
                                </SwiperSlide> 

                                <SwiperSlide>
                                   <div className="item productItem">
                                       <div className="imgWrapper">
                                           <img src="https://th.bing.com/th/id/OIP.a7V1YBKAGy0WH3ZFpp2bKAHaHa?rs=1&pid=ImgDetMain" className="w-100" />
                                       </div>

                                       <div className="info">
                                          <h4>Original Beige Tashan Jute Basket</h4>
                                            <span className="text-success">in Stock</span>

                                            <div className="d-flex">
                                                <span className="oldPrice">$20.00</span>
                                                <span className="netPrice text-danger ml-2">$14.00</span>

                                            </div>
                                      </div>

                                   </div>
                                
                                </SwiperSlide>

                            </Swiper>


                        </div>








                    </div>


                </div>
            </div>
          </section>


          <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="text-white mb-1">$20 discount for your first order</p>
                        <h3 className="text-white">Join Our Newsletter and Get..</h3>
                        <p className="text-light">Join our email subscription now to get updates on <br/> promotions and coupons</p>



                        <form>
                            <IoMailOutline />
                            <input type="text" placeholder="Your Email Address"/>
                            <Button>Subscribe</Button>
                        </form>

                    </div>

                    <div className="col-md-6">
                        
                    </div>
                </div>
            </div>
          </section>

          <br/><br/><br/><br/>
        
        </>
    )

}

export default Home;