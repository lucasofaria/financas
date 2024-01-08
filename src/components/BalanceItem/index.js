import React, { useMemo } from 'react';
import { Container, Label, Balance } from './styles';

export default function BalanceItem({ data }){
  const labelName = useMemo(() => {
    if(data.tag === 'saldo'){
      return{
        label: 'Saldo atual',
        color: '3B3DBF'
      }
    }else if(data.tag === 'receita'){
      return{
        label: 'Entradas do dia',
        color: '00B94A'
      }
    }else{
      return{
        label: 'Saidas do dia',
        color: 'EF463A'
      }
    }
  }, [data])
 
  return(
   <Container bg={labelName.color}>
    <Label>{labelName.label}</Label>
    <Balance>R$ {data.saldo}</Balance>
   </Container>
  );
}