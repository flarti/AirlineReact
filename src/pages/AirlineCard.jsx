import React from 'react';
import { Card, Button } from 'react-bootstrap';

const AirlineCard = ({ airline, selected, onSelect }) => {
  return (
    <Card
      className={`airline-card ${selected ? 'airline-card--selected' : ''}`}
      role="button"
      onClick={() => onSelect(airline.id)}
    >
      <Card.Body>
        <Card.Title className="mb-2 d-flex align-items-center justify-content-between">
          <span className="airline-card-title">{airline.title}</span>
          {selected && <span className="badge bg-success">Вибрано</span>}
        </Card.Title>

        <div className="text-center mb-3">
          <img
            src={airline.logoUrl}
            alt={`${airline.title} logo`}
            className="airline-card-img"
            width="150"
            height="150"
          />
        </div>

        <Card.Text className="text-muted small mb-3">
          {airline.description}
        </Card.Text>

        <div className="d-flex justify-content-between align-items-center">
          <div className="small">
            <strong>Код:</strong> {airline.code}
          </div>

          <Button
            variant={selected ? 'success' : 'outline-success'}
            size="sm"
            className="airline-card-btn"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(airline.id);
            }}
          >
            {selected ? 'Обрано' : 'Обрати'}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AirlineCard;
