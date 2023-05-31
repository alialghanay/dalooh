import AdvertiseBoard from './components/adertise-borad/AdvertiseBoard';
import Statistic from './components/statistic/statistic';
import LearnMoreArticle from './components/article/LearnMoreArticle';
import Tutorial from './components/tutorial/tutorial';
import Carousel from './components/carouesl/carousel';
import Partners from './components/partners/partners';
import AboutUs from './components/aboutus/aboutUs';

function Home() {
    return (
        <div className="App">
       <main>
          <AdvertiseBoard />
          <Statistic />
          <LearnMoreArticle />
          <Tutorial />
          <Carousel />
          <Partners />
          <AboutUs />
       </main>
      </div>
    )
}

export default Home;