import React from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import Footer from "./../components/Footer";


const HomeScreen =({match}) =>{
    window.scrollTo(0,0)
    const keyword = match.params.keyword;
    const pagenumber = match.params.pagenumber;

    return(
        <>
        <Header/>
        <ShopSection keyword={keyword} pagenumber={pagenumber}/>
        <CalltoActionSection/>
        <ContactInfo/>
        <Footer/>
        </>
    )
}
export default HomeScreen;