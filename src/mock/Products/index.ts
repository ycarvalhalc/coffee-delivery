import { v4 as uuidv4 } from 'uuid'
import expressoTradicional from "./expresso-tradicional.png"
import expressoAmericano from "./expresso-americano.png"
import expressoCremoso from "./expresso-cremoso.png"
import expressoGelado from "./expresso-gelado.png"
import cafeComLeite from "./cafe-com-leite.png"
import latte from "./latte.png"
import capuccino from "./capuccino.png"
import macchiato from "./macchiato.png"
import mocaccino from "./mocaccino.png"
import chocolateQuente from "./chocolate-quente.png"
import cubano from "./cubano.png"
import havaiano from "./havaiano.png"
import arabe from "./arabe.png"
import irlandes from "./irlandes.png"

export const products = [
  {
    id: uuidv4(),
    img_url: expressoTradicional,
    tags: ["tradicional"],
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.90
  },

  {
    id: uuidv4(),
    img_url: expressoAmericano,
    tags: ["tradicional"],
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.90
  },

  {
    id: uuidv4(),
    img_url: expressoCremoso,
    tags: ["tradicional"],
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.90
  },

  {
    id: uuidv4(),
    img_url: expressoGelado,
    tags: ["tradicional", "gelado"],
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.90
  },

  {
    id: uuidv4(),
    img_url: cafeComLeite,
    tags: ["tradicional", "com leite"],
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.90
  },

  {
    id: uuidv4(),
    img_url: latte,
    tags: ["tradicional", "com leite"],
    title: "Latte",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.90
  },

  {
    id: uuidv4(),
    img_url: capuccino,
    tags: ["tradicional", "com leite"],
    title: "Capuccino",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.90
  },

  {
    id: uuidv4(),
    img_url: macchiato,
    tags: ["tradicional", "com leite"],
    title: "Macchiato",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.90
  },

  {
    id: uuidv4(),
    img_url: mocaccino,
    tags: ["tradicional", "com leite"],
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.90
  },

  {
    id: uuidv4(),
    img_url: chocolateQuente,
    tags: ["especial", "com leite"],
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.90
  },

  {
    id: uuidv4(),
    img_url: cubano,
    tags: ["especial", "alcoólico", "gelado"],
    title: "Cubano",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.90
  },

  {
    id: uuidv4(),
    img_url: havaiano,
    tags: ["especial"],
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.90
  },

  {
    id: uuidv4(),
    img_url: arabe,
    tags: ["especial"],
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.90
  },

  {
    id: uuidv4(),
    img_url: irlandes,
    tags: ["especial", "alcoólico"],
    title: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.90
  }
]