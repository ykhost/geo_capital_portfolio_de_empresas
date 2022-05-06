import { Container } from "./styles";
import { BsFillInfoSquareFill } from 'react-icons/bs'

import { useNavigate  } from "react-router-dom";
import { useCompanies } from "../../hook/useCompanies";
import { Skeleton } from "@mui/material";


export function Companies () {
  const { companiesFormatted } = useCompanies()
  const navigate = useNavigate ();

  const handlerClick = (company: string) => {
    navigate(`/company/${ company }`)
  }

  if (!companiesFormatted) {
    return (
      <Container>
        <table>
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Ticker</th>
              <th>Valor</th>
              <th>Variação</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Skeleton animation="wave" height={35} /></td>
              <td><Skeleton animation="wave" height={35}/></td>
              <td><Skeleton animation="wave" height={35}/></td>
              <td><Skeleton animation="wave" height={35}/></td>
              <td>
               <button title="Detalhes"><BsFillInfoSquareFill/></button>
              </td>
            </tr>
            <tr>
              <td><Skeleton animation="wave" height={35} /></td>
              <td><Skeleton animation="wave" height={35}/></td>
              <td><Skeleton animation="wave" height={35}/></td>
              <td><Skeleton animation="wave" height={35}/></td>
              <td>
               <button title="Detalhes"><BsFillInfoSquareFill/></button>
              </td>
            </tr>
            <tr>
              <td><Skeleton animation="wave" height={35} /></td>
              <td><Skeleton animation="wave" height={35}/></td>
              <td><Skeleton animation="wave" height={35}/></td>
              <td><Skeleton animation="wave" height={35}/></td>
              <td>
               <button title="Detalhes"><BsFillInfoSquareFill/></button>
              </td>
            </tr>
            <tr>
              <td><Skeleton animation="wave" height={35} /></td>
              <td><Skeleton animation="wave" height={35}/></td>
              <td><Skeleton animation="wave" height={35}/></td>
              <td><Skeleton animation="wave" height={35}/></td>
              <td>
               <button title="Detalhes"><BsFillInfoSquareFill/></button>
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    )
  }


  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Ticker</th>
            <th>Valor</th>
            <th>Variação</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {companiesFormatted.map(company =>(
            <tr className="content" key={company.symbol}>
              <td>{company.longName}</td>
              <td>{company.symbol}</td>
              <td className="numberField">{company.priceFormatted}</td>
              <td className={company.stateVariation}>
                {company.stateVariation === "up" ? "+" : undefined}
                {company.percentFormatted}%
              </td>
              <td>
                <button title="Detalhes" onClick={() => handlerClick(company.symbol)}><BsFillInfoSquareFill/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
