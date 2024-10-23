import { Card } from "./components/Card/Card";
import Ellipse1 from '../../../../assets/img/Ellipse1.svg'
import Ellipse2 from '../../../../assets/img/Ellipse2.svg'
import Ellipse3 from '../../../../assets/img/Ellipse3.svg'
import Rectangle32 from '../../../../assets/img/Rectangle32.png'
import Rectangle33 from '../../../../assets/img/Rectangle33.png'
import Rectangle34 from '../../../../assets/img/Rectangle34.png'
import Button from "../../../../components/Button/Button";
import { useNavigate } from "react-router-dom"

export const PlantsSteps = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-white">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-title font-bold text-primaryText mt-24">Steps To Take Care Of Your <span className="text-span">Plants</span></h1>
          <p className="font-subtitle text-16 text-secondText mt-6">By following these three steps - proper watering, appropriate sunlight, and providing essential nutrients - you'll be well on your way to 
          <br></br>maintaining healthy and thriving plants.</p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-10 lg:space-x-20 my-10 md:my-0 mx-24">
          <Card 
            imageUrl={Ellipse1}
            title="Watering" 
            description="water your plants when the top inch of soil feels dry to the touch. Avoid overwatering, as it can lead to root dehydration." 
          />
          <Card 
            imageUrl={Ellipse2}
            title="Sunlight" 
            description="Most plants need adequate sunlight to thrive. Place your plants in areas that receive the appropriate amount of light for their specific needs." 
          />
          <Card 
            imageUrl={Ellipse3}
            title="Nutrients and Fertilizing" 
            description="Choose a suitable fertilizer based on the specific needs of your plants, whether it's a balanced or specialized formula." 
          />
        </div>
        <div className="flex flex-wrap lg:flex-nowrap my-10 mx-6 pt-12">
          <div className="md:flex md:flex-col md:items-center xl:justify-center xl:gap-10 xl:mx-10 lg:flex-row lg:items-start" >
            <div className='w-full md:w-1/2 lg:w-1/3 mb-6 lg:mb-0 lg:pr-10'>
                <img src={Rectangle32} alt="plants" className='w-full'/>
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3  mb-6 lg:mb-0 lg:pr-10'>
                <img src={Rectangle33} alt="plants" className='w-full ' />
            </div>
            
            <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col " >
              <img src={Rectangle34} alt="plants" className='w-full' />
              <p className="mt-8 text-left text-description lg:text-sm xl:leading-6 mb-6">Our website offers a wide array of stunning plants, ranging from vibrant flowers to lush indoor foliage, 
                  allowing you to create your very own green oasis. In addition to our extensive plant selection, 
                  we also provide gardening kits and fertilizers to equip you with everything you need to nurture your plants and achieve gardening success. 
                  But we don't stop there! We believe that knowledge is the key to a thriving garden, 
                  so we offer a wealth of information and resources on gardening techniques, plant care tips, 
                  and landscaping ideas. Whether you're a seasoned gardener or just starting your green journey, 
                  our goal is to inspire and support you every step of the way. Get ready to explore our virtual 
                  garden and discover the joys of gardening with us!
              </p>
              <Button style={{ alignSelf: 'flex-start' }} onClick={()=> {
                navigate('/error')
                }}>
                See more photos
              </Button>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}



