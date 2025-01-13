"use client";

import { Button } from "./ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { useState } from "react";

interface AddJsonModalProps {
    onSave: (name: string, value: string) => Promise<void>;
}

export const AddJsonModal = ({ onSave }: AddJsonModalProps) => {
    const [jsonData, setJsonData] = useState('');
    const [jsonName, setJsonName] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const handleSave = async () => {
        await onSave(jsonName, jsonData);
        setOpenModal(false);
        setJsonData('');
        setJsonName('');
    }
    return (
        <Dialog open={openModal} onOpenChange={setOpenModal}>
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
                            className="border shadow-sm text-black"
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