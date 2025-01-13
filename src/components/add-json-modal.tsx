"use client";

import { Button } from "./ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { useState } from "react";

export const AddJsonModal = () => {
    const [jsonData, setJsonData] = useState('');
    const [jsonName, setJsonName] = useState('');

    const handleSave = () => {
        return {
            jsonName, jsonData
        }
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Add JSON</Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
                <DialogHeader>
                    <DialogTitle>JSON Editor</DialogTitle>
                    <DialogDescription>
                        Edite e salve seu JSON.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label>JSON Name</Label>
                        <Input
                            value={jsonName}
                            onChange={e => setJsonName(e.target.value)}
                            placeholder="Insira o nome do JSON"
                            className="rounded-none"
                        />
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label>JSON Data</Label>
                        <CodeMirror
                            value={jsonData}
                            height="200px"
                            extensions={[json()]}
                            onChange={(value) => setJsonData(value)}
                            className="border shadow-sm"
                        />
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">Fechar</Button>
                        </DialogClose>
                        <Button disabled={!jsonName || !jsonData} onClick={handleSave}>Save</Button>
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>

    )
}