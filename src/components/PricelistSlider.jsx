import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import style from "../styles/pricelistslider.module.css";
import { EffectCoverflow, Pagination } from "swiper";
import { Link } from "react-router-dom";


export default function PricelistSlider() {

    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className={style.mySwiper}
            >
                <SwiperSlide>
                    <Box padding="24px 15px" backgroundColor="white" borderRadius="10px" direction="column">
                        <Text fontSize={{base:"15px", lg:"20px"}} fontWeight="500">Lorem Ipsum Dolor Sit Amet</Text>
                        <Text fontSize={{base:"38px", lg:"50px"}}><span style={{fontSize:"25px"}}>₹</span>999</Text>
                        <Text fontSize={{base:"9px", lg:"12px"}}>Lorem Ipsum Dolor Sit Amet</Text>
                        <ul className={style.listview}>
                            <li>Lorem Ipsum Dolor Sit Amet</li>
                            <li>Lorem Ipsum Dolor</li>
                            <li>Lorem Ipsum Dolor Sit Amet</li>
                            <li>Lorem Ipsum Dolor Sit Amet</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum Dolor Sit Amet</li>
                            <li>Lorem Ipsum Dolor Sit </li>
                            <li>Lorem Ipsum Dolor</li>
                        </ul>
                        <Link to="#"><Button W={{base:"75px", lg:"141px"}} h={{base:"30px", lg:"57px"}} fontSize={{base:"9px", lg:"16px"}} mt={{base:"22px", lg:"29px"}} backgroundColor="#FFB91D" border="2px solid">KNOW MORE</Button></Link>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                <Box padding="24px 15px" backgroundColor="white" borderRadius="10px" direction="column">
                        <Text fontSize={{base:"15px", lg:"20px"}} fontWeight="500">Lorem Ipsum Dolor Sit Amet</Text>
                        <Text fontSize={{base:"38px", lg:"50px"}}><span style={{fontSize:"25px"}}>₹</span>1999</Text>
                        <Text fontSize={{base:"9px", lg:"12px"}}>Lorem Ipsum Dolor Sit Amet</Text>
                        <ul className={style.listview}>
                            <li>Lorem Ipsum Dolor Sit Amet</li>
                            <li>Lorem Ipsum Dolor</li>
                            <li>Lorem Ipsum Dolor Sit Amet</li>
                            <li>Lorem Ipsum Dolor Sit Amet</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum Dolor Sit Amet</li>
                            <li>Lorem Ipsum Dolor Sit </li>
                            <li>Lorem Ipsum Dolor</li>
                        </ul>
                        <Link to="#"><Button W={{base:"75px", lg:"141px"}} h={{base:"30px", lg:"57px"}} fontSize={{base:"9px", lg:"16px"}} mt={{base:"22px", lg:"29px"}} backgroundColor="#FFB91D" border="2px solid">KNOW MORE</Button></Link>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                <Box padding="24px 15px" backgroundColor="white" borderRadius="10px" direction="column">
                        <Text fontSize={{base:"15px", lg:"20px"}} fontWeight="500">Lorem Ipsum Dolor Sit Amet</Text>
                        <Text fontSize={{base:"38px", lg:"50px"}}><span style={{fontSize:"25px"}}>₹</span>999</Text>
                        <Text fontSize={{base:"9px", lg:"12px"}}>Lorem Ipsum Dolor Sit Amet</Text>
                        <ul className={style.listview}>
                            <li>Lorem Ipsum Dolor Sit Amet</li>
                            <li>Lorem Ipsum Dolor</li>
                            <li>Lorem Ipsum Dolor Sit Amet</li>
                            <li>Lorem Ipsum Dolor Sit Amet</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum Dolor Sit Amet</li>
                            <li>Lorem Ipsum Dolor Sit </li>
                            <li>Lorem Ipsum Dolor</li>
                        </ul>
                        <Link to="#"><Button W={{base:"75px", lg:"141px"}} h={{base:"30px", lg:"57px"}} fontSize={{base:"9px", lg:"16px"}} mt={{base:"22px", lg:"29px"}} backgroundColor="#FFB91D" border="2px solid">KNOW MORE</Button></Link>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                <Box padding="24px 15px" backgroundColor="white" borderRadius="10px" direction="column">
                        <Text fontSize={{base:"15px", lg:"20px"}} fontWeight="500">Lorem Ipsum Dolor Sit Amet</Text>
                        <Text fontSize={{base:"38px", lg:"50px"}}><span style={{fontSize:"25px"}}>₹</span>999</Text>
                        <Text fontSize={{base:"9px", lg:"12px"}}>Lorem Ipsum Dolor Sit Amet</Text>
                        <ul className={style.listview}>
                            <li>Lorem Ipsum Dolor Sit Amet</li>
                            <li>Lorem Ipsum Dolor</li>
                            <li>Lorem Ipsum Dolor Sit Amet</li>
                            <li>Lorem Ipsum Dolor Sit Amet</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum Dolor Sit Amet</li>
                            <li>Lorem Ipsum Dolor Sit </li>
                            <li>Lorem Ipsum Dolor</li>
                        </ul>
                        <Link to="#"><Button W={{base:"75px", lg:"141px"}} h={{base:"30px", lg:"57px"}} fontSize={{base:"9px", lg:"16px"}} mt={{base:"22px", lg:"29px"}} backgroundColor="#FFB91D" border="2px solid">KNOW MORE</Button></Link>
                    </Box>
                </SwiperSlide>
            </Swiper>
        </>
    )
}