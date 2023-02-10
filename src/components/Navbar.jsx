import { Box, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import icon from "./assets/icon.png"
import {GiHamburgerMenu} from "react-icons/gi"
import { Link } from "react-router-dom";

export default function Navbar() {


    return (
        <Box>
            <Flex p="0% 13%" display={{base:"none",lg:"flex"}} justifyContent="space-between" backgroundColor="#1E1E1E" fontSize="14px">
                <Flex alignItems="center" gap="10px" padding="5px" fontFamily="'Montserrat', sans-serif">
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.1818 0H0.636364C0.284375 0 0 0.284375 0 0.636364V13.3636C0 13.7156 0.284375 14 0.636364 14H17.1818C17.5338 14 17.8182 13.7156 17.8182 13.3636V0.636364C17.8182 0.284375 17.5338 0 17.1818 0ZM16.3864 2.20341V12.5682H1.43182V2.20341L0.882955 1.77585L1.66449 0.771591L2.51563 1.43381H15.3045L16.1557 0.771591L16.9372 1.77585L16.3864 2.20341ZM15.3045 1.43182L8.90909 6.40341L2.51364 1.43182L1.6625 0.769602L0.880966 1.77386L1.42983 2.20142L8.22301 7.48324C8.41837 7.63501 8.65872 7.7174 8.90611 7.7174C9.1535 7.7174 9.39384 7.63501 9.58921 7.48324L16.3864 2.20341L16.9352 1.77585L16.1537 0.771591L15.3045 1.43182Z" fill="white"/>
                    </svg>
                    <Text color="white">
                        <Link to="#">info.loremipsum.com</Link>
                    </Text>
                </Flex>
                <Flex color="white" alignItems="center" gap="10px" padding="5px" as="b" fontFamily="'Poppins', sans-serif">
                    <Text><Link to="#">Contact Us</Link></Text>
                    <Text borderRight="1px solid white" paddingRight="10px"><Link to="#">Blog</Link></Text>
                    <a href="">
                        <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.38249 2.49002H7.79249V0.105022C7.1098 0.0340327 6.42386 -0.00101571 5.73749 2.2398e-05C3.69749 2.2398e-05 2.3025 1.24502 2.3025 3.52502V5.49001H0V8.16001H2.3025V15H5.06249V8.16001H7.35749L7.70249 5.49001H5.06249V3.78752C5.06249 3.00002 5.27249 2.49002 6.38249 2.49002Z" fill="white"/>
                        </svg>
                    </a>
                    <a href="">
                        <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.2499 1.54037C15.6404 1.80522 14.9954 1.97972 14.3355 2.05833C15.0291 1.65221 15.5506 1.00702 15.8024 0.243755C15.1467 0.627183 14.4305 0.896215 13.6845 1.03933C13.3704 0.710105 12.9926 0.448201 12.5741 0.269533C12.1556 0.0908651 11.7051 -0.000835291 11.25 5.73299e-06C9.4077 5.73299e-06 7.91677 1.46927 7.91677 3.28046C7.91547 3.53239 7.94433 3.78357 8.00276 4.02864C6.68167 3.96671 5.38805 3.6297 4.20467 3.03917C3.02129 2.44865 1.97419 1.61761 1.13039 0.599223C0.834359 1.09827 0.677803 1.66767 0.677081 2.24792C0.677081 3.38541 1.27054 4.39088 2.16666 4.97994C1.63574 4.96734 1.11569 4.82682 0.650675 4.5703V4.61093C0.650675 6.20207 1.80171 7.52576 3.32515 7.82707C3.03867 7.90343 2.74345 7.94213 2.44697 7.94217C2.2366 7.94254 2.0267 7.92212 1.82033 7.88123C2.24385 9.18461 3.47647 10.1325 4.9366 10.1596C3.75014 11.074 2.29348 11.5682 0.79557 11.5646C0.529687 11.5642 0.26405 11.5483 0 11.5172C1.52383 12.4902 3.29517 13.0049 5.10316 13C11.2429 13 14.5972 7.99972 14.5972 3.66302C14.5972 3.52083 14.5935 3.37864 14.5867 3.23984C15.2377 2.77674 15.801 2.20123 16.2499 1.54037Z" fill="white"/>
                        </svg>
                    </a>
                </Flex>
            </Flex>
            <Flex backgroundColor="#FFB91D" fontFamily="'Roboto', sans-serif" as="b" padding={{base:" 14px 8%", lg:"14px 13%"}} justifyContent="space-between" alignItems="center">
                <Image src={icon} w={{base:"78px", lg:"118px"}}/>
                <Text display={{base:"none", lg:"flex"}}><Link to="#">BUSINESS SETUP</Link></Text>
                <Text display={{base:"none", lg:"flex"}}><Link to="#">TAX AND COMPLIANCE</Link></Text>
                <Text display={{base:"none", lg:"flex"}}><Link to="#">TRADEMARK AND IP</Link></Text>
                <Text display={{base:"none", lg:"flex"}}><Link to="#">INCOME TAX</Link></Text>
                <Text display={{base:"none", lg:"flex"}}><Link to="#">FUNDRAISING</Link></Text>
                <Text display={{base:"none", lg:"flex"}}><Link to="#">NGO</Link></Text>
                <Box display={{base:"none", lg:"flex"}}><GiHamburgerMenu style={{fontSize:"25px"}}/></Box>
                <Box display={{base:"flex", lg:"none"}}>    
                    <Menu>
                        <MenuButton><GiHamburgerMenu style={{fontSize:"25px"}}/></MenuButton>
                        <MenuList>
                            <MenuItem>New Window</MenuItem>
                            <MenuItem>Open Closed Tab</MenuItem>
                            <MenuItem>Open File</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
        </Box>
    )
}