import image from "../../assets/lapt-removebg.png";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Home = () => {
    const [reviews, setReviews] = useReviews();

    return (
        <div className="w-4/5 mx-auto">
            {/* header part complete */}
            <div className="grid grid-cols-2 py-24 items-center  ">
                <div>
                    <h1 className="text-4xl font-bold uppercase tracking-wide my-4 ">
                        See all reviews about our dell laptop
                    </h1>
                    <p className="tracking-wide my-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Totam tempora illum consequuntur, accusamus neque
                        aliquam officia perspiciatis ab porro nobis.
                    </p>
                    <button className="px-6 py-2 uppercase my-4 tracking-wider rounded bg-slate-200 duration-200 hover:bg-black hover:text-white">
                        click
                    </button>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
            </div>

            {/* reviews part  */}
            <div className="cards">
                <h1 className="text-4xl font-bold uppercase tracking-wider text-center">
                    Reviews Section
                </h1>
                <div className="grid grid-cols-3">
                    {reviews
                        .map((review) => (
                            <Review review={review} key={review.id}></Review>
                        ))
                        .slice(0, 3)}
                </div>
            </div>
        </div>
    );
};

export default Home;
