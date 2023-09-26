import logo from './logo.svg';
import './App.css';
import MyForm from './Components/1_Basic_Hook_Form';
// import MyForm1 from './Components/RHF/2_RHF_InputFields';'
import MyForm1 from './Components/RHF/2_RHF_InputFields';
import InputValidationForm from './Components/RHF/3_RHF_Validation';
import CustomErrorMessage from './Components/RHF/4_RHF_CustomErrorMessage';

function App() {
  return (
    <div className="App">
      <CustomErrorMessage />
      {/* <InputValidationForm /> */}
      {/* use MyForm1 */}
      {/* <MyForm1 /> */}
      {/* <MyForm /> */}
    </div>
  );
}

export default App;
