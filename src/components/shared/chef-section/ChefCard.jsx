import img1 from "../../../assets/card_img/card1.jpg"
const ChefCard = (props) => {

    return (
        <div>
            <div className="border">
                <img src={img1} alt="" />
                <h3>Chef Name: hahhaha</h3>
                <h3>Years of experience: 5+ </h3>
                <h3>Numbers of recipes: 5+ </h3>
                <div className="flex  items-center">
                    <p>likes: @</p>
                    <button className="btn">View Recipes Button</button>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;