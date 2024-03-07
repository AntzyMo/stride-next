'use client'
import React from 'react'
import { flexRender } from '@tanstack/react-table'

import TableItem from './tableItem'
import { useTableContext } from '@/contexts'

export default function TableBody() {
  const { table } = useTableContext()
  const rowData = table.getRowModel()

  return (
    <div>
      { rowData.rows.map(row => (
        <TableItem childrenDepth={row.depth} key={row.id}>
          {
            row.getVisibleCells().map(col => {
              return (
                <div
                  className='flex items-center'
                  key={col.id}
                  style={{
                    width: col.column.getSize()
                  }}
                >
                  {
                    flexRender(
                      col.column.columnDef.cell,
                      col.getContext()
                    )
                  }
                </div>
              )
            })
          }
        </TableItem>
      )) }
    </div>
  )
}
