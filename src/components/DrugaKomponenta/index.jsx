const DrugaKomponenta = ({num}) => {

  const isEven = (mynum) => {
    
    let result = mynum % 2;
    return (result ? 'je neparan.' : 'je paran.');
  };

  return (
    <div>
      <h1>Odabrani broj je {num}.</h1>
      <h1>Broj {num} {isEven(num)}</h1>
    </div>
  );
};

export default DrugaKomponenta;
