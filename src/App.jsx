import styles from './style';

import { Navbar, Hero, Listen, Merch, Shows, Socials, Footer } from './components';

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      </div>
        <Navbar/>
     </div>

     <div className={`bg-primary ${styles.flexStart}`}>
       <div className={`${styles.boxWidth}`}>
       </div>
         <Hero/>
     </div>

     <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
       <div className={`${styles.boxWidth}`}>
        <Listen/>
        <Shows/>
        <Merch/>
        <Socials/>
        <Footer/>

       </div>
     </div>


    </div>
  );


export default App