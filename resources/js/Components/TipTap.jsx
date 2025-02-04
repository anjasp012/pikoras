import { BubbleMenu, EditorProvider, FloatingMenu, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

const MenuBar = () => {
    const { editor } = useCurrentEditor()

    if (!editor) {
        return null
    }

    return (
        <div className="mb-3">
            <div className="flex flex-wrap gap-1">
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleBold()
                            .run()
                    }
                    className={editor.isActive('bold') ? 'bg-primary px-2 text-white rounded font-bold' : 'bg-primary/10 px-2 rounded py-2'}
                >
                    Bold
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleItalic()
                            .run()
                    }
                    className={editor.isActive('italic') ? 'bg-primary px-2 text-white rounded font-bold' : 'bg-primary/10 px-2 rounded py-2'}
                >
                    Italic
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleStrike()
                            .run()
                    }
                    className={editor.isActive('strike') ? 'bg-primary px-2 text-white rounded font-bold' : 'bg-primary/10 px-2 rounded py-2'}
                >
                    Strike
                </button>
                <button
                    type="button" onClick={() => editor.chain().focus().unsetAllMarks().run()} className='bg-primary/10 px-2 rounded py-2'>
                    Clear
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={editor.isActive('paragraph') ? 'bg-primary px-2 text-white rounded font-bold' : 'bg-primary/10 px-2 rounded py-2'}
                >
                    Paragraph
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor.isActive('heading', { level: 1 }) ? 'bg-primary px-2 text-white rounded font-bold' : 'bg-primary/10 px-2 rounded py-2'}
                >
                    H1
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive('heading', { level: 2 }) ? 'bg-primary px-2 text-white rounded font-bold' : 'bg-primary/10 px-2 rounded py-2'}
                >
                    H2
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editor.isActive('heading', { level: 3 }) ? 'bg-primary px-2 text-white rounded font-bold' : 'bg-primary/10 px-2 rounded py-2'}
                >
                    H3
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                    className={editor.isActive('heading', { level: 4 }) ? 'bg-primary px-2 text-white rounded font-bold' : 'bg-primary/10 px-2 rounded py-2'}
                >
                    H4
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                    className={editor.isActive('heading', { level: 5 }) ? 'bg-primary px-2 text-white rounded font-bold' : 'bg-primary/10 px-2 rounded py-2'}
                >
                    H5
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                    className={editor.isActive('heading', { level: 6 }) ? 'bg-primary px-2 text-white rounded font-bold' : 'bg-primary/10 px-2 rounded py-2'}
                >
                    H6
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'bg-primary px-2 text-white rounded font-bold' : 'bg-primary/10 px-2 rounded py-2'}
                >
                    Bullet list
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive('orderedList') ? 'bg-primary px-2 text-white rounded font-bold' : 'bg-primary/10 px-2 rounded py-2'}
                >
                    Ordered list
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .undo()
                            .run()
                    }
                    className='bg-primary/10 px-2 rounded py-2'
                >
                    Undo
                </button>
                <button
                    type="button"
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .redo()
                            .run()
                    }
                    className='bg-primary/10 px-2 rounded py-2'
                >
                    Redo
                </button>
            </div>
        </div>
    )
}

export default function TipTap({ values, setValues }) {
    const extensions = [StarterKit]
    const content = values.post_content
    return (
        <div className="border border-input bg-background rounded-md p-2 not-prose">
            <EditorProvider onUpdate={({ editor }) => {
                const newContent = editor.getHTML()
                setValues(prev => ({ ...prev, post_content: newContent })) // Update state values
            }} slotBefore={<MenuBar />} extensions={extensions} content={content} className='bg-primary/10 px-2 rounded py-2'></EditorProvider>
        </div>
    )
}
