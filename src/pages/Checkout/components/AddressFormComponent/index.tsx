import { MapPinLine } from "phosphor-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z }from "zod"

import { 
  AddressFormContainer, 
  AddressHeader, 
  AddressHeaderContent,
  FormContainer,
  InputSmall, 
  InputFullWidth, 
  GroupInputs, 
  InputBase, 
  InputExtraSmall
} from "./styles";
import { useCart } from "../../../../hooks/useCart";

interface FormInputs {
  cep: number
  street: string
  number: number
  fullAddress: string
  neighborhood: string
  city: string
  state: string
}

const addressFormValidationSchema = z.object({
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.number(),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF').max(2)
})

export type AddressInfo = z.infer<typeof addressFormValidationSchema>

export function AddressForm() {
  const { register, handleSubmit } = useForm<FormInputs>({
    resolver: zodResolver(addressFormValidationSchema),
  })

  const { checkout } = useCart()

  function submitOrder(data: FormInputs) {
    checkout(data)
  }

  return (
    <AddressFormContainer>
      <AddressHeader>
        <MapPinLine size={22}/>
        <AddressHeaderContent>
          <h2>Endereço de Entrega</h2>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </AddressHeaderContent>
      </AddressHeader>
      
      <FormContainer>
        <form id="order" onSubmit={handleSubmit(submitOrder)}>
          <InputSmall 
            placeholder="CEP"
            {...register("cep", { valueAsNumber: true })}
          />

          <InputFullWidth
            placeholder="Rua"
            {...register("street")}
          />

          <GroupInputs>
            <InputSmall
              placeholder="Número"
              {...register("number", { valueAsNumber: true })}

            />
            <InputBase 
              placeholder="Complemento"
              {...register("fullAddress")}

            />
          </GroupInputs>

          <GroupInputs>
            <InputSmall
              placeholder="Bairro" 
              {...register("neighborhood")}

            />
            <InputBase 
              placeholder="Cidade"
              {...register("city")}

            />
            <InputExtraSmall 
              placeholder="UF" 
              {...register("state")}

            />
          </GroupInputs>
        </form>
      </FormContainer>
    </AddressFormContainer>
  )
}