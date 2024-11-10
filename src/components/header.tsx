import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-navy text-white h-16 flex items-center justify-center space-x-6 text-lg">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/about-us" className="hover:underline">About</Link>
      <Link href="/contact" className="hover:underline">Contact</Link>
    </header>
  );
}
