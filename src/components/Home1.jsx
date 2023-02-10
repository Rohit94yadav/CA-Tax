import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import img1 from "./assets/img1.png"

export default function Home1() {


    return (
        <Box>
            <Flex padding={{base:"0px 8%", lg:"0px 0px 0px 13%"}} gap="10px" position="relative">
                <Box textAlign={{base:"center", lg:"left"}}>
                    <Text fontSize={{base:"12px", lg:"22px"}} fontFamily="'Poppins', sans-serif" color="#FFB91D" marginTop={{base:"17px", lg:"66px"}} fontWeight="800">Lorem ipsum dolor sit amet</Text>
                    <Text lineHeight={{base:"35px", lg:"65px"}} fontFamily="'Poppins', sans-serif" fontSize={{base:"30px", lg:"57px"}} color="#1E1E1E" marginTop={{base:"6px", lg:"11px"}} fontWeight="800">Lorem ipsum dolor Sit amet</Text>
                    <Text lineHeight={{base:"15px", lg:"30px"}} fontFamily="'Poppins', sans-serif" fontSize={{base:"14px", lg:"22px"}} color="#1E1E1E" marginTop={{base:"9px", lg:"17px"}} fontWeight="400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit </Text>
                    <Flex marginTop={{base:"9px", lg:"17px"}} gap={{base:"13px", lg:"25px"}} fontFamily="'Roboto', sans-serif" justifyContent={{base:"center", lg:"flex-start"}}>
                        <Link to="#"><Button backgroundColor="#FFB91D" fontSize={{base:"9px", lg:"16px"}} borderRadius="8px" border="2px solid #1E1E1E" padding={{base:"10px", lg:"19px"}} w={{base:"114px", lg:"213px"}} h={{base:"30px",lg:"57px"}}>CONSULT AN EXPERT</Button></Link>
                        <Link to="#"><Button backgroundColor="#1E1E1E" fontSize={{base:"9px", lg:"16px"}} borderRadius="8px" border="2px solid #A7A7A7" padding={{base:"10px", lg:"19px"}} w={{base:"72px", lg:"135px"}} h={{base:"30px",lg:"57px"}} color="white">READ MORE</Button></Link>
                    </Flex>
                    <Flex alignItems="center" mt={{base:"14px", lg:"35px"}} justifyContent={{base:"center", lg:"flex-start"}}>
                        <Input opacity=".55" placeholder="Try 'Trademark'" backgroundColor="#5F5F5F" color="white" _placeholder={{color:"white", fontFamily:"'Poppins', sans-serif"}} fontSize={{base:"9px", lg:"18px"}} w={{base:"85%", lg:"85%"}} h={{base:"27px", lg:"51px"}} borderRadius="25px 0px 0px 25px"/>
                        <Button w={{base:"15%", lg:"15%"}} h={{base:"27px", lg:"49px"}} borderRadius="0px 25px 25px 0px" backgroundColor="#FFB91D" ml="2px">
                            <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.1608 26.6518L15.6513 18.1423C14.8915 18.7501 14.0178 19.2313 13.0301 19.5859C12.0424 19.9404 10.9914 20.1177 9.87704 20.1177C7.11653 20.1177 4.78049 19.1619 2.8689 17.2503C0.9563 15.3377 0 13.0012 0 10.2407C0 7.48018 0.9563 5.14363 2.8689 3.23103C4.78049 1.31944 7.11653 0.363647 9.87704 0.363647C12.6375 0.363647 14.9741 1.31944 16.8867 3.23103C18.7983 5.14363 19.7541 7.48018 19.7541 10.2407C19.7541 11.355 19.5768 12.406 19.2222 13.3937C18.8677 14.3814 18.3865 15.2552 17.7787 16.015L26.3261 24.5624C26.6047 24.841 26.744 25.1829 26.744 25.5881C26.744 25.9933 26.592 26.3479 26.2881 26.6518C26.0095 26.9303 25.655 27.0696 25.2244 27.0696C24.7939 27.0696 24.4393 26.9303 24.1608 26.6518ZM9.87704 17.0786C11.7765 17.0786 13.3912 16.4141 14.7213 15.085C16.0504 13.7549 16.715 12.1401 16.715 10.2407C16.715 8.34125 16.0504 6.72649 14.7213 5.39638C13.3912 4.06728 11.7765 3.40274 9.87704 3.40274C7.97761 3.40274 6.36284 4.06728 5.03273 5.39638C3.70364 6.72649 3.03909 8.34125 3.03909 10.2407C3.03909 12.1401 3.70364 13.7549 5.03273 15.085C6.36284 16.4141 7.97761 17.0786 9.87704 17.0786Z" fill="#1E1E1E"/>
                            </svg>
                        </Button>
                    </Flex>
                    <Flex gap={{base:"4px", lg:"7px"}} direction="column" alignItems={{base:"center", lg:"flex-start"}} mt={{base:"14px", lg:"34px"}}>
                        <Text fontSize={{base:"8px", lg:"14px"}} fontFamily="'Montserrat', sans-serif">Popular:</Text>
                        <Flex gap="7px" opacity=".55" fontFamily="'Poppins', sans-serif">
                            <Text padding={{base:"5px 8px", lg:"8px 15px"}} fontSize={{base:"8px", lg:"14px"}} borderRadius="25px" backgroundColor="#5F5F5F" color="white"><Link to="#">Company Registration</Link></Text>
                            <Text padding={{base:"5px 8px", lg:"8px 15px"}} fontSize={{base:"8px", lg:"14px"}} borderRadius="25px" backgroundColor="#5F5F5F" color="white"><Link to="#">GST Registration</Link></Text>
                            <Text padding={{base:"5px 8px", lg:"8px 15px"}} fontSize={{base:"8px", lg:"14px"}} borderRadius="25px" backgroundColor="#5F5F5F" color="white"><Link to="#">Trademark</Link></Text>
                        </Flex>
                        <Text opacity=".55" w="fit-content" padding={{base:"5px 8px", lg:"8px 15px"}} fontSize={{base:"8px", lg:"14px"}} borderRadius="25px" backgroundColor="#5F5F5F" color="white"><Link to="#">Accounting & Business Compilance</Link></Text>
                    </Flex>
                </Box>
                <Image position={{base:"absolute", lg:"static"}} left="0" zIndex="-10" src={img1} h={{base:"115%", lg:"705px"}} w={{base:"100%", lg:"670px"}}/>
            </Flex>
        </Box>
    )
}