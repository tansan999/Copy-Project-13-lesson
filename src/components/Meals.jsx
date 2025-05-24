import styled from "styled-components";
import { MealItem } from "./MealItem";

export const Meals = (props) => {
  const { DUMMY_MEALS } = props;

  return (
    <MealseWraper>
      <MealseContainer>
        {DUMMY_MEALS.map((meal) => {
          return <MealItem key={meal.id} {...meal} />;
        })}
      </MealseContainer>
    </MealseWraper>
  );
};

const MealseWraper = styled.div`
  min-height: 500px;
  background-color: ${({ theme }) => theme.colors.grey};
  padding-top: 200px;
`;

const MealseContainer = styled.div`
  border-radius: 16px;
  background: rgb(255, 255, 255);
  padding: 36px 40px;
  max-width: 1000px;
  margin: 0 auto;
`;
