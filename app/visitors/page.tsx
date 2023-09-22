



import VisitorsLayout from '@/components/visitors/VisitorLayout'
import VisitorsList from '@/components/visitors/VisitorListing'
import React from 'react'

type Props = {}

function visitors({}: Props) {
  return (<>
  <VisitorsLayout>
    <VisitorsList />
  </VisitorsLayout>
  </>
  )
}

export default visitors