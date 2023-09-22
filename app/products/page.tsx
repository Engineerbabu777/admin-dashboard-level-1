





import ProductLayout from '@/components/products/ProductLayout'
import ProductListing from '@/components/products/ProductListing'
import React from 'react'

type Props = {}

function products({}: Props) {
  return (
    <>
    <ProductLayout>
      <ProductListing/>
    </ProductLayout>
    </>
  )
}

export default products