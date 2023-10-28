import Claculator from "./components/Claculator";
import IAMGES from "./images/Images";

export default function App() {
  return (
    <>
      <main className="flex min-h-screen w-full items-center justify-center bg-neutral-200 font-space-mono">
        <div className="mb-10 w-full sm:w-10/12  md:mb-0 lg:w-8/12">
          {/* logo */}
          <section className="mb-12">
            <img src={IAMGES.logo} alt="logo" className="mx-auto" />
          </section>
          {/* calculator */}
          <Claculator />
        </div>
      </main>
    </>
  );
}
