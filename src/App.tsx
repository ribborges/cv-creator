import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from './components/input/Button';

import PersonalInfo from './components/forms/PersonalInfo';
import EduHistory from './components/forms/EduHistory';
import WorkExp from './components/forms/WorkExp';
import Spacer from './components/separator/Spacer';

import './_app.scss';

interface obj {
  id: string,
}

export default function App() {
  const [eduHistoryList, setEduHistoryList] = useState<obj[]>([]);
  const [workExpList, setWorkExpListList] = useState<obj[]>([]);
  const [formData, setFormData] = useState({});

  const handleEduHistoryAdd = () => {
    setEduHistoryList([...eduHistoryList, { id: uuidv4() }]);
  };

  const handleWorkExpAdd = () => {
    setWorkExpListList([...workExpList, { id: uuidv4() }]);
  };

  const handleEduHistoryRemove = (id: string) => {
    setEduHistoryList(eduHistoryList.filter(singleEduHistory => singleEduHistory.id !== id));
  };

  const handleWorkExpRemove = (id: string) => {
    setWorkExpListList(workExpList.filter(singleWorkExp => singleWorkExp.id !== id));
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleExportJson = (event: any) => {
    event.preventDefault();
    const jsonData = JSON.stringify(formData, null, 2);
    const fileData = new Blob([jsonData], { type: 'application/json' });
    const fileUrl = URL.createObjectURL(fileData);
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'cv-creator-data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="app">
      <h1>Curriculum Vitae Creator</h1>
      <Spacer />
      <form onSubmit={handleExportJson}>
        <div className="flex-container">
          <div className="flex-1">
            <h2>Personal information</h2>
          </div>
          <PersonalInfo className="flex-3" onChange={handleInputChange}/>
        </div>

        <Spacer />

        <div className="flex-container">
          <div className="flex-1">
            <h2>Education history</h2>
          </div>
          <div className="flex-container flex-3 flex-col">
            {
              eduHistoryList.map((singleEduHistory, index) => (
                <div key={singleEduHistory.id}>
                  <EduHistory id={index.toString()} className="flex-1" onChange={handleInputChange} />
                  <Button type="button" onClick={() => handleEduHistoryRemove(singleEduHistory.id)}><i className="bi bi-trash-fill" /></Button>
                </div>
              ))
            }
            <Button type="button" onClick={handleEduHistoryAdd}><i className="bi bi-plus-lg" /></Button>
          </div>
        </div>

        <Spacer />

        <div className="flex-container">
          <div className="flex-1">
            <h2>Work experience</h2>
          </div>
          <div className="flex-container flex-3 flex-col">
            {
              workExpList.map((singleWorkExp, index) => (
                <div key={singleWorkExp.id}>
                  <WorkExp id={index.toString()} className="flex-1" onChange={handleInputChange} />
                  <Button type="button" onClick={() => handleWorkExpRemove(singleWorkExp.id)}><i className="bi bi-trash-fill" /></Button>
                </div>
              ))
            }
            <Button type="button" onClick={handleWorkExpAdd}><i className="bi bi-plus-lg" /></Button>
          </div>
        </div>

        <Spacer />

        <div className="flex-container">
          <Button className="flex-1" type="submit">Download .json</Button>
          <Button className="flex-1" type="button" onClick={() => alert("Wow, theres nothing here!!! 😬")}>Import .json</Button>
          <Button className="flex-1" type="button" onClick={() => alert("Wow, theres nothing here!!! 😬")}>Create CV</Button>
        </div>
      </form>
    </div>
  );
}