import { useEffect } from "react";
import Blog from "../Components/Blogs/Blogs";
import BrowseByTopNiche from "../Components/Browse By Top Niche/Browse By Top Niche";
import ClientFeedback from "../Components/Client'sFeedback/Client's Feedback";
import CountdownDiscount from "../Components/Countdown Discount/Countdown Discount";
import FeaturedItems from "../Components/Featured Items/Featured Items";
import MainSlider from "../Components/Main Slider/Main_Slider";
import SoldItems from "../Components/Sold Items/Sold Items";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
  useEffect(() => {
    document.title = "Fashion - Home";
  });
  return (
    <main>
      <MainSlider />
      <SoldItems />
      <FeaturedItems />
      <CountdownDiscount />
      <BrowseByTopNiche />
      <ClientFeedback />
      <Blog />
    </main>
  );
};
export default Home;
