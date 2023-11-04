import { useEffect, useState } from "react"
import { Input } from "./input"
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate"
import { FoodData } from "../../interface/FoodData"
import "./modal.css";

interface CreateModalProps {
  closeModal: () => void;
}

export function CreateModal({ closeModal } : CreateModalProps) {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState("")
  const { mutate, isSuccess } = useFoodDataMutate()

  const submit = () => {
    const foodData: FoodData = {
      title,
      price,
      image,
    }

    mutate(foodData)
  }

  useEffect(() => {
    if (isSuccess) {
      closeModal()
    }
  }, [isSuccess])

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Cadastre um novo item no cardápio</h2>
        <form className="input-container">
          <Input label="title" value={title} updateValue={setTitle} />
          <Input label="price" value={price} updateValue={setPrice} />
          <Input label="image" value={image} updateValue={setImage} />
        </form>
        <button onClick={submit} className="btn-secondary">
          Adicionar
        </button>
      </div>
    </div>
  )
}
