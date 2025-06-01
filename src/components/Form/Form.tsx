import { useForm, type SubmitHandler } from "react-hook-form";
import type { Sex } from "../../models/IUser";
import { useMutation } from "@tanstack/react-query";
import { addUser } from "../../api/usersRequests";
import './styles.scss';

type Inputs = {
    name: string,
    surname: string,
    email: string,
    sex: Sex,
    birthdate: Date;
}

const Form = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const mutation = useMutation({
        mutationFn: addUser
    })
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        mutation.mutate(data);
    }

    return(
        <form className="Form" onSubmit={handleSubmit(onSubmit)}>
            <div className="Form_inputWrapper">
                <label>Name</label>
                <input {...register('name', {required: true})}/>
                {errors.name && <div>Обязательное поле</div>}
            </div>
            <div className="Form_inputWrapper">
                <label>Surname</label>
                <input {...register('surname', {required: true})}/>
                {errors.surname && <div>Обязательное поле</div>}
            </div>
            <div className="Form_inputWrapper">
                <label>Email</label>
                <input {...register('email', {required: true})}/>
                {errors.email && <div>Обязательное поле</div>}
            </div>
            <div className="Form_inputWrapper">
                <label>Sex</label>
                <select {...register('sex', {required: true})}>
                    <option>male</option>
                    <option>female</option>
                </select>
                {errors.sex && <div>Обязательное поле</div>}
            </div>
            <div className="Form_inputWrapper">
                <label>Birthdate</label>
                <input type='date' {...register('birthdate', {required: true})}/>
                {errors.birthdate && <div>Обязательное поле</div>}
            </div>
            <input type='submit'/>
        </form>
    )
}

export default Form;