
import styles from './select.module.scss';
import IProducts from '../../interfaces/IProducts';

interface Props {
  change: (value: string) => void,
  productList: IProducts[]
}


export default function Select(props: Props) {


  return (
    <div className={styles.container}>
      <label htmlFor="product">Produto</label>
      <select defaultValue={'0'} name="select" id="product" className={styles.container__select} onChange={event => props.change(event.target.value)}>

        <option value="0" disabled>Selecione um produto</option>
        
        {props.productList.map((product) => (
          <option key={product.id} value={product.id}>{product.nome.toUpperCase()}</option>
        ))}

      </select>
    </div>
  );
}
