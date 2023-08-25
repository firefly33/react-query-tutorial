import { useState } from 'react'
import { useQuery } from 'react-query'
import { getDummyData, getDummyDataById } from '../services/DummyService'
import Dummy from './Dummy'

function ReactQuery() {
  const [idDummyToQuery] = useState(1)

  const { data: dummies, isLoading: isLoadingDummies, refetch: refetchDummies } = useQuery({
    queryKey: ["get-dummy-data"],
    queryFn: getDummyData,
    enabled: false
  })

  const { data: dummy, isLoading, refetch } = useQuery({
    queryKey: ["get-dummy-data-one"],
    queryFn: () => getDummyDataById(idDummyToQuery),
    enabled: false
  })

  if (isLoadingDummies || isLoading) return <>Please wait, loading data...</>

  return (
    <div className='flex flex-col gap-2'>
        <button className='px-3 py-2 text-white rounded-lg bg-cyan-700' onClick={refetch}>Rechercher un produit</button>

        <section className='flex flex-col gap-4'>
          <Dummy dummy={dummy} />
        </section>

        <span>Ou</span>

        <button className='px-3 py-2 text-white rounded-lg bg-cyan-700' onClick={refetchDummies}>Rechercher des produits</button>
        
        <section className='flex flex-col gap-4'>
          {!!dummies && dummies?.map((dummy) => (
            <Dummy key={dummy} dummy={dummy} />
          ))}
        </section>
    </div>
  )
}

export default ReactQuery
