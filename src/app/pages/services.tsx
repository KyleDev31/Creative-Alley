import React from 'react';
import './services.css';

interface Service {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const Services: React.FC = () => {
 
  const servicesData: Service[] = [
    {
      id: 1,
      title: 'UI/UX Designing',
      description: 'Php.1,000.00',
      imageUrl: 'uiux.png',
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Php.10,000.00',
      imageUrl: 'webdev.png',
    },
    {
      id: 3,
      title: 'Documentation',
      description: 'Php.2,500.00',
      imageUrl: 'docu.png',
    },
    {
      id: 4,
      title: 'Front-end Development',
      description: 'Php.2,500.00',
      imageUrl: 'frontend.png',
    },
    {
      id: 5,
      title: 'Back-end Development',
      description: 'Php.2,500.00',
      imageUrl: 'backend.png',
    },
    {
      id: 6,
      title: 'Web Designing',
      description: 'Php.2,500.00',
      imageUrl: 'webdes.png',
    },

    // Repeat the above object structure for the other services (2 to 6)
  ];

  return (
    <main id='servicespage' className=''>
      <div  className="techstack-container">
      <h2 style={{marginLeft:'500px',marginTop:'20px'}} className="mb-12 text-5xl font-bold text-start
 from-pink-600 via-purple-600 to-purple-600 
 bg-gradient-to-t bg-clip-text text-transparent on-top">
    SERVICES
    </h2>
    <h1
        style={{
          marginLeft:'450px',
          marginTop: '10px',
          color: 'transparent',
          WebkitTextStroke: '1px white',
        }}
        className="text-7xl font-bold behind"
      >
     SERVICES
      </h1>

      <div className="services-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {servicesData.map((service) => (
            <div key={service.id} className="card service-box bg-pink-200 p-3 
            rounded-lg flex flex-col text-start items-center" >
              <img
                src={service.imageUrl}
                alt={`Service ${service.id}`}
                className="card w-50 h-32 mb-4 object-cover rounded"/>
              <h2 className="text-xl font-bold mb-2">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
      <div className="main-circle up-left"></div>
      <div className="main-circle bot-right"></div>
        </div>
        </div>
      
    </main>
  );
};

export default Services;
