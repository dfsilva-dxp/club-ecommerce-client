import { Category, Content, Header } from "@/components";

import { categories } from "@/mocks/categories";

const Home = () => {
  return (
    <div>
      <Header />
      <Content>
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            gridArea={category.name}
            redirectTo="/hat"
          />
        ))}
      </Content>
    </div>
  );
};

export default Home;
