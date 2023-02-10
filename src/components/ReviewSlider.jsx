import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import style from "../styles/reviewslider.module.css";
import { Pagination } from "swiper";
import { Box, Flex, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import user1 from "./assets/usr1.png"
import user2 from "./assets/usr2.png"
import user3 from "./assets/usr3.png"



export default function ReviewSlider() {
    

    return (
        <>
            <Swiper
                slidesPerView={window.innerWidth<990?1:3}
                spaceBetween={47}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className={style.mySwiper}
            >
                <SwiperSlide>
                    <Flex direction="column">
                        <Flex w={{base:"259px", lg:"320px"}} h={{base:"75px", lg:"98px"}} padding="10px" backgroundColor="#D9D9D9">
                            <Text fontSize={{base:"30px", lg:"39px"}} color="#FFB91D" mt="-10px">“</Text>
                            <Text mt="10px" fontSize={{base:"10px", lg:"14px"}} textAlign="left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in ligula quis orci molestie tincidunt a vitae ipsum.</Text>
                        </Flex>
                        <TriangleDownIcon w={{base:"40px", lg:"50px"}} color="#D9D9D9" marginTop="-5px" fontSize="20px"/>
                        <Flex>
                            <Image src={user1} w={{base:"37px", lg:"49px"}}/>
                            <Flex direction="column" alignItems="flex-start">
                                <Text fontSize={{base:"13px", lg:"17px"}} fontWeight="800" color="#00337C">Emily Mintz</Text>
                                <Text fontSize={{base:"9px", lg:"12px"}} fontWeight="600">Lorem ipsum</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                <Flex direction="column">
                        <Flex w={{base:"259px", lg:"320px"}} h={{base:"75px", lg:"98px"}} padding="10px" backgroundColor="#D9D9D9">
                            <Text fontSize={{base:"30px", lg:"39px"}} color="#FFB91D" mt="-10px">“</Text>
                            <Text mt="10px" fontSize={{base:"10px", lg:"14px"}} textAlign="left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in ligula quis orci molestie tincidunt a vitae ipsum.</Text>
                        </Flex>
                        <TriangleDownIcon w={{base:"40px", lg:"50px"}} color="#D9D9D9" marginTop="-5px" fontSize="20px"/>
                        <Flex>
                            <Image src={user2} w={{base:"37px", lg:"49px"}}/>
                            <Flex direction="column" alignItems="flex-start">
                                <Text fontSize={{base:"13px", lg:"17px"}} fontWeight="800" color="#00337C">Viktor Cheng</Text>
                                <Text fontSize={{base:"9px", lg:"12px"}} fontWeight="600">Lorem ipsum</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                <Flex direction="column">
                        <Flex w={{base:"259px", lg:"320px"}} h={{base:"75px", lg:"98px"}} padding="10px" backgroundColor="#D9D9D9">
                            <Text fontSize={{base:"30px", lg:"39px"}} color="#FFB91D" mt="-10px">“</Text>
                            <Text mt="10px" fontSize={{base:"10px", lg:"14px"}} textAlign="left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in ligula quis orci molestie tincidunt a vitae ipsum.</Text>
                        </Flex>
                        <TriangleDownIcon w={{base:"40px", lg:"50px"}} color="#D9D9D9" marginTop="-5px" fontSize="20px"/>
                        <Flex>
                            <Image src={user3} w={{base:"37px", lg:"49px"}}/>
                            <Flex direction="column" alignItems="flex-start">
                                <Text fontSize={{base:"13px", lg:"17px"}} fontWeight="800" color="#00337C">Gargi P</Text>
                                <Text fontSize={{base:"9px", lg:"12px"}} fontWeight="600">Lorem ipsum</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                <Flex direction="column">
                        <Flex w={{base:"259px", lg:"335px"}} h={{base:"75px", lg:"98px"}} padding="10px" backgroundColor="#D9D9D9">
                            <Text fontSize={{base:"30px", lg:"39px"}} color="#FFB91D" mt="-10px">“</Text>
                            <Text mt="10px" fontSize={{base:"10px", lg:"14px"}} textAlign="left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in ligula quis orci molestie tincidunt a vitae ipsum.</Text>
                        </Flex>
                        <TriangleDownIcon w={{base:"40px", lg:"50px"}} color="#D9D9D9" marginTop="-5px" fontSize="20px"/>
                        <Flex>
                            <Image src={user1} w={{base:"37px", lg:"49px"}}/>
                            <Flex direction="column" alignItems="flex-start">
                                <Text fontSize={{base:"13px", lg:"17px"}} fontWeight="800" color="#00337C">Emily Mintz</Text>
                                <Text fontSize={{base:"9px", lg:"12px"}} fontWeight="600">Lorem ipsum</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                <Flex direction="column">
                        <Flex w={{base:"259px", lg:"335px"}} h={{base:"75px", lg:"98px"}} padding="10px" backgroundColor="#D9D9D9">
                            <Text fontSize={{base:"30px", lg:"39px"}} color="#FFB91D" mt="-10px">“</Text>
                            <Text mt="10px" fontSize={{base:"10px", lg:"14px"}} textAlign="left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in ligula quis orci molestie tincidunt a vitae ipsum.</Text>
                        </Flex>
                        <TriangleDownIcon w={{base:"40px", lg:"50px"}} color="#D9D9D9" marginTop="-5px" fontSize="20px"/>
                        <Flex>
                            <Image src={user2} w={{base:"37px", lg:"49px"}}/>
                            <Flex direction="column" alignItems="flex-start">
                                <Text fontSize={{base:"13px", lg:"17px"}} fontWeight="800" color="#00337C">Viktor Cheng</Text>
                                <Text fontSize={{base:"9px", lg:"12px"}} fontWeight="600">Lorem ipsum</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </SwiperSlide>
            </Swiper>
        </>
    )
}