'use client';
import useNamesStore from '@/stores';
import { useRouter } from 'next/navigation';

export default function page() {
  const router = useRouter();
  const { names } = useNamesStore();
  const handleClick = (name: string) => {
    router.push(`/names/${name}`);
  };
  return (
    <div>
      <p>Names List</p>
      <ul>
        {names.map((name: any, index: any) => (
          <li
            className="cursor-pointer"
            onClick={() => handleClick(name)}
            key={index}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
