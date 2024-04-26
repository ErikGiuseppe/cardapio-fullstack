import { useEffect, useState } from "react";
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";

import "./modal.css";

interface InputProps{
    label:string,
    value: string | number,
    updateValue(value: any): void
}


const Input = ({label,value,updateValue}:InputProps) =>{
    return(
        <>
            <label>{label}</label>
            <input value={value} onChange={evente => updateValue(evente.target.value)} ></input>
        
        </>
    )
}

interface ModalProps{
    closeModal():void
}
export function CreateModal ({ closeModal }: ModalProps){
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState(0)
    const [image,setImage] = useState("")
    const {mutate, isSuccess} = useFoodDataMutate();

    const submit = () =>{
        const foodData: FoodData={
            title,
            price,
            image,
            
        }
        mutate(foodData)
    }

    useEffect(()=>{
        if(isSuccess) return
        closeModal()
        

    }, [isSuccess])
        
    
    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastreu um novo item no cardapio</h2>
                <form className="input-container">
                    <Input label="title" value={title} updateValue={setTitle} />
                    <Input label="price" value={price} updateValue={setPrice} />
                    <Input label="image" value={image} updateValue={setImage} />
                </form>
                <button onClick={submit} className="btn-secondary">postar</button>
            </div>

        </div>

    )
}