
import ChefCard from './ChefCard';

const ChefSection = () => {
    const card = [10 ,54,545,432]
    return (
        <div className='mb-10'>
            this is chef section
            <ChefCard card={card}></ChefCard>
        </div>
    );
};

export default ChefSection;