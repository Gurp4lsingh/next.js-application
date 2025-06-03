import Header from '../components/Header';
import TodoList from '../components/TodoList';

export default function TodosPage() {
  return (
    <div className="container">
      <Header />
      <main>
        <TodoList />
      </main>
    </div>
  );
}