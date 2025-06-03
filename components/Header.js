import Link from 'next/link';

export default function Header() {
  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="/counter">Counter</Link>
      <Link href="/todos">Todo List</Link>
    </nav>
  );
}