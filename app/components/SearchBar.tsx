interface Props {
    query: string;
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  export function SearchBar({ query, onSearch }: Props) {
    return (
      <div className="mt-4 text-center">
        <input
          type="text"
          placeholder="Rechercher un Pokémon..."
          value={query}
          onChange={onSearch}
          className="p-2 border rounded-lg w-full max-w-md mx-auto"
        />
      </div>
    );
  }
  