// import { Sparkles } from "lucide-react";
// // import Marquee from "react-fast-marquee";

// import { Container } from "@/components/container";
// import { Button } from "@/components/ui/button";
// // import { MarqueImg } from "@/components/marquee-img";
// import { Link } from "react-router-dom";

// const HomePage = () => {
//   return (
//     <div className="flex-col w-full pb-24">
//       <Container>
//         <div className="my-8">
//           <h2 className="text-3xl text-center md:text-left md:text-6xl">
//             <span className=" text-outline font-extrabold md:text-8xl">
//               AI Superpower
//             </span>
//             <span className="text-gray-500 font-extrabold">
//               - A better way to
//             </span>
//             <br />
//             improve your interview chances and skills
//           </h2>

//           <p className="mt-4 text-muted-foreground text-sm">
//             Boost your interview skills and increase your success rate with
//             AI-driven insights. Discover a smarter way to prepare, practice, and
//             stand out.
//           </p>
//         </div>

//         {/* <div className="flex w-full items-center justify-evenly md:px-12 md:py-16 md:items-center md:justify-end gap-12">
//           <p className="text-3xl font-semibold text-gray-900 text-center">
//             250k+
//             <span className="block text-xl text-muted-foreground font-normal">
//               Offers Recieved
//             </span>
//           </p>
//           <p className="text-3xl font-semibold text-gray-900 text-center">
//             1.2M+
//             <span className="block text-xl text-muted-foreground font-normal">
//               Interview Aced
//             </span>
//           </p>
//         </div> */}

//         {/* image section */}
//         <div className="w-full mt-4 rounded-xl bg-gray-100 h-[420px] drop-shadow-md overflow-hidden relative">
//           <img
//             src="/assets/img/hero.jpg"
//             alt=""
//             className="w-full h-full object-cover"
//           />

//           <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-white/40 backdrop-blur-md">
//             Inteviews Copilot&copy;
//           </div>

//           <div className="hidden md:block absolute w-80 bottom-4 right-4 px-4 py-2 rounded-md bg-white/60 backdrop-blur-md">
//             <h2 className="text-neutral-800 font-semibold">Developer</h2>
//             <p className="text-sm text-neutral-500">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
//               distinctio natus, quos voluptatibus magni sapiente.
//             </p>

//             <Button className="mt-3">
//               Generate <Sparkles />
//             </Button>
//           </div>
//         </div>
//       </Container>
//        {/* AI Interview Prep Section */}
//        <Container className="py-12 bg-gray-50 rounded-lg shadow-lg text-center mt-12">
//         <h2 className="text-2xl font-semibold text-gray-800">
//           AI Interview Prep
//         </h2>
//         <p className="text-muted-foreground mt-2 text-lg">
//           Prepare for your interviews with real-time AI feedback and interactive mock sessions.
//         </p>

//         <div className="mt-6">
//           <Link to="/interview">
//             <Button className="px-6 py-3 text-lg">
//               Start Practicing <Sparkles className="ml-2" />
//             </Button>
//           </Link>
//         </div>
        
//       </Container>

//       {/* marquee section */}
//       {/* <div className=" w-full my-12">
//         <Marquee pauseOnHover>
//           <MarqueImg img="/assets/img/logo/firebase.png" />
//           <MarqueImg img="/assets/img/logo/meet.png" />
//           <MarqueImg img="/assets/img/logo/zoom.png" />
//           <MarqueImg img="/assets/img/logo/firebase.png" />
//           <MarqueImg img="/assets/img/logo/microsoft.png" />
//           <MarqueImg img="/assets/img/logo/meet.png" />
//           <MarqueImg img="/assets/img/logo/tailwindcss.png" />
//           <MarqueImg img="/assets/img/logo/microsoft.png" />
//         </Marquee>
//       </div> */}

//       <Container className="py-8 space-y-8">
//         <h2 className="tracking-wide text-xl text-gray-800 font-semibold">
//           Unleash your potential with personalized AI insights and targeted
//           interview practice.
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
//           <div className="col-span-1 md:col-span-3">
//             <img
//               src="/assets/img/office.jpg"
//               alt=""
//               className="w-full max-h-96 rounded-md object-cover"
//             />
//           </div>

//           <div className="col-span-1 md:col-span-2 gap-8 max-h-96 min-h-96 w-full flex flex-col items-center justify-center text-center">
//             <p className="text-center text-muted-foreground">
//               Transform the way you prepare, gain confidence, and boost your
//               chances of landing your dream job. Let AI be your edge in
//               today&apos;s competitive job market.
//             </p>

//             <Link to={"/generate"} className="w-full">
//               <Button className="w-3/4">
//                 Generate <Sparkles className="ml-2" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default HomePage;


import { Sparkles } from "lucide-react";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24">
      <Container>
        <div className="my-8">
          <h2 className="text-3xl text-center md:text-left md:text-6xl">
            <span className=" text-outline font-extrabold md:text-8xl">
              AI Virtual Interview
            </span>
            <br />
            <span className="text-gray-500 font-extrabold">
                          - A better way to improve your interview chances and skills
            </span>
            <br />
            
          </h2>

          <p className="mt-4 text-muted-foreground text-sm">
            Boost your interview skills and increase your success rate with
            AI-driven insights. Discover a smarter way to prepare, practice, and
            stand out.
          </p>
        </div>

        <div className="w-full mt-4 rounded-xl bg-gray-100 h-[420px] drop-shadow-md overflow-hidden relative">
          <img
            src="/assets/img/hero.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 px-4 py-2 rounded-md bg-white/40 backdrop-blur-md">
            Inteviews Copilot&copy;
          </div>

          <div className="hidden md:block absolute w-80 bottom-4 right-4 px-4 py-2 rounded-md bg-white/60 backdrop-blur-md">
            <h2 className="text-neutral-800 font-semibold">Developer</h2>
            <p className="text-sm text-neutral-500">
            "Ace your interviews with AI-driven insights."
            </p>

            <Button className="mt-3">
              Generate <Sparkles />
            </Button>
          </div>
        </div>
      </Container>

      {/* AI Interview Prep Section */}
      <Container className="py-12 bg-gray-50 rounded-lg shadow-lg text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          AI Interview Prep
        </h2>
        <p className="text-muted-foreground mt-2 text-lg">
          Prepare for your interviews with real-time AI feedback and interactive mock sessions.
        </p>

        <div className="mt-6">
          <Link to="/interview">
            <Button className="px-6 py-3 text-lg">
              Start Practicing <Sparkles className="ml-2" />
            </Button>
          </Link>
        </div>
      </Container>
      

      {/* New Section: AI Interview Tips */}
      <Container className="py-12 bg-gray-50 rounded-lg shadow-lg text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          AI Interview Tips
        </h2>
        <p className="text-muted-foreground mt-2 text-lg">
          Enhance your interview skills with expert tips and AI-driven suggestions. Get personalized advice based on your performance.
        </p>

        <div className="mt-6">
          <Link to="/ai-interview-tips">
            <Button className="px-6 py-3 text-lg">
              Learn More <Sparkles className="ml-2" />
            </Button>
          </Link>
        </div>
      </Container>

      <Container className="py-8 space-y-8">
        <h2 className="tracking-wide text-xl text-gray-800 font-semibold">
          Unleash your potential with personalized AI insights and targeted
          interview practice.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div className="col-span-1 md:col-span-3">
            <img
              src="/assets/img/office.jpg"
              alt=""
              className="w-full max-h-96 rounded-md object-cover"
            />
          </div>

          <div className="col-span-1 md:col-span-2 gap-8 max-h-96 min-h-96 w-full flex flex-col items-center justify-center text-center">
            <p className="text-center text-muted-foreground">
              Transform the way you prepare, gain confidence, and boost your
              chances of landing your dream job. Let AI be your edge in
              today&apos;s competitive job market.
            </p>

            <Link to={"/generate"} className="w-full">
              <Button className="w-3/4">
                Generate <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
      
    </div>
  );
};

export default HomePage;


