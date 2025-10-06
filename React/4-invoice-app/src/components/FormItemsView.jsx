import { useEffect, useState } from "react";


export const FormItemsView = ({ handler }) => {

    const [formItemState, setFormItemState] = useState({
        product: '',
        price: '',
        quantity: ''
    });

    const { product, price, quantity } = formItemState;

    useEffect(() => {
        //console.log('El precio cambió');
    }, [price]);

    useEffect(() => {
        //console.log('El formulario cambió');
    }, [formItemState]);

    const onInputChange = ({ target: { name, value } }) => {
        //console.log(name);
        //console.log(value);
        setFormItemState({
            ...formItemState,
            [name]: value
        });
    }

    const onInvoiceItemSubmit = (event) => {
        event.preventDefault();

        if (product.trim().length <= 1) return;
        if (price.trim().length <= 1) return;
        if (quantity.trim().length < 1) return;
        if (isNaN(price.trim())) {
            alert('El precio debe ser un número');
            return;
        }
        if (isNaN(quantity.trim())) {
            alert('La cantidad debe ser un número');
            return;
        }

        handler(formItemState);

        setFormItemState({
            product: '',
            price: '',
            quantity: ''
        });
    }

    return (<>
        <form className="w-50" onSubmit={onInvoiceItemSubmit}>
            <input className="form-control m-3"
                type='text'
                name='product'
                value={product}
                placeholder="Producto" onChange={onInputChange} />
            <input className="form-control m-3"
                type='text'
                name='price'
                value={price}
                placeholder="Precio" onChange={event => onInputChange(event)} />
            <input className="form-control m-3"
                type='text'
                name='quantity'
                value={quantity}
                placeholder="Cantidad" onChange={onInputChange} />

            <button
                type="submit"
                className="btn btn-primary m-3">Agregar Item</button>
        </form>
    </>)
}