
import { useCallback, useState } from 'react';
import Button from "../Button";


interface IProps {
    onSearch: any
}

const SearchInput: React.FC<IProps> = ({onSearch}) => {
  const [name, setName] = useState("");


  const onSearchChange = useCallback((e) => {
      setName(e.target.value)
  }, []);

  const onSubmit = useCallback(() => {
      onSearch(name)
  }, [name, onSearch]);

    const onKeyPressHandler = (e: any) => {
        if (e.charCode === 13) {
            onSubmit();
        }
    }

  return (
    <div className="flex justify-center items-center" >
      <input value={name} className= {'h-8 text-2xl border border-black mr-4'}
      onChange={onSearchChange} onKeyPress={onKeyPressHandler} />
      <Button onClick={onSubmit}>Submit</Button>
    </div>
  );
};

export default SearchInput;