import { useState } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

export default function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    // add data to queue
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }]);
  };

  const updateStatus = (id, newStatus) => {
    // change data in queue
    setQueue(
      queue.map((customer) =>
        customer.id === id ? { ...customer, status: newStatus } : customer,
      ),
    );
  };

  const removeFromQueue = (id) => {
    // remove data from the queue
    setQueue(queue.filter((customer) => customer.id !== id));
  };

  return (
    <div className="app">
      <header>
        <h1>Queue Management Application</h1>
        <p>Manage your customer efficiently</p>
      </header>
      <main>
        <QueueForm onAdd={addToQueue} />
        <QueueDisplay
          queue={queue}
          onUpdateStatus={updateStatus}
          onRemove={removeFromQueue}
        />
      </main>
    </div>
  );
}
