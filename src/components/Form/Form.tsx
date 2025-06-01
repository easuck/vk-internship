import { useForm, type SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { addUser } from "../../api/usersRequests";
import './styles.scss';
import useData from "../../hooks/useData";


const Form = () => {
    const {data} = useData();
    const fields = data?.pages?.[0].data[0] ? Object.entries(data?.pages?.[0].data[0]).filter(entry => entry[0] != 'id') : []; 
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const mutation = useMutation({
        mutationFn: addUser,
        onSuccess: () => {reset()}
    })
    const onSubmit: SubmitHandler<any> = (data) => {
        mutation.mutate(data);
    }

    return(
        <form className="Form" onSubmit={handleSubmit(onSubmit)}>
            {
                fields.map(field => {
                    return(
                        <div className="Form_inputWrapper">
                            <label>{field[0].toUpperCase()}</label>
                            <input {...register(field[0], {required: true})}/>
                            {errors[field[0]] && <div className="Form_inputWrapper_error">Обязательное поле</div>}
                        </div>
                    )
                })
            }
            <input type='submit'/>
        </form>
    )
}

export default Form;