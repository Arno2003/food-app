import HeroSection from '../components/HeroSection';
import ImproveSkills from '../components/ImproveSkills';
import QuotesSection from '../components/QuotesSection';
import ChefsSection from '../components/ChefsSection';

export default function Home(){
    return(
        <div>
            <HeroSection />
            <ImproveSkills />
            <QuotesSection />
            <ChefsSection />
        </div>
    )
}