import { marked } from "marked";
import DOMPurify from "dompurify";

function Previewer({ text }) {
    const getMarkdownText = () => {
        const rawMarkup = marked.parse(text, { breaks: true });
        const cleanMarkup = DOMPurify.sanitize(rawMarkup);
        return { __html: cleanMarkup };
    };

    return (
        <section className="bg-Textarea w-full max-w-4xl font-mono my-3 border-1 shadow-[0px_0px_8px_black]">
            {/* heading */}
            <div className="bg-Secondary py-2 px-4 flex items-center justify-between font-Russo text-2xl font-medium">
                <span>Previewer</span>
            </div>

            <div
                id="preview"
                className="markdown-body prose max-w-none text-xl w-full p-4"
                dangerouslySetInnerHTML={getMarkdownText()}
            />
        </section>
    );
}

export default Previewer;
