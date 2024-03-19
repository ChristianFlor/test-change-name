'use client';
import useNamesStore from '@/stores'; // Ajusta la ruta de importación según sea necesario

// Opcional: Crea una interfaz para los estados del store si aún no existe una
interface NamesState {
  names: string[];
}

const NamePage = ({ params }: any) => {
  const name = params.name;

  const names = useNamesStore((state: NamesState) => state.names);

  const nameCount = names.filter((n) => n === name).length;

  return (
    <div>
      <h1>{name}</h1>
      <p>This name appears {nameCount} times in the array.</p>
    </div>
  );
};

export default NamePage;
