import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { useLocalStorage } from './hooks/useLocalStorage';
import Menu from './components/menu/Menu';
import AirlineCard from './pages/AirlineCard.jsx';
import './App.css';

import skylineLogo from './assets/skyline.jpg';
import greenwingsLogo from './assets/greenwings.jpg';
import eagleairLogo from './assets/eagleair.jpg';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

const airlinesData = [
  { id: 1, title: 'Skyline Airlines', description: 'Комфортні авіарейси по Україні та світу.', logoUrl: skylineLogo, code: 'SLA', price: 2500 },
  { id: 2, title: 'GreenWings', description: 'Екологічно чисті рейси та сучасний флот.', logoUrl: greenwingsLogo, code: 'GWG', price: 2200 },
  { id: 3, title: 'Eagle Air', description: 'Premium experience with business.', logoUrl: eagleairLogo, code: 'EGA', price: 3200 },
];

const NotFound = () => (
  <div className="container py-5">
    <h1 className="h4 mb-2">Сторінку не знайдено</h1>
    <p className="text-muted">Здається, URL некоректний.</p>
  </div>
);

function AirlinesPage() {
  const [selectedId, setSelectedId] = useLocalStorage('selectedAirlineId', null); 

  return (
    <div className="container py-4">
      <h1 className="h4 mb-4">Авіакомпанії</h1>
      <div className="row g-4">
        {airlinesData.map((airline) => (
          <div key={airline.id} className="col-12 col-sm-6 col-lg-4">
            <AirlineCard
              airline={airline}
              selected={airline.id === selectedId}
              onSelect={setSelectedId}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <section className="app">
      <header className="app-header">
        <Menu />
      </header>

      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airlines" element={<AirlinesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </section>
  );
}

export default App;
