const EmptyPageInfo = () => {

  const textStyle = 'text-secondary mx-auto h3 m-5';


  return (
    <div className='card'>
      <p className={textStyle}>Nie masz żadnej wspinaczki ;(</p>
      <p className={textStyle}>Dodaj coś ;)</p>
    </div>
  );
};

export default EmptyPageInfo;
