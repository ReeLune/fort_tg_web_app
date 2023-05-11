import { useData } from '@/hooks/useData';

const achievementsCard = () => {
  const { data } = useData(' https://fortniteapi.io/v1/achievements?lang=ru');
  return (
    <div className="p-4 grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-2">
      {data?.achievements?.map((obj) => (
        <div className="relative bg-gray-900" key={obj.id}>
          <img className="opacity-70 w-full object-cover" src={obj.image} alt={obj.name} />
          <div className="h-36 z-10 absolute w-full bottom-0 shadow-md backdrop-filter backdrop-blur-lg backdrop-saturate-150">
            <h4 className="m-4 mb-4 ml-4 mt-4 text-xl font-bold">{obj.name}</h4>
            <p className="mr-4 mb-4 ml-4 text-base">{obj.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default achievementsCard;
