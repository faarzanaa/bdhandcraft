import React from "react";
import Slider from "react-slick";

const HomeBanner = ()=>{

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true
      };

    return (
        <>
           <div className="homeBannerSection">
              <Slider {...settings}>
                <div className="item">
                    <img src="https://banglacraft.org/wp-content/uploads/2023/01/October.jpg" className="w-100"/>
                </div>

                <div className="item">
                    <img src="https://banglacraft.org/wp-content/uploads/2023/01/shutterstock_1311756479.jpg" className="w-100"/>
                </div>

                <div className="item">
                    <img src="https://authindia.com/wp-content/uploads/2020/01/HANDMADE1.jpeg" className="w-100"/>
                </div>

                <div className="item">
                    <img src="https://th.bing.com/th/id/R.e278abc6fe8562c7d108f5ab800b6278?rik=ZEdy7HhsspyXVQ&riu=http%3a%2f%2fstatic8.depositphotos.com%2f1205375%2f982%2fi%2f950%2fdepositphotos_9821691-Handicraft.jpg&ehk=yzDGE0ColrIrpSieyUMMwRQsS4o%2bRb0VpZvj3imRQeI%3d&risl=&pid=ImgRaw&r=0" className="w-100"/>
                </div>

              </Slider>

             
           </div>
        
        </>
    )

}

export default HomeBanner;