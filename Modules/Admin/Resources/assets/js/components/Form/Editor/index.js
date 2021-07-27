import React from 'react'
import {Form} from "antd"
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'


const config = {
    toolbar: [
        'heading',
        '|',
        'bold',
        'italic',
        '|',
        'numberedList',
        'bulletedList',
        '|',
        'indent',
        'outdent',
        '|',
        'link',
        'blockQuote',
        'imageUpload',
        '|',
        'undo',
        'redo'
    ],
    image: {
        styles: [
            'alignLeft', 'alignCenter', 'alignRight'
        ],
        toolbar: [
            'imageStyle:alignLeft',
            'imageStyle:alignCenter',
            'imageStyle:alignRight',
            '|',
            'imageTextAlternative'
        ]
    },
    ckfinder: {
        uploadUrl: "/api/admin/medias"
    }
}

const Editor = ({label, name, rules = []}) => {
    return (
        <Form.Item
            label={label}
            name={name}
            valuePropName='data'
            getValueFromEvent={(event, editor) => editor.getData()}
            rules={rules}>
            <CKEditor
                editor={ClassicEditor}
                config={config}
            />
        </Form.Item>
    )
}

export default Editor
