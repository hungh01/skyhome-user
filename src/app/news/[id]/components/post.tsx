'use client';
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { Table } from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";

import "../styles/tiptap.css";

const mockData = {
    "type": "doc",
    "content": [
        {
            "type": "heading",
            "attrs": { "level": 1 },
            "content": [{ "type": "text", "text": "SkyHome – Giải pháp vệ sinh toàn diện cho gia đình và doanh nghiệp" }]
        },
        {
            "type": "paragraph",
            "content": [
                { "type": "text", "text": "SkyHome là đơn vị cung cấp dịch vụ vệ sinh chuyên nghiệp, mang đến giải pháp làm sạch toàn diện nhằm nâng cao chất lượng không gian sống và làm việc." }
            ]
        },
        {
            "type": "heading",
            "attrs": { "level": 2 },
            "content": [{ "type": "text", "text": "Các dịch vụ chính" }]
        },
        {
            "type": "bulletList",
            "content": [
                {
                    "type": "listItem",
                    "content": [
                        { "type": "paragraph", "content": [{ "type": "text", "text": "Vệ sinh theo giờ – phù hợp cho gia đình, văn phòng cần dọn dẹp định kỳ." }] }
                    ]
                },
                {
                    "type": "listItem",
                    "content": [
                        { "type": "paragraph", "content": [{ "type": "text", "text": "Tổng vệ sinh toàn diện – làm sạch sâu toàn bộ không gian sau xây dựng, sửa chữa hoặc định kỳ." }] }
                    ]
                },
                {
                    "type": "listItem",
                    "content": [
                        { "type": "paragraph", "content": [{ "type": "text", "text": "Vệ sinh thiết bị – chuyên vệ sinh máy lạnh, máy giặt, thảm, sofa." }] }
                    ]
                }
            ]
        },
        {
            "type": "blockquote",
            "content": [
                {
                    "type": "paragraph",
                    "content": [{ "type": "text", "text": "“Chúng tôi tin rằng không gian sạch sẽ là nền tảng của sức khỏe, sự thoải mái và hiệu suất làm việc.”" }]
                }
            ]
        },
        {
            "type": "heading",
            "attrs": { "level": 2 },
            "content": [{ "type": "text", "text": "Bảng giá dịch vụ cơ bản" }]
        },
        {
            "type": "table",
            "content": [
                {
                    "type": "tableRow",
                    "content": [
                        { "type": "tableHeader", "content": [{ "type": "text", "text": "Dịch vụ" }] },
                        { "type": "tableHeader", "content": [{ "type": "text", "text": "Giá (VNĐ)" }] }
                    ]
                },
                {
                    "type": "tableRow",
                    "content": [
                        { "type": "tableCell", "content": [{ "type": "text", "text": "Vệ sinh theo giờ" }] },
                        { "type": "tableCell", "content": [{ "type": "text", "text": "100,000 / giờ" }] }
                    ]
                },
                {
                    "type": "tableRow",
                    "content": [
                        { "type": "tableCell", "content": [{ "type": "text", "text": "Tổng vệ sinh toàn diện" }] },
                        { "type": "tableCell", "content": [{ "type": "text", "text": "500,000 / gói" }] }
                    ]
                },
                {
                    "type": "tableRow",
                    "content": [
                        { "type": "tableCell", "content": [{ "type": "text", "text": "Vệ sinh máy lạnh" }] },
                        { "type": "tableCell", "content": [{ "type": "text", "text": "250,000 / chiếc" }] }
                    ]
                }
            ]
        },
        {
            "type": "paragraph",
            "content": [
                { "type": "text", "marks": [{ "type": "italic" }], "text": "Bài viết này vẫn đang trong quá trình xây dựng và sẽ được cập nhật thêm trong thời gian tới." }
            ]
        }
    ]
}



export default function Post() {


    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3, 4], // cho phép heading h1-h4
                },
            }),
            Image,
            Table.configure({ resizable: true }),
            TableRow,
            TableCell,
            TableHeader,
        ],
        editorProps: {
            attributes: {
                class: "prose prose-lg  mx-auto bg-white p-10 rounded-2xl shadow-md", // apply Tailwind Typography vào editor container
            },
        },
        content: mockData,
        editable: false,
        immediatelyRender: false
    });

    return (
        <EditorContent editor={editor} className="tiptap" />

    );
}
