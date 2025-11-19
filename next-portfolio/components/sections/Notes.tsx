"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, FileText, ChevronRight, ChevronDown, X, FolderPlus, FilePlus } from "lucide-react";
import { NoteItem } from "@/lib/notes";
import { createFolder, createNote } from "@/app/actions";

interface NotesProps {
    tree: NoteItem[];
}

const FileIcon = ({ name }: { name: string }) => {
    if (name.endsWith(".md")) return <FileText className="w-4 h-4 text-blue-400" />;
    return <FileText className="w-4 h-4 text-gray-400" />;
};

const FileTreeItem = ({ item, onSelect, currentPath }: { item: NoteItem; onSelect: (item: NoteItem) => void; currentPath: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (item.type === "folder") {
        return (
            <div className="pl-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 py-1 hover:bg-white/5 w-full text-left rounded px-2 transition-colors"
                >
                    {isOpen ? <ChevronDown className="w-4 h-4 text-gray-500" /> : <ChevronRight className="w-4 h-4 text-gray-500" />}
                    <Folder className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-300">{item.name}</span>
                </button>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden border-l border-white/10 ml-3"
                        >
                            {item.children?.map((child) => (
                                <FileTreeItem key={child.path} item={child} onSelect={onSelect} currentPath={currentPath} />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    return (
        <div className="pl-8">
            <button
                onClick={() => onSelect(item)}
                className="flex items-center gap-2 py-1 hover:bg-white/5 w-full text-left rounded px-2 transition-colors group"
            >
                <FileIcon name={item.name} />
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{item.name}</span>
            </button>
        </div>
    );
};

export const Notes = ({ tree }: NotesProps) => {
    const [selectedFile, setSelectedFile] = useState<NoteItem | null>(null);
    const [isCreating, setIsCreating] = useState<"folder" | "note" | null>(null);
    const [newItemName, setNewItemName] = useState("");
    const [currentPath] = useState(""); // Root by default

    const handleCreate = async () => {
        if (!newItemName) return;

        if (isCreating === "folder") {
            await createFolder(currentPath ? `${currentPath}/${newItemName}` : newItemName);
        } else if (isCreating === "note") {
            await createNote(currentPath, newItemName);
        }

        setIsCreating(null);
        setNewItemName("");
    };

    return (
        <section id="notes" className="py-20 bg-black min-h-screen flex flex-col">
            <div className="container mx-auto px-4 flex-grow flex flex-col">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                        Field Notes
                    </h2>
                    <p className="text-gray-400">
                        /home/wittceec/notes
                    </p>
                </motion.div>

                <div className="flex-grow flex flex-col md:flex-row gap-6 h-[600px] border border-white/10 rounded-xl overflow-hidden bg-[#0d1117]">
                    {/* Sidebar */}
                    <div className="w-full md:w-64 bg-[#010409] border-r border-white/10 flex flex-col">
                        <div className="p-4 border-b border-white/10 flex justify-between items-center">
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Explorer</div>
                            <div className="flex gap-1">
                                <button
                                    onClick={() => setIsCreating("folder")}
                                    className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white"
                                    title="New Folder"
                                >
                                    <FolderPlus className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setIsCreating("note")}
                                    className="p-1 hover:bg-white/10 rounded text-gray-400 hover:text-white"
                                    title="New Note"
                                >
                                    <FilePlus className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {isCreating && (
                            <div className="p-2 bg-white/5 border-b border-white/10">
                                <input
                                    type="text"
                                    value={newItemName}
                                    onChange={(e) => setNewItemName(e.target.value)}
                                    placeholder={isCreating === "folder" ? "Folder name..." : "Note title..."}
                                    className="w-full bg-black border border-white/20 rounded px-2 py-1 text-sm text-white focus:outline-none focus:border-blue-500"
                                    autoFocus
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") handleCreate();
                                        if (e.key === "Escape") setIsCreating(null);
                                    }}
                                />
                            </div>
                        )}

                        <div className="flex-grow overflow-y-auto p-2">
                            {tree.map((item) => (
                                <FileTreeItem key={item.path} item={item} onSelect={setSelectedFile} currentPath={currentPath} />
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-grow p-6 overflow-y-auto relative">
                        {selectedFile ? (
                            <motion.div
                                key={selectedFile.path}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="max-w-3xl mx-auto"
                            >
                                <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{selectedFile.metadata?.title || selectedFile.name}</h3>
                                        <div className="flex gap-2">
                                            {selectedFile.metadata?.tags?.map(tag => (
                                                <span key={tag} className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                                    #{tag}
                                                </span>
                                            ))}
                                            {selectedFile.metadata?.date && (
                                                <span className="text-xs px-2 py-1 text-gray-500">
                                                    {selectedFile.metadata.date}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <button onClick={() => setSelectedFile(null)} className="text-gray-500 hover:text-white">
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="prose prose-invert prose-sm max-w-none">
                                    <pre className="whitespace-pre-wrap font-mono text-sm text-gray-300">
                                        {selectedFile.content}
                                    </pre>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-gray-500">
                                <Folder className="w-16 h-16 mb-4 opacity-20" />
                                <p>Select a file to view contents</p>
                                <p className="text-sm mt-2 opacity-50">Use the + icons to create new content</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
