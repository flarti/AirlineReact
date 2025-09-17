import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="container py-4">
    <h1 className="h4 mb-3">Про сервіс</h1>
    <p className="text-muted">
      Created by Orest.
    </p>

    <div className="row g-3">
      <div className="col-12 col-lg-6">
        <div className="p-3 rounded-3 border bg-white h-100">
          <h2 className="h6 mb-2">Функціональність</h2>
          <ul className="mb-0">
            <li>Перегляд авіакомпаній та вибір компанії.</li>
            <li>Мінімалістичний інтерфейс з темно‑зеленими акцентами.</li>
            <li>Навігація між сторінками без перезавантаження.</li>
          </ul>
        </div>
      </div>

      <div className="col-12 col-lg-6">
        <div className="p-3 rounded-3 border bg-white h-100">
          <h2 className="h6 mb-2">Технології</h2>
          <ul className="mb-0">
            <li>React + React Router v6.</li>
            <li>React‑Bootstrap та Bootstrap 5.</li>
            <li>Vite для швидкої збірки.</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-4">
      <Button as={Link} to="/airlines" variant="outline-success">
        До авіакомпаній
      </Button>
    </div>
  </div>
);

export default About;
