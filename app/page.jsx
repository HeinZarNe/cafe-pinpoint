import Image from "next/image";
import { BRAND_NAME } from "./ui/constants";

export default function Home() {
  return (
    <div className="">
      <div>
        <p>
          Welcome to <span>{BRAND_NAME}</span>
        </p>
      </div>
      <div>
        <p>Find Your Perfect Cafe Anytime, Anywhere.</p>
        <p>Discover, Explore, Enjoy!</p>
        <p>
          Our app makes it effortless to find the ideal cafe for your next date
          or event. Explore a curated list of cafes near you, complete with
          detailed information and user reviews. From cozy hideaways to trendy
          hotspots, we've got you covered.
        </p>
        <div>
          <button>Login</button>
          <button>Register</button>
        </div>
        <p>I just want to browse</p>
      </div>
    </div>
  );
}
