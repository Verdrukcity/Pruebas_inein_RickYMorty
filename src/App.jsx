import './App.css'
import { useQuery } from '@tanstack/react-query';
import Card from './common/Card';
import { useDispatch } from 'react-redux';
import { info } from './Redux/Reducer';

function App() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://rickandmortyapi.com/api/character/').then(
        (res) => res.json(),
      ),
  });
  console.log(data)
  const dispatch =useDispatch();
  if(data){
    dispatch(info(data))
  }
  return (
    <div className="App">
      <div className='cardsContainer'>
         {error
        ? <div>Hubo un error, por favor recarga la pagina</div>
        : (isLoading
          ? <div>Cargando...</div>
          : (data
            ? (data.results.map(e => {
              return (<Card name={e.name} status={e.status} species={e.species} image={e.image} key={e.id} id={e.id}></Card>)
            }))
            : <div>oops Algo salio mal con tu coneccion</div>))}
      </div>
            
    </div>
  )
}

export default App
