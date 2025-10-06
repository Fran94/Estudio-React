import { findInvoiceById } from './Data/invoices';


findInvoiceById(1).then((result) => {
    console.log(result);
    console.log("Realizada con exito una tarea con delay")
}).catch((error) => {
    console.error(error);
});

