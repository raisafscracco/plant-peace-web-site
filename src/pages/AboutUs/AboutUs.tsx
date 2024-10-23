import React from 'react';
import Person from './components/Person';
import Ana from '../../assets/img/AboutusImg/ana.png';
import Raisa from '../../assets/img/AboutusImg/raisa.png';
import Rebeca from '../../assets/img/AboutusImg/rebeca.png';
import Lucas from '../../assets/img/AboutusImg/lucas.png';
import Instagram from '../../assets/img/AboutusImg/instagram.svg'
import Email from '../../assets/img/AboutusImg/email.svg'
import Linkedin from '../../assets/img/AboutusImg/linkedin.svg'
import RigthPlant from '../../assets/img/AboutusImg/rigthplant.png'
import LeftPlant from '../../assets/img/AboutusImg/left plant.png'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AboutUs: React.FC = () => {

  const socialIcons = {
    instagram: Instagram,
    email: Email,
    linkedin: Linkedin,
  };

  return (
    <div>
      <Header/>
    <div style={{ position: 'relative' }}>
      <img src={RigthPlant} alt="Plant" className="hidden md:none lg:block absolute top-[-100px] lg:top-[-80px] lg:w-[400px] xl:w-auto right-0 filter grayscale w-auto h-auto" />
      <div className="flex justify-center items-center min-h-screen bg-background  ">
        <div className="max-w-screen-lg mt-24">
          <h1 className="text-5xl font-title font-bold text-primaryText mb-32 text-center">Our Team</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-20 lg:gap-24 xl:gap-x-[212px] xl:gap-y-[108px] gap-6 mb-32'>
            <Person dev={Ana} name="Ana Beatriz Prado Neco" description="Front-End Developer" socialIcons={socialIcons} />
            <Person dev={Lucas} name="Lucas Henrique Siloto" description="Front-End Developer" socialIcons={socialIcons} />
            <Person dev={Raisa} name="Raisa Fernanda Sousa Cracco" description="Front-End Developer" socialIcons={socialIcons} />
            <Person dev={Rebeca} name="Rebeca Toda Barbosa" description="Front-End Developer" socialIcons={socialIcons} />
          </div> 
        </div>
      </div>
      <img src={LeftPlant} alt="Plant" className="hidden md:none lg:block absolute bottom-0 left-0 lg:w-[340px] xl:w-auto filter grayscale w-auto h-auto" />
    </div>
    <Footer/>
    </div>
  );
};

export default AboutUs;
