"use server";

import fs from "fs";
import path from "path";
import { revalidatePath } from "next/cache";

const notesDirectory = path.join(process.cwd(), "content/notes");

export async function createFolder(folderPath: string) {
    const fullPath = path.join(notesDirectory, folderPath);

    // Prevent directory traversal
    if (!fullPath.startsWith(notesDirectory)) {
        throw new Error("Invalid path");
    }

    if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
        revalidatePath("/");
        return { success: true };
    }

    return { success: false, error: "Folder already exists" };
}

export async function createNote(folderPath: string, title: string) {
    // Sanitize filename
    const filename = title.toLowerCase().replace(/[^a-z0-9]+/g, "-") + ".md";
    const fullPath = path.join(notesDirectory, folderPath, filename);

    // Prevent directory traversal
    if (!fullPath.startsWith(notesDirectory)) {
        throw new Error("Invalid path");
    }

    if (fs.existsSync(fullPath)) {
        return { success: false, error: "File already exists" };
    }

    const date = new Date().toISOString().split("T")[0];
    const content = `---
title: "${title}"
date: "${date}"
tags: []
---

# ${title}

Start writing here...
`;

    fs.writeFileSync(fullPath, content);
    revalidatePath("/");
    return { success: true };
}
