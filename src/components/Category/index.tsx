import { Link } from "react-router-dom";

import * as S from "./styles";

export interface ICategory {
  id: string;
  name: "hat" | "shoes" | "jackets" | "women" | "men" | "kids";
  displayName: string;
  imageUrl: string;
}

export interface ICategoryProps {
  imageAlt?: string;
  redirectTo: string;
  gridArea: "hat" | "shoes" | "jackets" | "women" | "men" | "kids";
  category: ICategory;
}

const Category = ({
  imageAlt,
  redirectTo,
  gridArea,
  category
}: ICategoryProps) => {
  return (
    <S.CategoryContent gridArea={gridArea}>
      <S.CategoryImage
        src={category.imageUrl}
        alt={imageAlt}
        title={imageAlt}
      />

      <S.CategoryBody>
        <Link to={redirectTo}>
          <S.CategoryTitle>{category.displayName}</S.CategoryTitle>
        </Link>
      </S.CategoryBody>
    </S.CategoryContent>
  );
};

export default Category;
