import { ChevronDownIcon, ChevronUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { useState } from "react";
import img2 from "./assets/img2.png"
import PricelistNormal from "./PricelistNormal";
import PricelistSlider from "./PricelistSlider";
import ReviewSlider from "./ReviewSlider";


export default function Home3() {
    const [tray, settray] = useState("one");

    // console.log(window.innerWidth)

    return (
        <Box>
            
            <Flex padding={{base:"14px 8%", lg:"39px 13%"}} direction={{base:"column", lg:"row"}} backgroundColor="#F4F4F4">
                <Flex direction="column" textAlign="left" w={{base:"100%", lg:"50%"}} fontFamily="'Poppins', sans-serif">
                    <Text color="#FFB91D" fontSize={{base:"13px", md:"23px"}} as="b">About Us</Text>
                    <Text color="#00337C" fontSize={{base:"22px", md:"40px"}} as="b">Lorem Ipsum Dolor Sit Amet Lorem Ipsum</Text>
                    <Text fontSize={{base:"9px", md:"16px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in ligula quis orci molestie tincidunt a vitae ipsum. Ut accumsan id risus et aliquam. Curabitur ac sodales orci. Quisque vulputate ac nisi at blandit. Curabitur dui arcu, congue sed pulvinar non, faucibus a felis. Donec commodo est lorem, in pulvinar orci scelerisque et. In mollis aliquet porttitor. Duis ac mi sed arcu molestie laoreet nec sit amet massa. Pellentesque id elit at quam consequat imperdiet ac in est. Vivamus sodales commodo sollicitudin.</Text>
                </Flex>
                <Image src={img2} w={{base:"100%", lg:"50%"}}/>
            </Flex>
            <Box padding={{base:"14px 8%", lg:"36px 13%"}} backgroundColor="#FFB91D">
                <Text textAlign="center" fontSize={{base:"20px", lg:"45px"}} fontWeight="700"><span style={{color:"white"}}>Our Services</span> at a Glance</Text>
                <Tabs display={{base:"none",lg:"block"}}>
                    <TabList>
                        <Tab>Lorem Ipsum Dolor</Tab>
                        <Tab>Lorem Ipsum Dolor Sit</Tab>
                        <Tab>Lorem Ipsum Dolor Sit</Tab>
                        <Tab>Lorem Ipsum Dolor Sit</Tab>
                        <Tab>Lorem Ipsum</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <PricelistNormal/>
                        </TabPanel>
                        <TabPanel>
                            <PricelistNormal/>
                        </TabPanel>
                        <TabPanel>
                            <PricelistNormal/>
                        </TabPanel>
                        <TabPanel>
                            <PricelistNormal/>
                        </TabPanel>
                        <TabPanel>
                            <PricelistNormal/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                <Flex direction="column" gap="10px" display={{base:"flex",lg:"none"}}>
                    <Text w="100%" border="1px solid" fontSize="18px" backgroundColor="white" padding="8px 0px" onClick={()=>settray("one")}>Lorem Ipsum Dolor {tray=="one"?<ChevronUpIcon/>:<ChevronDownIcon/>}</Text>
                    <Box display={tray=="one"?"flex":"none"}>
                        <PricelistSlider/>
                    </Box>
                    <Text w="100%" border="1px solid" fontSize="18px" backgroundColor="white" padding="8px 0px" onClick={()=>settray("two")}>Lorem Ipsum Dolor {tray=="two"?<ChevronUpIcon/>:<ChevronDownIcon/>}</Text>
                    <Box display={tray=="two"?"flex":"none"}>
                        <PricelistSlider/>
                    </Box>
                    <Text w="100%" border="1px solid" fontSize="18px" backgroundColor="white" padding="8px 0px" onClick={()=>settray("three")}>Lorem Ipsum Dolor {tray=="three"?<ChevronUpIcon/>:<ChevronDownIcon/>}</Text>
                    <Box display={tray=="three"?"flex":"none"}>
                        <PricelistSlider/>
                    </Box>
                    <Text w="100%" border="1px solid" fontSize="18px" backgroundColor="white" padding="8px 0px" onClick={()=>settray("four")}>Lorem Ipsum Dolor {tray=="four"?<ChevronUpIcon/>:<ChevronDownIcon/>}</Text>
                    <Box display={tray=="four"?"flex":"none"}>
                        <PricelistSlider/>
                    </Box>
                </Flex>
            </Box>
            <Box padding={{base:"14px 8%", lg:"36px 13%"}}>
                <Text fontSize={{base:"20px", lg:"45px"}} fontWeight="700">What <span>people say</span> about us...</Text>
                <ReviewSlider/>
            </Box>
        </Box>
    )
}