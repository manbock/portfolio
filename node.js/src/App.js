import './App.css';
import Profile from './components/Profile';
function App() {
  return(
    <>
    <Profile 
      img="http://file3.instiz.net/data/file3/2020/01/01/7/9/e/79e24900de8aa88a8ebb8ec179e0c431.jpg" 
      name="김혜지" 
      title="치위생사"
    />    
    <Profile 
      img="https://www.famousbirthdays.com/headshots/quinton-jackson-3.jpg" name="박하영"
      title="태닝 모델"
      isNew={true}
    />    
    <Profile 
      img="http://file3.instiz.net/data/file3/2019/11/08/e/f/d/efd5a6d687f67d300ed4665ea3bd5d91.jpg" 
      name="이아름" 
      title="헤어 아티스트"
    />    
    </>
  );
}

export default App;
