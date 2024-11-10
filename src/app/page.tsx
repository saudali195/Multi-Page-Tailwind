import Footer from "@/components/footer";
export default function Home() {
  return (
    <div>
      <main className="flex items-center justify-center h-screen bg-black text-yellow-400">
        <div className="w-full text-center text-[30px] font-bold pl-4 space-y-4">
          <div className="marquee">
            <p className="text-white">Hi,</p>
            <p className="text-white">I am <span className="box text-white">Muhammad Saad Raza</span></p>
            <h1 className="text-white">Frontend Developer</h1>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
