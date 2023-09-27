import { Link } from "react-router-dom";
import * as S from "./styles";

export interface ICategoryProps {
  imageUrl: string;
  imageAlt?: string;
  title: string;
  redirectTo: string;
  gridArea: "hat" | "shoes" | "jacket" | "female" | "male";
}

const Category = ({
  imageUrl,
  imageAlt,
  title,
  redirectTo,
  gridArea
}: ICategoryProps) => {
  return (
    <S.CategoryContent gridArea={gridArea}>
      <S.CategoryImage src={imageUrl} alt={imageAlt} title={imageAlt} />

      <S.CategoryBody>
        <Link to={redirectTo}>
          <S.CategoryTitle>{title}</S.CategoryTitle>
        </Link>
      </S.CategoryBody>
    </S.CategoryContent>
  );
};

export default Category;
