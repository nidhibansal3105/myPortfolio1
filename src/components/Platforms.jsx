import PlatformCard from "./PlatformCard.jsx";
import leetcode from "../assets/platLogo/leetcode.jpeg";
import codeforces from "../assets/platLogo/codeforces.jpeg";
import codechef from "../assets/platLogo/codechef.jpeg";

const platforms = [
    {
        head: "Leetcode",
        content: "I have solved over 400 questions and have a 1500 contest rating.",
        image: leetcode,
        url: "https://leetcode.com/u/nidhi_3105/"
    },
    {
        head: "CodeChef",
        content: "I have solved over 100 questions and have a 2-star rating.",
        image: codechef,
        url: "#"
    },
    {
        head: "CodeForces",
        content: "I have solved over 200 questions and have a 1031 contest rating.",
        image: codeforces,
        url: "https://codeforces.com/profile/nidhi3105"
    },
];


const Platform = () => {
    return (
        <div className="plat-card-holder flex justify-center items-center flex-wrap gap-30">
            {platforms.map((p) => (
                <PlatformCard
                    key={p.head}
                    img={p.image}
                    heading={p.head}
                    content={p.content}
                    url={p.url}
                />
            ))}
        </div>
    );
};

export default Platform;