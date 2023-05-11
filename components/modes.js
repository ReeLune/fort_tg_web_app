import { useData } from '@/hooks/useData';

const Modes = () => {
  const { data } = useData('https://fortniteapi.io/v1/game/modes?lang=ru');
  return (
    <div className="p-4 grid grid-cols-[repeat(auto-fill,_minmax(20rem,_1fr))] gap-2">
      {data?.modes?.map((obj) =>
        obj?.enabled == true ? (
          <div className="relative bg-gray-900" key={obj.id}>
            <img className="opacity-50 w-full object-cover" src={obj.image} alt={obj.name} />
            <div className="h-26 z-10 absolute w-full bottom-0 shadow-md backdrop-filter backdrop-blur-lg backdrop-saturate-150">
              <h4 className="m-4 mb-2 ml-4 mt-4 text-xl font-bold">{obj.name}</h4>
              <div className="ml-4 mb-4 mt-2 text-base">
                Максимально число в команде {obj.maxTeamSize}
              </div>
            </div>
          </div>
        ) : (
          ''
        ),
      )}
    </div>
  );
};

export default Modes;
