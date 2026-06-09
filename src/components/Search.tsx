import "./Search.css";

type Props = {
  value: string;
  disabled?: boolean;
  onChange: (newValue: string) => void;
};

const Search = ({ value, disabled, onChange }: Props) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    onChange(event.currentTarget.value);

  return (
    <input
      className="search-input"
      placeholder="Pesquisar"
      disabled={disabled}
      onChange={handleChange}
    />
  );
};

export default Search;
