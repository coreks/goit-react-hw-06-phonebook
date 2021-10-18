import s from '../MainContainer/MainContainer.module.css';

const MainContainer = ({ children }) => (
  <div className={s.mainContainer}>{children}</div>
);

export default MainContainer;
