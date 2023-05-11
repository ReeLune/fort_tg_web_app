import { useData } from '@/hooks/useData';
import Link from 'next/link';

const ShopCard = () => {
  const { data } = useData('https://fortniteapi.io/v2/shop?lang=ru');
  return (
    <div className="p-4 grid grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))] gap-2">
      {data?.shop?.map((obj, i) => (
        <div key={obj.offerId}>
          <Link href={`shop/${obj.mainId}`} className="relative">
            <img className="w-full" src={obj.granted[0].images.background} alt={obj.section.name} />
            <div className="z-10 absolute bottom-0 shadow-md backdrop-filter backdrop-blur-lg backdrop-saturate-150 p-2 absolute text-center w-full ">
              <h3 className="text-base uppercase font-bold">{obj.displayName}</h3>
            </div>
          </Link>
          <div className="p-2 w-full bg-gray-900 align-center justify-center flex">
            <div>{obj.price.finalPrice}</div>
            <img
              className="w-5 ml-2 object-cover"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.giveawaymonkey.com%2Fwp-content%2Fuploads%2F2018%2F08%2Fgem.png&f=1&nofb=1&ipt=1bb11e3ff7a397ee9fdd7dd27846340a90de901e870421cd5e09123d889f88f2&ipo=images"
              alt="vbucks"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopCard;
