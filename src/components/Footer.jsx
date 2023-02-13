import { Box, Button, Flex, Grid, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import style from "../styles/footer.module.css"



export default function Footer() {


    return (
        <Box>
            <Box padding={{base:"20px 8%", lg:"36px 13%"}} backgroundColor="#1E1E1E">
                <Grid color="white" templateColumns={{base:"repeat(1,1fr)",lg:"repeat(4,1fr)"}}>
                    <Box>
                        <Text textAlign="left" fontWeight="700" w="135px" borderBottom="2px solid #FFB91D">LOREM IPSUM</Text>
                        <ul className={style.fir}>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                        </ul>
                    </Box>
                    <Box>
                        <Text textAlign="left" fontWeight="700" w="135px" borderBottom="2px solid #FFB91D">LOREM IPSUM</Text>
                        <ul className={style.fir}>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                        </ul>
                    </Box>
                    <Box>
                        <Text textAlign="left" fontWeight="700" w="135px" borderBottom="2px solid #FFB91D">LOREM IPSUM</Text>
                        <ul className={style.fir}>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                        </ul>
                    </Box>
                    <Box>
                        <Text textAlign="left" fontWeight="700" w="135px" borderBottom="2px solid #FFB91D">LOREM IPSUM</Text>
                        <ul className={style.fir}>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                            <li><Link to="#">Lorem Ipsum Dolor</Link></li>
                        </ul>
                    </Box>
                </Grid>
                <Button backgroundColor="#FFB91D" fontSize={{base:"9px", lg:"16px"}} mt="25px" w={{base:"103px",lg:"191px"}} h={{base:"31px",lg:"57px"}}>SEE ALL SERVICE</Button>
                <Text color="white" textAlign="left" mt="25px" fontWeight="700" w="135px" borderBottom="2px solid #FFB91D">TOOLS</Text>
                <Grid color="white" gap="10px" fontFamily="'Poppins', sans-serif" templateColumns={{base:"repeat(1,1fr)",lg:"repeat(5,1fr)"}}  mt="13px" paddingBottom={{base:"12px", lg:"25px"}} borderBottom="2px solid #292C30">
                    <Flex direction="column" gap="10px" alignItems="flex-start">
                        <Link to="#">Lorem Ipsum Dolor</Link>
                        <Link to="#">Lorem Ipsum Dolor</Link>
                        <Link to="#">Lorem Ipsum Dolor</Link>
                        <Link to="#">Lorem Ipsum Dolor</Link>
                    </Flex>
                    <Flex direction="column" gap="10px" alignItems="flex-start">
                        <Link to="#">Lorem Ipsum Dolor</Link>
                        <Link to="#">Lorem Ipsum Dolor</Link>
                        <Link to="#">Lorem Ipsum Dolor</Link>
                        <Link to="#">Lorem Ipsum Dolor</Link>
                    </Flex>
                    <Flex direction="column" gap="10px" alignItems="flex-start">
                        <Link to="#">Lorem Ipsum Dolor</Link>
                        <Link to="#">Lorem Ipsum Dolor</Link>
                        <Link to="#">Lorem Ipsum Dolor</Link>
                        <Link to="#">Lorem Ipsum Dolor</Link>
                    </Flex>
                    <Flex direction="column" gap="10px" alignItems="flex-start">
                        <Link to="#">Lorem Ipsum Dolor</Link>
                        <Link to="#">Lorem Ipsum Dolor</Link>
                        <Link to="#">Lorem Ipsum Dolor</Link>
                        <Link to="#">Lorem Ipsum Dolor</Link>
                    </Flex>
                    <Flex direction="column" gap="10px" alignItems="flex-start">
                        <Link to="#">Lorem Ipsum Dolor</Link>
                        <Link to="#">Lorem Ipsum Dolor</Link>
                        <Link to="#">Lorem Ipsum Dolor</Link>
                        <Link to="#">Lorem Ipsum Dolor</Link>
                    </Flex>
                </Grid>
                <Flex mt={{base:"30px", lg:"20px"}} color="white" gap="20px" direction={{base:"column", lg:"row"}}>
                    <Flex direction="column" gap="10px" w={{base:"100%", lg:"30%"}}>
                        <Text fontSize="14px" as="b" textAlign="left">CUSTOMER SERVICE</Text>
                        <Flex gap="30px" fontSize="14px">
                            <Flex direction="column" alignItems="flex-start" gap="5px" fontFamily="'Poppins', sans-sarif">
                                <Text><Link to="#">About Us</Link></Text>
                                <Text><Link to="#">Media</Link></Text>
                                <Text><Link to="#">Press Release</Link></Text>
                                <Text><Link to="#">Contact us</Link></Text>
                                <Text><Link to="#">Sitemap</Link></Text>
                            </Flex>
                            <Flex direction="column" alignItems="flex-start" gap="5px" fontFamily="'Poppins', sans-sarif">
                                <Text><Link to="#">Partner With us</Link></Text>
                                <Text><Link to="#">Satisfaction Guarantee</Link></Text>
                                <Text><Link to="#">Blog</Link></Text>
                                <Text><Link to="#">News</Link></Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex direction="column" w={{base:"100%", lg:"70%"}}>
                        <Text fontSize="14px" as="b" textAlign="left">SUBSCRIBE NEWSLETTER</Text>
                        <Flex direction={{base:"column", lg:"row"}} mt="10px" gap="20px">
                            <Text color="#9D9D9D" textAlign="left" w={{base:"100%", lg:"50%"}} fontSize="14px" fontFamily="'Poppins', sans-sarif">Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor</Text>
                            <Flex w={{base:"100%", lg:"50%"}}>
                                <Input borderRadius="25px 0px 0px 25px" placeholder="Email Address" padding="12px 28px" h="45px" _placeholder={{fontSize:"12px"}} backgroundColor="#292C30" border="0px"/>
                                <Button backgroundColor="#FFB91D" color="#00101F" fontSize="14px" as="b" w="122px" h="45px" borderRadius="0px 25px 25px 0px">Subscribe</Button>
                            </Flex>
                        </Flex>
                        <Text textAlign="left" mt="25px" fontSize="10px" as="b" color="white">FOLLOW US ON:</Text>
                        <Flex mt="8px" gap="12px">
                            <Link to="#">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="15.561" cy="15.6577" r="15.2073" stroke="white" stroke-width="0.707317"/>
                                    <path d="M18.3896 9.92902H19.952V7.28629C19.1955 7.20763 18.4354 7.1688 17.6749 7.16995C15.4144 7.16995 13.8687 8.54949 13.8687 11.0759V13.2532H11.3174V16.2117H13.8687V23.7909H16.927V16.2117H19.47L19.8522 13.2532H16.927V11.3667C16.927 10.4941 17.1596 9.92902 18.3896 9.92902Z" fill="#9D9D9D"/>
                                </svg>
                            </Link>
                            <Link to="#">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="16.439" cy="15.6577" r="15.2073" stroke="white" stroke-width="0.707317"/>
                                    <path d="M25.1041 10.2779C24.4341 10.569 23.7253 10.7608 23 10.8472C23.7622 10.4009 24.3355 9.69174 24.6122 8.85286C23.8915 9.27428 23.1044 9.56996 22.2845 9.72725C21.9392 9.36542 21.524 9.07757 21.064 8.8812C20.6041 8.68483 20.109 8.58404 19.6088 8.58497C17.584 8.58497 15.9453 10.1998 15.9453 12.1904C15.9439 12.4673 15.9756 12.7434 16.0399 13.0127C14.5879 12.9446 13.1661 12.5742 11.8655 11.9252C10.5649 11.2762 9.41404 10.3628 8.48664 9.24355C8.16128 9.79204 7.98922 10.4178 7.98842 11.0556C7.98842 12.3058 8.64068 13.4108 9.62557 14.0583C9.04205 14.0444 8.47048 13.89 7.9594 13.608V13.6527C7.9594 15.4015 9.22447 16.8563 10.8988 17.1874C10.584 17.2714 10.2595 17.3139 9.93365 17.314C9.70244 17.3144 9.47174 17.2919 9.24493 17.247C9.71041 18.6795 11.0651 19.7213 12.6699 19.7511C11.3659 20.756 9.76496 21.2992 8.11865 21.2952C7.82643 21.2948 7.53447 21.2774 7.24426 21.2431C8.91906 22.3126 10.8659 22.8782 12.853 22.8728C19.601 22.8728 23.2876 17.3772 23.2876 12.6109C23.2876 12.4546 23.2835 12.2983 23.2761 12.1458C23.9916 11.6368 24.6106 11.0043 25.1041 10.2779Z" fill="#9D9D9D"/>
                                </svg>
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
            <Text padding="16px 0px" fontSize="12px">© Copyright 2022-23 All Rights Reserved</Text>
        </Box>
    )
}