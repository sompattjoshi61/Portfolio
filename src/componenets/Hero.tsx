import reactLogo from "../assets/react.png";
import emailLogo from "../assets/Email.png";
import msgLogo from "../assets/Paper Plane.png";
import arrowOne from "../assets/Arrow1.png";
import GitLogo from "../assets/GitHub.png";
import bgImage from "../assets/background.png";
import skillsImg from "../assets/SKILLSTXT.png";
import linkedIn from "../assets/Lin.png";
import tweet from "../assets/tweet.png";
import profile from "../assets/Profiles.jpg"
import arrowTwo from "../assets/Arrow2.png";

export default function Hero() {
  // Custom slow spin animation style
  const slowSpin = {
    animation: "spin 15s linear infinite",
  };

  return (
    <section
      className="relative min-h-screen pt-32 px-6 md:px-16 text-white overflow-hidden bg-black"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* 1. TOP HERO TEXT */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-4xl flex items-center gap-2">
            Hi <span className="animate-bounce">👋</span>
          </h2>

          <h1 className="text-4xl md:text-7xl font-semi-bold font-mono leading-tight tracking-tighter">
            {"<h1>"} soumyaranjan <br />
            Pattjoshi {"</h1>"}
          </h1>

          <div className="flex gap-4 pt-4">
            <button className="bg-white text-black px-8 py-2.5 rounded-full font-bold hover:scale-105 transition-all">
              Resume
            </button>
            <button className="bg-white/10 border border-white/20 backdrop-blur-md px-8 py-2.5 rounded-full hover:bg-white/20 transition-all">
              Know More
            </button>
          </div>
        </div>

        {/* 2. LOWER SECTION (Profile + About) */}
        <div className="mt-40 flex flex-col md:flex-row items-end gap-10 pb-20">
          <div className="w-48 h-56 bg-zinc-800 rounded-xl flex-shrink-0 border border-white/10 overflow-hidden relative shadow-2xl">
            <img
              src={profile}
              alt="Soumyaranjan Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w pb-2 relative -mt-48"> {/* Changed from -mt-24 to -mt-48 */}
            <h2 className="text-4xl font-bold leading-tight">
              Passionate about building tools & SaaS <br />
              <span className="text-zinc-400">that really impact !</span>
            </h2>
            <p className="text-zinc-400 mt-4 text-sm leading-relaxed">
              Hey, I'm Soumyaranjan — Full-Stack Developer & AI Enthusiast skilled in
              Generative AI, NLP, Deep Learning, and Data Visualization.
            </p>
          </div>
        </div>
      </div>

      {/* 3. FLOATING ICONS (With Inline Spinning) */}
      <div className="hidden lg:block">
        <img
          src={GitLogo}
          style={slowSpin}
          className="absolute top-24 right-48 w-20 opacity-80"
          alt="GitHub"
        />
        <img
          src={reactLogo}
          style={{ animation: "spin 20s linear infinite reverse" }}
          className="absolute top-48 right-48 w-32 md:w-36 opacity-90 transition-all"
          alt="React"
        />
        <img
          src={emailLogo}
          className="absolute top-48 right-10 w-20 animate-spin-very-slow"
          alt="Email"
        />
        <img
          src={msgLogo}
          style={{ animation: "spin 15s linear infinite" }}
          className="absolute left-3/4 top-1/3 -translate-y-1/2 -translate-x-1/2 ml-48 w-24 md:w-28 opacity-90 transition-all"
          alt="Message"
        />
        <img
          src={linkedIn}
          style={{ animation: "spin 15s linear infinite" }}
          className="absolute left-3/4 top-1/4 -translate-y-1/2 -translate-x-1/2 -ml-24 w-16 opacity-90 transition-all"
          alt="LinkedIn"
        />
        <img
          src={tweet}
          style={{ animation: "spin 15s linear infinite" }}
          className="absolute left-3/4 top-1/2 -translate-y-1/2 -translate-x-1/2 -mt-12 w-20 opacity-90 rotate-20 transition-all"
          alt="tweet"
        />

        <img
          src={arrowOne}
          className="absolute left-3/4 top-1/2 -translate-y-1/2 -translate-x-1/2 mt-12 -ml-24 w-32 opacity-90 transition-all"
          alt="decoration"
        />
        <img
          src={arrowTwo}
          className="absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2 mt-12 ml-24 w-55 opacity-90 transition-all"
          alt="arrowTwo"
        />
      </div>

      {/* 4. THE VERTICAL SKILLS IMAGE (At the bottom-right end) */}
      <div className="absolute right-0 bottom-10 z-20">
        <img
          src={skillsImg}
          alt="Skills"
          className="w-32 md:w-44 opacity-0"
        />
        <img
          src={skillsImg}
          alt="Skills"
          className="absolute right-4 bottom-5 w-20 opacity-90"
        />
      </div>

      {/* Standard CSS for the spin keyframe if Tailwind's animate-spin is missing */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </section>
  );
}