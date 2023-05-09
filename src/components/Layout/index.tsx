import { Header } from "./Header";
import { Main } from "./Main";
import { FC, ReactNode } from 'react';

type Props = {
      children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
      return (
            <>
                  <Header />
                  <Main>{children}</Main>
            </>
      );
}

export { Layout }