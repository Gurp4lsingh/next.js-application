import Header from '../components/Header';
import Counter from '../components/Counter';

export default function CounterPage() {
  return (
    <div className="container">
      <Header />
      <main>
        <Counter />
      </main>
    </div>
  );
}