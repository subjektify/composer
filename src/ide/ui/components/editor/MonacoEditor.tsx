import React from 'react'
import Editor from '@monaco-editor/react'

export const MonacoEditor = () => {
    return (
        <Editor height="91vh" defaultLanguage="javascript" defaultValue="// some comment" />
    )
}
