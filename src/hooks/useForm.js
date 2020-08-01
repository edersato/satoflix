import { useState } from 'react';

function useForm(valoresIniciais) {
    const [values, setValues] = useState(valoresIniciais);
    function setValue(chave, values) {

        setValues({
            ...values,
            [chave]: values,
        })
    }

    function Handler(infoEvento) {
        setValue(
            infoEvento.target.getAttribute('name'),
            infoEvento.target.value);
    }

    function clearForm() {
        setValues(valoresIniciais);
    };

    return {
        values,
        Handler,
        clearForm,
    };
}

export default useForm;
