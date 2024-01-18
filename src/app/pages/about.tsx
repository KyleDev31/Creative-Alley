import './about.css';
export default function About() {
    return(
        <main>
          <section id="aboutpage">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
      <h1 style={{ flex: 1, marginTop:'100px' }} className=' title text-5xl font-bold text-center
       from-pink-600 via-purple-600 to-pink-600 bg-gradient-to-t bg-clip-text text-transparent'>
        About       </h1>
        <h1  style={{
          marginLeft:'55px',
          marginTop: '70px',
          color: 'transparent',
          WebkitTextStroke: '1px white',
        }}
        className="text-8xl font-bold behind">
          About
        </h1>
        <img className='blur'
          src="creative alley logo.png" // Make sure the image path is correct
          alt="My Logo"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '35%', // Make the image resizable
            height: '60%',
            opacity: 0.3, // Adjust opacity as needed
            zIndex: 1,
 // Ensure the image is behind the text
          }}
        />

      <div style={{ flex: 2, padding: '20px', backgroundColor: '#ffc0cb', marginTop:'40px',marginRight:'40px', marginLeft:'80px', borderRadius:'10px'}}>
        <p className='text-lg font-sans font-medium'>
          <span className='italic font-serif text-2xl text-pink-500'>Creative Alley</span> is a start-up founded on the month of November 2023.
           With a vision of providing high performing and well-designed web 
           technology needs of Businesses, Entrepreneurs, Freelancers, and etc. 
           Creative Alley is a home of talented developers specialized with the 
           necessary skills and technology all around the web development world.
        </p>
      </div>
    </div>
    <div style={{ display: 'flex', marginTop:'220px'}} className='box'>
      <div id="vipmembership" style={{ flex: 1,}} className='text-4xl font-bold text-center
       from-yellow-200 via-gray-100 to-yellow-300 bg-gradient-to-r bg-clip-text text-transparent'>
        <h2>
          BE A VIP CLIENT NOW!
        </h2>
        <h1>
          Php.1,000.00!
        </h1>
      </div>
      <div id="contactdetailss" style={{ flex: 1,}} className='text-white text-center text-xl'>
        <h2 className='font-bold text-2xl  from-yellow-200 via-gray-100 to-yellow-300 bg-gradient-to-r bg-clip-text text-transparent'>
          CONTACT US!
        </h2>
        <p>
          +639055581493
        </p>
        <p>
          CreativeAlley@gmail.com
        </p>
      </div>
    </div>
    <div className="main-circle lower-left"></div>
    <div className="main-circle upper-right"></div>
    </section>
        </main>
   );
    }