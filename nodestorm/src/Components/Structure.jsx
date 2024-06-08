import React from 'react'
import Header from './Header/Header'
import HeaderTwo from './Header/HeaderTwo'
import Navbar from './Header/Navbar/Navbar'
import Display from './display/Display'
import Slider from './Slider/Slider'
import Banner from './Banner/Banner'
import Multisliders from './MultipleSliders/Multisliders'
import BannerSec from './Banner/BannerSec'
import BannerThree from './Banner/BannerThree'
import Card from './Cards/Card'
import ScreenSlider from './FullScreenSlider/ScreenSlider'
import HeadRuler from './HeadRule/HeadRuler'
import TextDiv from './ContentDiv/TextDiv'
import CardTwo from './Cards/CardTwo'
import TextDivTwo from './ContentDiv/TextDivTwo'
import MultiSliderTwo from './MultipleSliders/MultiSliderTwo'
import ScreenSliderTwo from './FullScreenSlider/ScreenSliderTwo'
import ScreenSliderThree from './FullScreenSlider/ScreenSliderThree'
import HeadRulerTwo from './HeadRule/HeadRulerTwo'
import CardThree from './Cards/CardThree'
import ScreenSliderFour from './FullScreenSlider/ScreenSliderFour'
import CardFour from './Cards/CardFour'
const Structure = () => {
  return (
    <div >
      
        <Header />
        <HeaderTwo />
        <Navbar/>
        <Display/>
        <Slider/>
        <Banner/>
        <Multisliders/>
        <BannerSec />
        <BannerThree />
        <ScreenSlider />
        <Card />
        <HeadRuler/>
        <TextDiv/>
        <CardTwo/>
        <HeadRuler/>
        <TextDivTwo/>
        <MultiSliderTwo/>
        <ScreenSliderTwo/>
        <ScreenSliderThree />
        <HeadRulerTwo/>
        <CardThree/>
        <ScreenSliderFour/>
        <CardFour/>
        {/*footer */}
    </div>
  )
}

export default Structure
