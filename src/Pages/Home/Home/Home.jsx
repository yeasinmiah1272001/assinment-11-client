
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Choice from '../../Choice/Choice';
import Review from '../../Review/Review';
import ShowAll from '../../ShowAll/ShowAll';

const Home = () => {
       return (
         <div>
           <Banner></Banner>
           <Choice></Choice>

           <Services></Services>
           <ShowAll></ShowAll>

           <Review></Review>
         </div>
       );
};

export default Home;