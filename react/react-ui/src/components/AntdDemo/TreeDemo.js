import React, { Component } from 'react'
import { Tree } from 'antd';
class TreeDemo extends Component {
  render () {
    const arr = [
      {
        label: '0-0',
        id: '0-0',
        child: [
          {
            label: '0-0-0',
            id: '0-0-0',
            child: [
              {
                label: '0-0-0-0',
                id: '0-0-0-0'
              },
              {
                label: '0-0-0-1',
                id: '0-0-0-1'
              }
            ]
          },
          {
            label: '0-0-1',
            id: '0-0-1'
          }
        ]
      },
      {
        label: '0-1',
        id: '0-1',
        child: [
          {
            label: '0-1-0',
            id: '0-1-0'
          },
          {
            label: '0-1-1',
            id: '0-1-1'
          }
        ]
      },
      {
        label: '0-2',
        id: '0-2'
      }
    ]
    // arr.forEach(item => {
    //   item.title = item.label
    //   item.key = item.id
    //   if (item.child) {
    //     item.children = item.child
    //   }
    //   delete item.label
    //   delete item.id
    //   delete item.child
    // })
    const fun = (arr) => {
      arr.forEach(item => {
        item.title = item.label
        item.key = item.id
        if (item.child) {
          item.children = item.child
        }
        delete item.label
        delete item.id
        delete item.child
        if (item.children) {
          fun(item.children)
        }
      })
    }
    fun(arr)
    console.log(arr)
    // arr.forEach(item => {
    //   if (item.children) {
    //     item.children.forEach(item => {
    //       item.title = item.label
    //       item.key = item.id
    //       if (item.child) {
    //         item.children = item.child
    //       }
    //       delete item.label
    //       delete item.id
    //       delete item.child
    //     })
    //   }
    // })
    // console.log(arr)
    // const obj = {
    //   label: '0-0',
    //   id: '0-0',
    //   child: []
    // }
    // const obj1 = {
    //   titel: obj.label,
    //   key: obj.id,
    //   children: obj.child
    // }
    // console.log(obj1)
    return (
      <div>
        <Tree
          blockNode
          treeData={arr}
        />
      </div>
    )
  }
}
export default TreeDemo