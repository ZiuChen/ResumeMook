import React from 'react'
import './index.less'
import { getAppPath } from '@common/utils/appPath'
import fileAction from '@common/utils/file'

function Resume() {
  getAppPath().then((rootPath: string) => {
    console.log(rootPath)
    fileAction.read(rootPath + 'app/renderer/container/resume/index.tsx').then((data) => {
      console.log(data)
    })
  })

  return <div>Resume</div>
}

export default Resume
