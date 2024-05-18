import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Arial, sans-serif';
  padding: 20px;
  background-color: #f4f4f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Title = styled.h1`
  color: #333;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const Label = styled.label`
  margin-right: 10px;
  @media (max-width: 768px) {
    margin-right: 5px;
  }
`;

export const Input = styled.input`
  margin-right: 10px;
  padding: 5px;
  @media (max-width: 768px) {
    margin-right: 5px;
    padding: 3px;
  }
`;

export const Select = styled.select`
  margin-right: 10px;
  padding: 5px;
  @media (max-width: 768px) {
    margin-right: 5px;
    padding: 3px;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  width: 90%;
  max-width: 600px;
  @media (max-width: 768px) {
    margin: 10px;
    padding: 10px;
    width: 100%;
  }
`;

export const QuestionText = styled.p`
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

export const Option = styled.label`
  display: block;
  margin: 5px 0;
  @media (max-width: 768px) {
    margin: 3px 0;
  }
`;

export const Result = styled.div`
  background-color: ${(props) => (props.correct ? '#d4edda' : '#f8d7da')};
  color: ${(props) => (props.correct ? '#155724' : '#721c24')};
  border: 1px solid ${(props) => (props.correct ? '#c3e6cb' : '#f5c6cb')};
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  @media (max-width: 768px) {
    padding: 8px;
    margin-top: 8px;
  }
`;

export const HistoryButton = styled(Button)`
  background-color: #28a745;
  &:hover {
    background-color: #218838;
  }
`;

export const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 800px;
  max-height: 80vh;
  overflow-y: auto;
  @media (max-width: 768px) {
    padding: 15px;
    width: 100%;
    max-width: none;
  }
`;

export const HistoryItemCard = styled(Card)`
  cursor: pointer;
`;

export const DetailedPopup = styled(PopupContent)`
  width: 90%;
  max-width: 600px;
`;

export const ResultContainer = styled.div`
  background-color: ${(props) => (props.correct ? '#d4edda' : '#f8d7da')};
  color: ${(props) => (props.correct ? '#155724' : '#721c24')};
  border: 1px solid ${(props) => (props.correct ? '#c3e6cb' : '#f5c6cb')};
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  @media (max-width: 768px) {
    padding: 8px;
    margin-top: 8px;
  }
`;
