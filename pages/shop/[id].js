import { Layout } from '@/components';
import Link from 'next/link';

export async function getServerSideProps({ params: { id } }) {
  const res = await fetch(`https://fortniteapi.io/v2/items/get?id=${id}&lang=ru`, {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_API,
    },
  });
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
}

const ShopAll = ({ data }) => {
  const details = data?.item;
  return (
    <Layout>
      <div className="h-screen m-auto p-4 grid grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))] gap-2">
        {[details]?.map((obj) => (
          <div className="text-center" key={obj.id}>
            <Link className="text-left text-2xl" href="/shop">
              &#8592; Назад в магазин
            </Link>
            <img className="my-4" src={obj.images.background} alt={obj.name} />
            <h3 className="my-2 text-xl">{obj.name}</h3>
            <div>
              <ul className="my-2 text-base">
                <li>{obj?.type?.name}</li>
                <li> {obj?.introduction?.text}</li>
                <li> Дата выхода {obj.releaseDate}</li>
                <li>Последний раз в магазине {obj.lastAppearance}</li>
                <li>{obj?.description}</li>
                <li> {obj?.set?.partOf}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ShopAll;
