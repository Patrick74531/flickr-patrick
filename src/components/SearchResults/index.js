import { useParams } from 'react-router-dom';

const SearchReasult = () => {
  const params = useParams();
  console.log(params.querryText);
  return <p>search results for {params.querryText}</p>;
};

export default SearchReasult;
