import { 
    Table,
    Row,
    Col,
    Tooltip,
    User,
    Text
} from '@nextui-org/react';
import { IconButton } from './Icons/IconButton';
import { EyeIcon } from './Icons/EyeIcon';
import { EditIcon } from './Icons/EditIcon';
import { DeleteIcon } from './Icons/DeleteIcon';
import { products } from './data';


const Cart = () => {
  const columns = [
    { name: '', uid: 'img'},
    { name: 'PRODUCT NAME', uid: 'name'},
    { name: 'CATEGORY', uid: 'category'},
    { name: 'PRICE', uid: 'price'},
    { name: 'STATUS', uid: 'status'},
    { name: 'QUANTITY', uid: 'quantity'},
    { name: '', uid: 'actions'}
  ];

  const renderCell = (products, columnKey) => {
    const cellValue = products[columnKey];
    switch(columnKey) {
        case 'img':
        return (
            <User squared src={products.image} name={cellValue} css={{ p: 0 }}/>
            );
        case 'name':
            return (
                <Text b size={13} css={{ tt: 'capitalize'}}>
                    {cellValue}
                </Text>
            );
        case 'category':
            return (
                <Text b size={13} css={{ tt: 'capitalize'}}>
                    {cellValue}
                </Text>
            );
        case 'price':
            return (
                <Text b size={13} css={{ tt: 'capitalize' }}>
                    {cellValue}
                </Text>
            );
        case 'status':
            return (
                <Text b size={14} css={{ tt: 'capitalize' }}>
                {cellValue}
                </Text>
            )
    }
  }
}

export default Cart
