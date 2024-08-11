import {
  Categories,
  Container,
  SortPopup,
  Title,
  TopBar,
  Filters,
  ProductCard,
  ProductGroupList,
} from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="pb-14">
          <div className="flex gap-[80px]">
            <div className="w=[250px]">
              <Filters />
            </div>
            <div className="flex-1">
              <div className="flex flex-col gap-16">
                <ProductGroupList
                  title="Пиццы"
                  categoryId={1}
                  items={[
                    {
                      id: 1,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                      price: 500,
                      items: [{ price: 550 }],
                    },
                    {
                      id: 2,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                      price: 500,
                      items: [{ price: 550 }],
                    },
                    {
                      id: 3,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                      price: 500,
                      items: [{ price: 550 }],
                    },
                    {
                      id: 4,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                      price: 500,
                      items: [{ price: 550 }],
                    },
                    {
                      id: 5,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                      price: 500,
                      items: [{ price: 550 }],
                    },
                    {
                      id: 6,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                      price: 500,
                      items: [{ price: 550 }],
                    },
                    {
                      id: 7,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                      price: 500,
                      items: [{ price: 550 }],
                    },
                  ]}
                />
                <ProductGroupList
                  title="Завтраки"
                  categoryId={2}
                  items={[
                    {
                      id: 1,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                      price: 500,
                      items: [{ price: 550 }],
                    },
                    {
                      id: 2,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                      price: 500,
                      items: [{ price: 550 }],
                    },
                    {
                      id: 3,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                      price: 500,
                      items: [{ price: 550 }],
                    },
                    {
                      id: 4,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                      price: 500,
                      items: [{ price: 550 }],
                    },
                    {
                      id: 5,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                      price: 500,
                      items: [{ price: 550 }],
                    },
                    {
                      id: 6,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                      price: 500,
                      items: [{ price: 550 }],
                    },
                    {
                      id: 7,
                      name: 'Чизбургер-пицца',
                      imageUrl:
                        'https://media.dodostatic.net/image/r:584x584/11EE7D60FDA22358AC33C6A44EB093A2.avif',
                      price: 500,
                      items: [{ price: 550 }],
                    },
                  ]}
                />
                {/* <ProductGroupList title="Пиццы" items={[1, 2, 3, 4, 5]} />
                <ProductGroupList title="Пиццы" items={[1, 2, 3, 4, 5]} /> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
