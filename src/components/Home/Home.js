import { Link } from "react-router-dom";
import image from "../../assets/lapt-removebg.png";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Home = () => {
    const [reviews] = useReviews();

    return (
        <div className="w-4/5 mx-auto">
            {/* header part complete */}
            <div className="grid lg:grid-cols-2 grid-cols-1 py-24 items-center  ">
                <div>
                    <h1 className="text-4xl font-bold uppercase tracking-wide my-4 ">
                        See all reviews about our dell laptop
                    </h1>
                    <p className="tracking-wide my-4">
                        This is our laptop. We provide latest generation laptop
                        with core i5 12th generation with 16gb of ram and 1 tb
                        of ssd. also it supports wifi 6 and bluetooth 5.0.
                    </p>
                    <Link
                        to="/dashboard"
                        className="px-6 py-2 uppercase my-4 tracking-wider rounded bg-slate-200 duration-200 hover:bg-black hover:text-white"
                    >
                        Go To Dashboard
                    </Link>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
            </div>

            {/* reviews part  */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold uppercase tracking-wider text-center">
                    Reviews Section
                </h1>
                <div className="grid lg:grid-cols-3 grid-cols-1">
                    {reviews
                        .map((review) => (
                            <Review review={review} key={review.id}></Review>
                        ))
                        .slice(0, 3)}
                </div>
                <div className="flex justify-center">
                    <Link
                        to="/reviews"
                        className="px-6 py-2 uppercase my-4 tracking-wider rounded bg-slate-200 duration-200 hover:bg-black hover:text-white"
                    >
                        See More Reviews
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
