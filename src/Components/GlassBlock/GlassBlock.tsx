import style from './glassBlock.module.scss';

export const GlassBlock = () => {
  return (
    <div className={style['glass-block']}>
      <p className={style['glass-block__text']}>
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
        TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
      </p>

      <div className={style['glass-block__glass-item']}>
        <img src="favicon/favicon.svg" alt="icon" />
        <img src="icons/logo.svg" alt="logo" />
      </div>
    </div>
  );
};
