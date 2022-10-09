import { inject, observer } from "mobx-react";

export interface HomeProps {
  id?: string;
}

const Home = ({ id }: HomeProps) => {
  return (
    <div>
      {id}
      <h1>Home Page</h1>
    </div>
  );
};

export default inject(({ userStore }) => {
  const { id } = userStore;
  return { id };
})(observer(Home));
