import CreateItem from '../components/CreateItem';
import { useRouter } from 'next/router';

const Sell = props => {
  const router = useRouter();
  return (
    <div>
      <CreateItem router={router}/>
    </div>
  )
};

export default Sell;
