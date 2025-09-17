import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="container py-4">
    <section className="p-4 p-md-5 rounded-3 border bg-white mb-4">
      <h1 className="h3 mb-2 text-success">Легке бронювання авіарейсів</h1>
      <p className="text-muted mb-3">Обирайте перевізника, порівнюйте умови та бронюйте квитки за кілька кліків.</p>
      <Button as={Link} to="/airlines" variant="success">Переглянути авіакомпанії</Button>
    </section>

    <section className="row g-3">
      <div className="col-12 col-md-6">
        <div className="p-3 rounded-3 border bg-white h-100">
          <h2 className="h5 mb-2">Надійні перевізники</h2>
          <p className="text-muted mb-0">Лише перевірені авіакомпанії та актуальні пропозиції.</p>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="p-3 rounded-3 border bg-white h-100">
          <h2 className="h5 mb-2">Design</h2>
          <p className="text-muted mb-0">Designed by Orest.</p>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
