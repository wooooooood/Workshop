import {useState, useCallback} from 'react';

function reducer(state, action){
  //change
  //reset
}

function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm); //숙제: UseReducer로 구현
  const onChange = useCallback(e => {
    const {name, value} = e.target;
    setForm(form => ({...form, [name]: value}));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  
  return [form, onChange, reset];
};

export default useInputs;
