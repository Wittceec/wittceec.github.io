import fs from "fs";
import path from "path";
import matter from "gray-matter";

const notesDirectory = path.join(process.cwd(), "content/notes");

export type NoteItem = {
    name: string;
    path: string;
    type: "file" | "folder";
    children?: NoteItem[];
    content?: string;
    metadata?: {
        title?: string;
        date?: string;
        tags?: string[];
    };
};

export function getNotesTree(dir: string = notesDirectory, relativePath: string = ""): NoteItem[] {
    if (!fs.existsSync(dir)) {
        return [];
    }

    const items = fs.readdirSync(dir);
    const tree: NoteItem[] = [];

    items.forEach((item) => {
        const fullPath = path.join(dir, item);
        const itemRelativePath = path.join(relativePath, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            tree.push({
                name: item,
                path: itemRelativePath,
                type: "folder",
                children: getNotesTree(fullPath, itemRelativePath),
            });
        } else if (item.endsWith(".md")) {
            const fileContent = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContent);

            tree.push({
                name: item,
                path: itemRelativePath,
                type: "file",
                content,
                metadata: data,
            });
        }
    });

    return tree;
}
