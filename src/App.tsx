import { useState } from 'react';
import EduHistory from './components/forms/EduHistory';
import WorkExp from './components/forms/WorkExp';
import Spacer from './components/separator/Spacer';
import './_app.scss';
import { v4 as uuidv4 } from 'uuid';
import { Button } from './components/input/Button';
import { InputText } from './components/input/InputText';
import { InputEmail } from './components/input/InputEmail';
import { InputPhone } from './components/input/InputPhone';
import { InputURL } from './components/input/InputUrl';
import { InputTextArea } from './components/input/InputTextArea';

interface obj {
  id: string,
}

export default function App() {
  const [eduHistoryList, setEduHistoryList] = useState<obj[]>([]);
  const [workExpList, setWorkExpListList] = useState<obj[]>([]);

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

  return (
    <div className="app">
      <h1>Curriculum Vitae Creator</h1>
      <Spacer />
      <form action="">
        <div className="flex-container">
          <div className="flex-1">
            <h2>Personal information</h2>
          </div>
          <div className="flex-container flex-3">
            <div className="flex-container">
              <InputText id="name" name="name" icon="bi bi-fonts" placeholder="Nome" />
              <InputPhone id="phone" name="phone" icon="bi bi-telephone" placeholder="Telefone" />
              <InputEmail id="email" name="email" icon="bi bi-envelope" placeholder="Email" />
              <InputText id="address" name="address" icon="bi bi-geo-alt" placeholder="Endereço" />
              <InputURL id="linkedinurl" name="linkedinurl" icon="bi bi-linkedin" placeholder="LinkedIn" />
              <InputURL id="githuburl" name="githuburl" icon="bi bi-github" placeholder="GitHub" />
            </div>
            <InputTextArea id="adicionalinfo" name="adicionalinfo" icon="bi bi-card-text" title="Informações adicionais" />
          </div>
        </div>

        <Spacer />

        <div className="flex-container">
          <div className="flex-1">
            <h2>Education history</h2>
          </div>
          <div className="flex-container flex-3 flex-col">
            {
              eduHistoryList.map((singleEduHistory) => (
                <div key={singleEduHistory.id}>
                  <EduHistory className="flex-1" />
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
              workExpList.map((singleWorkExp) => (
                <div key={singleWorkExp.id}>
                  <WorkExp className="flex-1" />
                  <Button type="button" onClick={() => handleWorkExpRemove(singleWorkExp.id)}><i className="bi bi-trash-fill" /></Button>
                </div>
              ))
            }
            <Button type="button" onClick={handleWorkExpAdd}><i className="bi bi-plus-lg" /></Button>
          </div>
        </div>

        <Spacer />

        <div className="flex-container">
          <Button className="flex-1" type="button" onClick={() => alert("Wow, theres nothing here!!! 😬")}>Download .json</Button>
          <Button className="flex-1" type="button" onClick={() => alert("Wow, theres nothing here!!! 😬")}>Import .json</Button>
          <Button className="flex-1" type="button" onClick={() => alert("Wow, theres nothing here!!! 😬")}>Create CV</Button>
        </div>
      </form>
    </div>
  );
}