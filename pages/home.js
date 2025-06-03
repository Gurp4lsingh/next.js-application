import Header from '../components/Header';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <h1>Welcome to My React App</h1>
        <p>This is a demonstration of foundational front-end development concepts.</p>
        <p>Use the navigation above to explore different features.</p>
      </main>
    </div>
  );
}