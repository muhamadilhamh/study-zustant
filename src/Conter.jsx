
import {useCounterStore} from "./store";
import { Space, Table, Tag } from 'antd';

export const Counter = () => {

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>
  },
  {
    title: 'Url',
    dataIndex: 'url',
    key: 'url',
    render: (text) => <a>{text}</a>,
  },
 
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
    const counterNumber = useCounterStore(state => state.number)
    const increaseNumber = useCounterStore(state => state.increaseCounterNumber)
    const decreaseNumber = useCounterStore (state => state.decreaseConterNumber)
    const distributionNumber = useCounterStore(state => state.distributionConterNumber)
    const multiplicationNumber = useCounterStore(state => state.multiplicationNumber)
    const getPokemon = useCounterStore(state => state.fetchData);
    const pokomentList = useCounterStore(state => state.pokemon);
    console.log({pokomentList})
    const pokemontMap = pokomentList.map((item, index) => ({...item, key:index}))
    return (
        <>
        <div>
            <button onClick={increaseNumber}>+</button>
            {counterNumber}
            <button onClick={decreaseNumber}>-</button>
            <button onClick={distributionNumber}>/</button>
            <button onClick={multiplicationNumber}>*</button>
            <button onClick={getPokemon}>Fetch Data</button>
        </div>
        <Table columns={columns}  dataSource={pokemontMap} />
        </>
    )
}