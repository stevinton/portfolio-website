import React from 'react';
import { Dock } from 'primereact/dock';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import './css/CustomDock.css';

export function DockContent() {
    const items = [
        {
            label: 'LeetCode',
            icon: <img alt="LeetCode" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/96/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-bold-tal-revivo.png" width="40" />,
            command: () => {
                window.open('https://leetcode.com/u/STEVINTON/');
            }
        },
        {
            label: 'GitHub',
            icon: <img alt="GitHub" src="https://img.icons8.com/glyph-neue/50/github.png" width="40" />,
            command: () => {
                window.open('https://github.com/stevinton');
            }
        },
        {
            label: 'LinkedIn',
            icon: <img alt="LinkedIn" src="https://img.icons8.com/ios-filled/50/linkedin.png" width="40" />,
            command: () => {
                window.open('https://www.linkedin.com/in/stevinton-stev', '_blank');
            }
        },
        {
            label: 'Gmail',
            icon: <img alt="Gmail" src="https://img.icons8.com/ios-filled/50/gmail-new.png" width="40" />,
            command: () => {
                const email = "stevinton9@gmail.com";
                navigator.clipboard.writeText(email).then(() =>{
                    alert("Email is copied to your Clipboard");
                }).catch((err) =>{
                    console.error("Failed to copy", err);
                })
            }
        }
    ];

    return (
        <div>
            <Dock model={items} position="top" />
        </div>
    );
}
