import reactLogo from "../assets/react.png";
import emailLogo from "../assets/Email.png";
import msgLogo from "../assets/Paper Plane.png";
import arrowOne from "../assets/Arrow1.png";
import GitLogo from "../assets/GitHub.png";
import bgImage from "../assets/background.png";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen pt-32 px-16 text-white overflow-hidden bg-black"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h1 className="text-2xl flex items-center gap-2">
            Hi <span>👋</span>
          </h1>

          <h1 className="text-4xl md:text-5xl font-bold font-mono leading-tight">
            {"<h1> soumyaranjan"} <br />
            {"Pattjoshi </h1>"}
          </h1>

          <div className="flex gap-4">
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
              Resume
            </button>
            <button className="bg-white/10 border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
              Know More
            </button>
          </div>
        </div>

        {/* RIGHT FLOATING ICONS */}
        <div className="relative h-[400px]">

          <img
            src={GitLogo}
            className="absolute top-10 right-20 w-20 animate-spin-very-slow"
            alt="GitHub"
          />

          <img
            src={reactLogo}
            className="absolute top-40 right-40 w-20 animate-spin-very-slow"
            alt="React"
          />

          <img
            src={emailLogo}
            className="absolute bottom-32 right-24 w-16 animate-spin-very-slow"
            alt="Email"
          />

          <img
            src={msgLogo}
            className="absolute bottom-16 right-44 w-16 animate-spin-very-slow"
            alt="Message"
          />
        </div>
      </div>

      {/* ABOUT CARD */}
      <div className="mt-24 max-w-xl bg-black/60 backdrop-blur-lg border border-white/10 rounded-xl p-6">
        <h2 className="text-xl font-semibold">
          Passionate about building tools & SaaS
        </h2>
        <p className="text-gray-300 mt-2 text-sm">
          that really impact!
          <br />
          I’m Soumyaranjan — Full-Stack Developer & AI enthusiast building
          scalable, performant, and beautifully designed products.
        </p>
      </div>

      {/* SCROLL ARROW */}
      <img
        src={arrowOne}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-10 animate-bounce"
        alt="Scroll"
      />

      {/* SKILLS LABEL */}
      <div className="absolute right-4 bottom-32 rotate-90 text-gray-400 tracking-widest">
        SKILLS
      </div>
    </section>
  );
}
