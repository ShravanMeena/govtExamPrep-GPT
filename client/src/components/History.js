import React from 'react';
import { Popup, PopupContent, HistoryItemCard, Button } from '../styles';

const History = ({ history, handleHideHistory, handleSelectHistoryItem }) => (
  <Popup>
    <PopupContent>
      <Button onClick={handleHideHistory}>Close</Button>
      {history.map((item) => (
        <HistoryItemCard key={item.id} onClick={() => handleSelectHistoryItem(item)}>
          <h3>{item.examName} - {item.difficulty}</h3>
          <p>Generated: {item.generateDate}</p>
          {item.submitDate && <p>Submitted: {item.submitDate}</p>}
          {item.score !== undefined && <p>Score: {item.score}</p>}
        </HistoryItemCard>
      ))}
    </PopupContent>
  </Popup>
);

export default History;
